#!/usr/bin/env node
import program from 'commander';

program
  .description('Compares two configuration files and shows a difference')
  .option('-v, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .parse(process.argv);
