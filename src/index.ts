import dotenv from 'dotenv';
import { createReadStream, statSync } from 'node:fs';

dotenv.config();

const logFileName = process.env.LOG_FILE_NAME;

const logStream = createReadStream(logFileName, {
  encoding: 'utf8',
  start: statSync(logFileName).size,
});

logStream.on('data', (data) => {
  console.log(data);
});
