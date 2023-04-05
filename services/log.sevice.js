import { bgRed, bgGreen, bgCyan} from 'chalk';

const printError = (error) => {
  console.log(`${bgRed('ERROR')} ${error.message}`);
};

const printSuccess = (message) => {
  console.log(`${bgGreen('SUCCESS')} ${message}`);
};

const printHelp = () => {
  console.log(`${bgGreen('HELP')} 
  'Без параметров вывод погоды'
  'вывод погоды по городу.'
  ''`);
};

export { printError, printSuccess };
