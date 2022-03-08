import { readFileSync, readdirSync } from 'fs';
import test from 'ava';

const expected = readFileSync('./expect.json', { encoding: 'utf8' });

readdirSync('./dist').forEach((dir) => {
  test(dir, (t) => {
    t.is(readFileSync(`./dist/${dir}/manifest.json`, { encoding: 'utf8' }), expected);
  });
});
