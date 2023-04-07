import { homedir } from 'node:os';
import { join } from 'node:path';
import { writeFile, readFile, stat } from 'node:fs/promises';

const filePath = join(homedir(), 'weather-data.json');
let data = {};

const saveKeyValue = async (key, value) => {
  if (await isExists(filePath)) {
    const read = await readFile(filePath);
    data = JSON.parse(read);
  }
  data[key] = value;
  await writeFile(filePath, JSON.stringify(data));
};

const isExists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getKey = async (key) => {
  if (await isExists(filePath)) {
    const read = await readFile(filePath);
    data = JSON.parse(read);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKey };
