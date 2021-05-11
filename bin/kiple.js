#!/usr/bin/env node
'use strict';

var commander = require('commander')
var meta = require('../package.json')

ommander
	.version(`v${meta.version}`, '-v, --version')

commander
	.command('create [name]')
	.alias('c')
	.description('创建kipleFE本地项目')
	.action(function (name) {
		console.log(name)
	})

commander.parse(process.argv)