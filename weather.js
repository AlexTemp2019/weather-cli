#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/service.js';
import { saveKeyValue } from './services/storage.service.js';
import {PARAM} from './services/api.service';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен.');
    return;
  }
  try {
    await saveKeyValue('token', token);
    printSuccess('Токен сохранён');
  } catch (e) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv.slice(2));
  console.log(args);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    saveKeyValue('city', args.s);
  }
  if (args.t) {
    saveToken(args.t);
  }
};

initCLI();
