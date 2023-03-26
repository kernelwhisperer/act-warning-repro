import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const view = render(<App />);
  await screen.findByText('async-val')
  const linkElement = screen.getByText(/async-val/i);
  expect(linkElement).toBeInTheDocument();
  expect(view.asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="App"
  >
    <header
      class="App-header"
    >
      <img
        alt="logo"
        class="App-logo"
        src="logo.svg"
      />
      async-val
      <p>
        Edit 
        <code>
          src/App.js
        </code>
         and save to reload.
      </p>
      <a
        class="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
    </header>
  </div>
</DocumentFragment>
`)
});
