// tslint:disable:no-console
import Package from './Package';
import { IArguments } from './interfaces';
import NpmWrapper from './NpmWrapper';

export default class Installer {
  private readonly npm = new NpmWrapper(this.argv);
  constructor(private readonly argv: IArguments) {}

  public async run() {
    const { peerDependencies } = new Package();

    const dependenciesArray: string[] = [];
    for (const [dependency, version] of peerDependencies) {
      dependenciesArray.push(`${dependency}@${version}`);
    }

    await this.npm.init();
    await this.npm.install(dependenciesArray);

    console.log('\n\nDone!\n');
    console.log('Peer Dependencies:');
    for (const [dependency, version] of peerDependencies) {
      console.log(` - ${dependency}@${version}`);
    }
    dependenciesArray.map(it => ' - ' + it).join('\n');
  }
}
