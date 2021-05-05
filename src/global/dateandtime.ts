import { ResultStatus } from "./iofv3-types";

function zeroPad(v) {
  return v < 10 ? `0${v}` : v;
}

export function secondsToMinutesAndSeconds(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${zeroPad(mins)}:${zeroPad(secs)}`;
}

const localizedStatus = {
  [ResultStatus.DidNotFinish]: 'utgått',
  [ResultStatus.DidNotStart]: 'ej start',
  [ResultStatus.DidNotEnter]: 'ej start',
  [ResultStatus.Disqualified]: 'diskvalificerad',
}

export function timeFormatter(seconds: number, data: any): string {
  const status = data.status in localizedStatus ? localizedStatus[data.status] : data.status;
  return seconds && seconds !== Number.MAX_VALUE && secondsToMinutesAndSeconds(seconds) || status;
}

export function timeBehindFormatter(seconds: number): string {
  return seconds > 0 && `+${secondsToMinutesAndSeconds(seconds)}` || '';
}
