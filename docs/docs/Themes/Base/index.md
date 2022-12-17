---
title: 🏛️ Base
---

# Base Theme

The `base` theme represents the base theme and branding for Life.Church products. It includes values for branding `colors` and a variety of other properties useful for styling and theming a UI _(listed below)_.

## Using the Theme

```jsx
import { base } from '@hessler/lc-component-library-io/dist/themes';

const componentBaseColorsStyles = {
  color: base.colors.utility.action.light,
};
const componentBaseOtherPropsStyles = {
  backgroundColor: base.backgrounds.backgroundActionColor,
  color: base.labels.labelActionColor
};

<SampleComponent style={componentBaseColorsStyles}>
  This text will be styled with the light action utility color.
</SampleComponent>

<SampleComponent style={componentBaseOtherPropsStyles}>
  This element will be styled with light action background color and its text will be styled with the light action label color.
</SampleComponent>
```

## Properties

The following properties are available:

- `{object} backgrounds` - Object of color values for backgrounds.
- `{object} borders` - Object of color values for borders.
- `{ThemeColors} colors` - Base object of color values for the theme.
- `{object} labels` - Object of color values for labels.
- `{object} shadows` - Object of color values for shadows.
- `{object} utility` - Object of color values for utility colors.

## Typedefs

### `ThemeColors`

- `{string} black` - The hex value for black.
- `{object} canvas` - Object of color values for canvases.
- `{object} gray` - Object of color values for grays.
- `{object} labels` - Object of color values for labels.
- `{object} ministryColors` - Object of color values for ministry colors.
- `{object} text` - Object of color values for text.
- `{object} utility` - Object of color values for utilities.
- `{string} white` - The hex value for white.
