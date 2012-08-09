#!/usr/bin/env node

var program = require('commander');
var str2js = require('../');
var fs = require('fs');
var read = fs.readFileSync; 

program
  .usage('[input]')
  .option('-e, --exports <variable>', 'Exports variable')
  .parse(process.argv);

if (program.args.length == 1) {
  var file = program.args[0];
  var source = read(file, 'utf8');
  var js = str2js(source, program.exports)
  process.stdout.write(js);
}
