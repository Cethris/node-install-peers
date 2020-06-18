import fs from 'fs';
import { IPackageJson } from './interfaces';

export default class Package {
  private readonly config: IPackageJson;

  constructor(path: string = 'package.json') {
    const contents = fs.readFileSync(path, { encoding: 'utf8' });
    this.config = JSON.parse(contents);
  }

  get prodDependencies(): Map<string, string> {
    const { dependencies } = this.config;

    return dependencies ? new Map(Object.entries(dependencies)) : new Map();
  }

  get devDependencies(): Map<string, string> {
    const { devDependencies } = this.config;

    return devDependencies ? new Map(Object.entries(devDependencies)) : new Map();
  }

  get peerDependencies(): Map<string, string> {
    const { peerDependencies } = this.config;

    return peerDependencies ? new Map(Object.entries(peerDependencies)) : new Map();
  }
}
