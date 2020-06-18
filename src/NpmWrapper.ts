import npm from 'npm';
import { IArguments } from './interfaces';

export default class NpmWrapper {
  constructor(private readonly argv: IArguments) {}
  public init() {
    return new Promise(resolve =>
      npm.load({ save: false, production: this.argv.production }, () => resolve()),
    );
  }

  public install(dependencies: string[]) {
    return new Promise((resolve, reject) => {
      npm.commands.install(dependencies, (error, result) =>
        error ? reject(error) : resolve(result),
      );
    });
  }
}
