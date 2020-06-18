import { TDependencyName } from './types';

export interface IDependency {
  name: TDependencyName;
  version: string;
  requiredBy: IDependency | null;
}

export interface IPackageJson {
  name: string;
  version: string;
  dependencies?: {
    [x: string]: string;
  };
  devDependencies?: {
    [x: string]: string;
  };
  peerDependencies?: {
    [x: string]: string;
  };
}

export interface IArguments {
  production?: boolean;
  development?: boolean;
}
