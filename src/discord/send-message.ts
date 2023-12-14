import axios from 'axios';

export const sendMessage = async (content: string) =>
  axios.post(process.env.DISCORD_WEBHOOK_URL, { content });

export const sendErrorMessage = async (err: Error) =>
  axios.post(process.env.DISCORD_WEBHOOK_URL, {
    content: `에러 발생: ${err.message}`,
  });
