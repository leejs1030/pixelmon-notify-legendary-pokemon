import { sendMessage } from './send-message';

export const regexp =
  /Spawned (?<legendaryName>\w+) at.* x:(?<x>(-\d+|\d+)), y:(?<y>(-\d+|\d+)), z:(?<z>(-\d+|\d+))/;

export const isLegendarySpawnMessage = (data: string) => {
  return regexp.test(data);
};

export const buildLegendarySpawnMessage = (data: string) => {
  const { legendaryName, x, y, z } = regexp.exec(data)?.groups;
  return `${legendaryName} 가 ${x} ${y} ${z} 에 스폰됨`;
};

export const sendLegendarySpawnMessage = async (data: string) => {
  const message = buildLegendarySpawnMessage(data);
  return await sendMessage(message);
};
