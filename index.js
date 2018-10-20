#!/usr/bin/env node

const program = require('commander');
const packageJson = require('./package.json');
const runProxyServer = require('./server');

program
  .version(packageJson.version)
  .arguments('<port> <target>')
  .action(runProxyServer);
  program.parse(process.argv);