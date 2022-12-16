---
title: Base
---

# Base Theme

The `base` theme represents the base theme and branding for our Life.Church products. It includes objects for `colors`, which define a variety of color values for the theme.

## Using the Theme

```jsx
import { themes } from "@hessler/lc-component-library-io";

const { colors: baseColors, theme: themeColors } = themes.Base;
const componentBaseColorsStyles = {
  color: baseColors.utility.action.light,
};
const componentBaseColorsStyles = {
  backgroundColor: themeColors.backgrounds.backgroundActionColor,
  color: themeColors.labels.labelActionColor
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

- `{object} colors` - Base object of color values for the theme.
- `{string} colors.black` - The hex value for black.
- `{object} colors.canvas` - Object of values for canvases.
- `{object} colors.gray` - Object of values for grays.
- `{object} colors.labels` - Object of values for labels.
- `{object} colors.ministryColors` - Object of values for ministry colors.
- `{object} colors.text` - Object of values for text.
- `{object} colors.utility` - Object of values for utilities.
- `{string} colors.white` - The hex value for white.
- `{object} theme` - Base object of theme colors, utilizing base theme color values.
- `{object} theme.backgrounds` - Object of values for backgrounds.
- `{object} theme.borders` - Object of values for borders.
- `{object} theme.labels` - Object of values for labels.
- `{object} theme.shadows` - Object of values for shadows.
- `{object} theme.utility` - Object of values for utility colors.
