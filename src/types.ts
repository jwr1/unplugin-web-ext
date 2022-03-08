export type Manifest = string | Record<string, unknown>;

export interface Options {
  /** Single element or list of filenames and actual objects to extend from. */
  manifest: Manifest | Manifest[];
  /** Output file indentation */
  indent?: number;
  /**
   * Properties pulled from `package.json` file.
   *
   * Use a `.` to specify inner properties.
   * Use a `:` to customize the output property location.
   *
   * @example
   * ```js
   * pkgJsonProps: ['version', 'name: short_name']
   * ```
   */
  pkgJsonProps?: string[];
}
