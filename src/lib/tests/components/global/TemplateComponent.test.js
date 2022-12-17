// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TemplateComponent } from '../../../components/global/TemplateComponent/TemplateComponent';

it('renders TemplateComponent with custom class name', () => {
  render(
    <TemplateComponent className="test-class">
      Custom Class Component
    </TemplateComponent>,
  );

  const element = screen.getByText('Custom Class Component');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('test-class');
});
