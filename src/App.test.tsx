import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Send Commands button', () => {
  render(<App />);
  const sendCommandsBtn = screen.getByText(/Send commands/i);
  expect(sendCommandsBtn).toBeInTheDocument();
});

it('renders Send Reset Rover position', () => {
  render(<App />);
  const resetBtn = screen.getByText(/reset Rover position/i);
  expect(resetBtn).toBeInTheDocument();
});

it('changes the class when hovered', () => {
  const component = renderer.create(
      <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

