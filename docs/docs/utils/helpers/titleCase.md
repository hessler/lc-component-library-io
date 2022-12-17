# titleCase

`titleCase` is a helper utility function that converts a string to title case, based on the title capitalization rules as specified by the APA:

1. Capitalize the first word of the title/heading and of any subtitle/subheading.
2. Capitalize all major words _(nouns, verbs, adjectives, adverbs, and pronouns)_ in the title/heading, including the second part of hyphenated major words _(e.g., Self-Report not Self-report)._
3. Capitalize all words of four letters or more.

## Using the Component

```jsx
// Add sample markup for using the component. For example:
import { titleCase } from '@hessler/lc-component-library-io/dist/utils/helpers';

// returns 'Daily Power: 365 Days of Fuel for Your Soul'
const correctedTitle = titleCase('daily power: 365 days of fuel for your soul');

// Returns 'Daily poWEr: 365 days of Fuel for Your Soul'
const correctedTitleWithOptions = titleCase(
  'daily poWEr: 365 days of fuel for your soul',
  { ignoreWords: ['poWEr', 'days'], caseSensitive: true },
);
```

## Function Declaration

```js
titleCase(string, { ignoreWords = [], caseSensitive = false } = {})
```

## Properties

The following properties are available:

- `{string} string` - The string to be converted to title case.
- `{object} [options]` - Optional options.
- `{boolean} [options.caseSensitive]` - If true, only ignores `*` specified words when case is exactly the same.
- `{Array} [options.ignoreWords]` - Array of words to ignore.
