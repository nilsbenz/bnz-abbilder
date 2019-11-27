import { Component, h } from '@stencil/core';

@Component({
  tag: 'abb-header',
  styleUrl: 'abb-header.css',
  shadow: true
})
export class Header {

  render() {
    return (
      <div>
        <header>
          <img src='assets/images/logo-weiss.png' alt='Abbilder' />
        </header>
      </div>
    );
  }
}
