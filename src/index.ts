import 'dotenv/config';
import { spawn } from 'node:child_process';

const logFileName = process.env.LOG_FILE_NAME;

const dockerLogs = spawn('tail', ['-n 1', '-f', logFileName]);

dockerLogs.stdout.on('data', (data) => {
  const logData = data.toString();
  console.log(logData);

  if (
    logData.includes(
      '[Server thread/INFO] [minecraft/MinecraftServer]: Spawned ',
    )
  ) {
    console.log('hello');
  }
});
