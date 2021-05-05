import { Column, ColumnSorter } from '@limetech/lime-elements';
import { Component, Prop, h, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { timeBehindFormatter, timeFormatter } from '../../global/dateandtime';
import { ClassResult, PersonResult, ResultList } from '../../global/iofv3-types';
import { ResultListReader } from '../../global/racereader';

@Component({
  tag: 'race-result',
  styleUrl: 'race-result.scss',
  shadow: true,
})
export class RaceResult {
  @Prop() match: MatchResults;

  @State()
  private classFilter: string;

  private columns: Column[] = [];
  private columnSorters: ColumnSorter[] = [];
  private resultList: ResultList;

  constructor() {
    this.renderClassResult = this.renderClassResult.bind(this);
    this.personResultToResultRow = this.personResultToResultRow.bind(this);
    this.onClassFilterChange = this.onClassFilterChange.bind(this);
  }

  async componentWillLoad() {
    this.columns = [
      {
        title: 'Plac',
        field: 'position',
        formatter: value => (value > 0 && value !== Number.MAX_VALUE ? value : ''),
      },
      {
        title: 'Namn',
        field: 'name',
        component: {
          name: 'result-table-component',
          props: { style: '--min-width: 14rem' },
        },
      },
      {
        title: 'Organisation',
        field: 'organisation',
        component: {
          name: 'result-table-component',
          props: { style: '--min-width: 14rem' },
        },
      },
      { title: 'Tid', field: 'time', formatter: timeFormatter },
      { title: 'Diff', field: 'timeBehind', formatter: timeBehindFormatter },
    ];
    this.columnSorters = [{ column: this.columns[0], direction: 'ASC' }];

    const reader = new ResultListReader('assets/racedata');
    if (this.match && this.match.params.name) {
      this.resultList = await reader.read(`${this.match.params.name}/resultat-IOFv3.xml`);
    }
  }

  render() {
    return (
      <div class="race-result">
        <h1>{this.resultList.event.name}</h1>

        <limel-button-group
          onChange={this.onClassFilterChange}
          value={[{ id: '_all', title: 'Alla' }, ...this.resultList.classResults?.map(cr => ({ id: cr.class.name, title: cr.class.name }))]}
        ></limel-button-group>

        {this.renderClassResults()}
      </div>
    );
  }

  renderClassResults() {
    let classes = this.resultList.classResults || [];
    if (this.classFilter && this.classFilter !== '_all') {
      classes = classes.filter(c => c.class.name === this.classFilter);
    }

    return classes.map(this.renderClassResult);
  }

  onClassFilterChange(ev) {
    this.classFilter = ev.detail.id;
  }

  renderClassResult(classResult: ClassResult) {
    return [
      <p>
        <strong>{classResult.class.name}</strong> <small>{classResult.personResults.length} startande</small>
      </p>,
      <limel-table data={classResult.personResults.map(this.personResultToResultRow)} columns={this.columns} sorting={this.columnSorters} />,
    ];
  }

  personResultToResultRow(personResult: PersonResult) {
    const [result] = personResult.results;
    return {
      position: result.position || Number.MAX_VALUE,
      name: `${personResult.person.name.given} ${personResult.person.name.family}`,
      organisation: personResult.organisation.name,
      time: result.time || Number.MAX_VALUE,
      timeBehind: result.timeBehind,
      status: result.status,
    };
  }
}
