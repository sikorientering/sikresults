import { Column } from '@limetech/lime-elements';
import { Component, h, State } from '@stencil/core';
import { Person, persons } from './persons';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
    @State()
    private tableData: Person[] = persons;

    @State()
    private columns: Column[] = [
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age' },
        { title: 'Kind', field: 'kind' },
        { title: 'Height', field: 'height' },
        { title: 'Stamina', field: 'stamina' },
        { title: 'Place of Birth', field: 'placeOfBirth' },
        { title: 'Sign', field: 'sign' },
        { title: 'Date of Birth', field: 'dateOfBirth' },
        { title: 'Role', field: 'role' },
    ];

  render() {
    return (
      <div class="app-home">
        <limel-table data={this.tableData} columns={this.columns} />

        <stencil-route-link url="/profile/stencil">
          <limel-button label="Profile" primary={true}></limel-button>
        </stencil-route-link>
      </div>
    );
  }
}
