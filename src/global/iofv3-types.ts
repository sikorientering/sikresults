// Reference:
// https://github.com/international-orienteering-federation/datastandard-v3/blob/master/IOF.xsd

export type ResultList = {
  event: Event;
  classResults?: ClassResult[];
}

export type Event = {
  name: string;
}

export type ClassResult = {
  class: Class;
  courses?: Course[];
  personResults?: PersonResult[];
}

export type Class = {
  name: string;
}

export type Course = {
  name: string;
  numberOfControls: number;
}

export type PersonResult = {
  person: Person;
  organisation?: Organisation;
  results: Result[];
}

export type Person = {
  name: PersonName;
}

export type PersonName = {
  family: string;
  given: string;
}

export type Organisation = {
  name: string;
}

export type Result = {
  raceNumber?: number,
  bibNumber?: string;
  startTime?: Date;
  finishTime?: Date;
  time?: number;
  timeBehind?: number;
  position?: number;
  status: ResultStatus;
  score?: Score[];
  controlCard?: string;
  overallResult?: OverallResult;
}

export type OverallResult = {
  time?: number;
  timeBehind?: number;
  position?: number;
  status: ResultStatus;
  score?: Score[];
}

export class Score {
  /**
   * The 'type' attribute is used to specify which purpose.
   */
  type: string;
  /**
   * The score earned in an event for some purpose, e.g. a ranking list.
   */
  value: number;
}

export const enum ResultStatus {
  /**
   * Finished and validated
   */
  Ok = "OK",
  /**
   * Finished but not yet validated
   */
  Finished = "Finished",
  /**
   * Missing punch.
   */
  MissingPunch = "MissingPunch",
  /**
   * Disqualified (for some other reason than a missing punch).
   */
  Disqualified = "Disqualified",
  /**
   * Did not finish (i.e. conciously cancelling the race after having started, in contrast to MissingPunch).
   */
  DidNotFinish = "DidNotFinish",
  /**
   * Currently on course.
   */
  Active = "Active",
  /**
   * Has not yet started.
   */
  Inactive = "Inactive",
  /**
   * Overtime, i.e. did not finish within the maximum time set by the organiser.
   */
  Overtime = "Overtime",
  /**
   * Sporting withdrawal (e.g. helping an injured competitor).
   */
  SportingWithdrawal = "SportingWithdrawal",
  /**
   * Not competing (i.e. running outside the competition).
   */
  NotCompeting = "NotCompeting",
  /**
   * Moved to another class.
   */
  Moved = "Moved",
  /**
   * Moved to a "better" class, in case of entry restrictions.
   */
  MovedUp = "MovedUp",
  /**
   * Did not start (in this race).
   */
  DidNotStart = "DidNotStart",
  /**
   * Did not enter (in this race).
   */
  DidNotEnter = "DidNotEnter",
  /**
   * The competitor has cancelled his/hers entry.
   */
  Cancelled = "Cancelled"
}
