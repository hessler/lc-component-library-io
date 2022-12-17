# ButtonItem

The `ButtonItem` component represents a general purpose button element that can be configured with styles and functionality as needed. It comes built with logic for button size and variant, but is otherwise completely style- and functionality-agnostic, allowing for full flexibility of use across a variety of projects and contexts.

> 📝 **Note:** All `ButtonItem` components include the class `.btn`, as well as size- and variant-specific styles _(as noted below)_, and can have additional class names passed in via the `className` prop.

## Using the Component

```jsx
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from "@hessler/lc-component-library-io/dist/components/global";

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
- `{ButtonSizes} [props.size]` - The size value of the button (Default: `ButtonSizes.medium`).
- `{ButtonVariants} [props.variant]` - The variant of the button (Default: `ButtonVariants.primary`).

## Typedefs

### `ButtonSizes`

- `{string} large` - Represents a large button size and uses the class `.size-large`.
- `{string} medium` - Represents a medium button size and uses the class `.size-medium`.
- `{string} small` - Represents a small button size and uses the class `.size-small`.

### `ButtonVariants`

- `{string} primary` - Represents a primary button style and uses the class `.btn-primary`.
- `{string} secondary` - Represents a secondary button style and uses the class `.btn-secondary`.
- `{string} tertiary` - Represents a tertiary button style and uses the class `.btn-tertiary`.
