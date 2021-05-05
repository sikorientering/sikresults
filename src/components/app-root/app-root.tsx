import { Component, h } from '@stencil/core';
import '@limetech/lime-elements/dist/types';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1><stencil-route-link url="/">SIK Results</stencil-route-link></h1>
        </header>

        <main>
          <stencil-router root="/sikresults/">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/race/:name" component="race-result" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
