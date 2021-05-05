import { Component, h, State } from '@stencil/core';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  @State()
  private raceData: any[] = [];

  public async componentWillLoad() {
    const response = await fetch('/assets/racedata/races.json');
    this.raceData = await response.json();
  }

  render() {
    return (
      <div class="app-home">
        <ul>
          {this.raceData.map(r => (
            <li>
              {r.date} <stencil-route-link url={`/race/${r.id}`}>{r.name}</stencil-route-link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
