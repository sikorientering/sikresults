import { ClassResult, PersonResult, Result, ResultList } from "./iofv3-types";

export class ResultListReader {
  constructor(private baseUrl) {
    this.getClassResult = this.getClassResult.bind(this);
    this.getPersonResult = this.getPersonResult.bind(this);
    this.getResult = this.getResult.bind(this);
    this.getText = this.getText.bind(this);
    this.mapChildNodes = this.mapChildNodes.bind(this);
  }

  public async read(raceUrl: string): Promise<ResultList> {
    const response = await fetch(`${this.baseUrl}/${raceUrl}`);
    const text = await response.text();
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(text, "text/xml");

    const name = this.getText(doc, 'ResultList > Event > Name');
    const classResults = this.getClassResults(doc).sort((a, b) => a.class.name.localeCompare(b.class.name));

    return { event: { name }, classResults };
  }

  getClassResults(doc: Document): ClassResult[] {
    return this.mapChildNodes(doc, 'ResultList > ClassResult', this.getClassResult);
  }

  getClassResult(classResultElement): ClassResult {
    const name = this.getText(classResultElement, 'Class > Name');
    return {
      class: {
        name
      },
      personResults: this.mapChildNodes(
        classResultElement,
        'PersonResult',
        this.getPersonResult
      )
    }
  }
  getPersonResult(personResultElement): PersonResult {
    const given = this.getText(personResultElement, 'Person > Name > Given');
    const family = this.getText(personResultElement, 'Person > Name > Family');
    const organisationName = this.getText(personResultElement, 'Organisation > Name');
    const results = this.mapChildNodes(personResultElement, 'Result', this.getResult);
    return {
      person: { name: { given, family } },
      organisation: { name: organisationName },
      results
    };
  }

  getResult(resultElement): Result {
    const startTime = this.getText(resultElement, 'StartTime');
    const finishTime = this.getText(resultElement, 'FinishTime');
    const time = this.getText(resultElement, 'Time');
    const timeBehind = this.getText(resultElement, 'TimeBehind');
    const position = this.getText(resultElement, 'Position');
    const status = this.getText(resultElement, 'Status');
    const controlCard = this.getText(resultElement, 'ControlCard');

    const result: Result = {
      time,
      timeBehind,
      position,
      status,
      controlCard
    };

    if (startTime) {
      result.startTime = new Date(startTime);
    }
    if (finishTime) {
      result.finishTime = new Date(finishTime);
    }

    return result;
  }

  mapChildNodes<T>(node: (Document | Element), selector, fn: (el: Element) => T) {
    return Array.prototype.slice.call(node.querySelectorAll(selector)).map(fn);
  }

  getText(node: (Document | Element), selector?) {
    return selector ? node.querySelector(selector)?.innerHTML : 'innerHTML' in node && node.innerHTML;
  }
}
