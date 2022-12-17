// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from '../../../components/global/ButtonItem/ButtonItem';

// Iterate over button sizes and variants to test each individually.
Object.values(ButtonSizes).forEach((size) => {
  Object.values(ButtonVariants).forEach((variant) => {
    it(`renders a ${variant} ButtonItem at ${size} size`, () => {
      render(
        <ButtonItem size={ButtonSizes[size]} variant={ButtonVariants[variant]}>
          {`${size} ${variant} Button`}
        </ButtonItem>,
      );

      const element = screen.getByText(`${size} ${variant} Button`);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass(`btn-${variant}`);
      expect(element).toHaveClass(`size-${size}`);
    });
  });
});

it('renders ButtonItem with custom class name', () => {
  render(<ButtonItem className="test-class">Custom Class Button</ButtonItem>);

  const element = screen.getByText('Custom Class Button');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('test-class');
});

it('renders ButtonItem with type="submit" attribute', () => {
  render(<ButtonItem type="submit">Custom Type Button</ButtonItem>);

  const element = screen.getByText('Custom Type Button');
  expect(element).toBeInTheDocument();
  expect(element).toHaveProperty('type', 'submit');
});
