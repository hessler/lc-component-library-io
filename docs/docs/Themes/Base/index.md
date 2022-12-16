---
title: 🧮 Base
---

# Base Theme

The `baseTheme` theme represents the base theme and branding for our Life.Church products. It includes objects for `colors` and a variety of other , which define a variety of color values for the theme.

## Using the Theme

```jsx
import { baseTheme } from "@hessler/lc-component-library-io";

const componentBaseColorsStyles = {
  color: baseTheme.colors.utility.action.light,
};
const componentBaseColorsStyles = {
  backgroundColor: baseTheme.colors.backgrounds.backgroundActionColor,
  color: baseTheme.colors.labels.labelActionColor
};

<SampleComponent style={componentBaseColorsStyles}>
  This text will be styled with the light action utility color.
</SampleComponent>

<SampleComponent style={componentThemeColorsStyles}>
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
