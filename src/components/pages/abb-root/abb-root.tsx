import { Component, h } from '@stencil/core';


@Component({
  tag: 'abb-root',
  styleUrl: 'abb-root.css',
  shadow: true
})
export class Root {

  render() {
    return (
      <div class='container'>
        <abb-header class='header' />

        <main class='content'>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='abb-home' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
