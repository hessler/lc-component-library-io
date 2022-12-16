/**
 * @module ButtonItem
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './TemplateComponent.scss';

/**
 * Represents a simple, placeholder, template component for reference, which outputs a simple <div> with the specified content.
 *
 * @param {object} props - The component props object.
 * @param {React.ReactElement} props.children - The children elements to render as content for the button element.
 *
 * @returns {React.ReactElement} The TemplateComponent component.
 */
function TemplateComponent({ children, ...passThroughProps }) {
  return <div {...passThroughProps}>{children}</div>;
}

export { TemplateComponent };
