import { createUnplugin } from 'unplugin';
import { resolve } from 'path';
import deepmerge from 'deepmerge';
import { Manifest, Options } from './types';

const getProp = (obj: any, path: string): [any, string] => {
  const parts = path.split('.');
  for (let i = 0; i < parts.length; ++i) obj = obj[parts[i]];
  return [obj, parts[parts.length - 1]];
};

const setProp = (obj: any, path: string, value: unknown): void => {
  const parts = path.split('.');
  const limit = parts.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key = parts[i];
    obj = obj[key] ?? (obj[key] = {});
  }
  obj[parts[limit]] = value;
};

export const UnpluginWebExt = createUnplugin<Options>((options) => ({
  name: 'unplugin-web-ext',
  buildStart() {
    if (!options) return;

    const requireWatch = (id: string) => {
      const idPath = resolve(process.cwd(), id);
      this.addWatchFile(idPath);
      const idModule = require(idPath);
      delete require.cache[require.resolve(idPath)];
      return idModule;
    };

    const resolveManifest = (item: Manifest) => {
      if (typeof item === 'string') return requireWatch(item);

      return item;
    };

    const manifest: Record<string, unknown> = Array.isArray(options.manifest)
      ? options.manifest.reduce(
          // @ts-ignore
          (prev, current) => deepmerge(prev, resolveManifest(current)),
          {}
        )
      : resolveManifest(options.manifest);

    if (options.pkgJsonProps) {
      const pkgJson: Record<string, unknown> = requireWatch('package.json');

      options.pkgJsonProps.forEach((prop) => {
        const [getPart, setPart] = prop.split(':').map((v) => v.trim());

        const getPartParsed = getProp(pkgJson, getPart);

        if (setPart) {
          setProp(manifest, setPart, getPartParsed[0]);
        } else {
          setProp(manifest, getPartParsed[1], getPartParsed[0]);
        }
      });
    }

    this.emitFile({
      type: 'asset',
      fileName: 'manifest.json',
      source: JSON.stringify(manifest, undefined, options.indent),
    });
  },
}));
