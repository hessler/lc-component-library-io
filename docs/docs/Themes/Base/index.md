---
title: Base
---

# Base Theme

The `Base` theme represents the base theme and branding for our Life.Church products. It includes objects for `colors`, which define a variety of color values for the theme.

## Using the Theme

```jsx
// Add sample markup for using the component. For example:
import { Themes } from "@hessler/lc-component-library-io";

const { colors: baseColors } = Themes.Base;

<SampleComponent style={{ color: `${baseColors.utility.action.light}` }}>
  This text will be styled with the light action utility color.
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
