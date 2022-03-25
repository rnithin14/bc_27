import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MuiTypography from './index';

it('renders a typography tag', () => {

  render(<MuiTypography variant="h1" children='Text'/>);
  const element = screen.getByTestId('typography-tag');
  expect(element).toBeInTheDocument();

});