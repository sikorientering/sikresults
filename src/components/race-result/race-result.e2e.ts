import { newE2EPage } from '@stencil/core/testing';

describe('race-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<race-result></race-result>');

    const element = await page.find('race-result');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('app-root >>> race-result');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "race-result"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> race-result >>> div');
  //   expect(element).toHaveClass('race-result');
  // });
});
