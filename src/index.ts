import 'dotenv/config';
import { spawn } from 'node:child_process';
import {
  isLegendarySpawnMessage,
  sendLegendarySpawnMessage,
} from './discord/legendary-spawn-message';
import { sendErrorMessage } from './discord/send-message';

const logFileName = process.env.LOG_FILE_NAME;

const dockerLogs = spawn('tail', ['-n 0', '-f', logFileName]);

dockerLogs.stdout.on('data', async (data) => {
  try {
    const line = data.toString();
    if (isLegendarySpawnMessage(line)) {
      await sendLegendarySpawnMessage(line);
    }
  } catch (err) {
    console.error(err);
    sendErrorMessage(err).catch();
  }
});
