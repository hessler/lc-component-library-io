# ButtonItem

The `ButtonItem` represents a general purpose button element that can be configured with styles and functionality as needed. It comes built with logic for button size and variant, but is otherwise completely style- and functionality-agnostic, allowing for full flexibility of use across a variety of projects and contexts.

## Using the Component

```jsx
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from "@hessler/lc-component-library-io";

<ButtonItem
  className="my-button-class-name"
  onClick={() => {
    /* Do something. */
  }}
  size={ButtonSizes.medium}
  variant={ButtonVariants.primary}
>
  Primary Button Example
</ButtonItem>
```

## Properties

The following properties are available:

- `{object} props` - The component props object.
- `{React.ReactElement} props.children` - The children elements to render as content for the button element.
- `{ButtonSizes} [props.size]` - The size value of the button (Default: ButtonSizes.medium).
- `{ButtonVariants} [props.variant]` - The variant of the button (Default: ButtonVariants.primary).
