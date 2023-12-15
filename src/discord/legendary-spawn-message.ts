import { sendMessage } from './send-message';
import language from '../assets/lang/ko_kr.json';

export const regexp =
  /Spawned (?<legendaryName>(\w|\s|-)+) at.* x:(?<x>(-\d+|\d+)), y:(?<y>(-\d+|\d+)), z:(?<z>(-\d+|\d+))/;

export const isLegendarySpawnMessage = (data: string) => {
  return regexp.test(data);
};

export const buildLegendarySpawnMessage = (data: string) => {
  const { legendaryName, x, y, z } = regexp.exec(data)?.groups;
  const koreanName = language[`pixelmon.${legendaryName.toLowerCase()}`];
  const name = koreanName || legendaryName;

  return `${name} 가 ${x} ${y} ${z} 에 스폰됨`;
};

export const sendLegendarySpawnMessage = async (data: string) => {
  const message = buildLegendarySpawnMessage(data);
  return await sendMessage(message);
};
