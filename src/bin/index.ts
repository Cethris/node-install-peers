#!/usr/bin/env node

import Installer from '../Installer';
import yargs from 'yargs';
import { IArguments } from '../interfaces';

process.on('unhandledRejection', reason => {
  // tslint:disable-next-line:no-console
  console.log(reason);
  process.exit(1);
});

// tslint:disable-next-line:no-unused-expression
yargs
  .command(
    '*',
    'Install peer dependencies',
    yargs => {
      return yargs.option('production', {
        alias: ['p', 'prod'],
        default: false,
        description: 'Tells NPM to skip devDependencies',
        type: 'boolean',
      });
    },
    (argv: IArguments) => new Installer(argv).run(),
  )
  .help().argv;
