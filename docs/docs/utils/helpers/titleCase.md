# titleCase

`titleCase` is a helper utility function that converts a string to title case, based on the title capitalization rules as specified by the APA:

1. Capitalize the first word of the title/heading and of any subtitle/subheading.
2. Capitalize all major words (nouns, verbs, adjectives, adverbs, and pronouns) in the title/heading, including the second part of hyphenated major words (e.g., Self-Report not Self-report)
3. Capitalize all words of four letters or more.

## Using the Component

```jsx
// Add sample markup for using the component. For example:
import { titleCase } from "@hessler/lc-component-library-io";

// returns 'Daily Power: 365 Days of Fuel for Your Soul'
const correctedTitle = titleCase('daily power: 365 days of fuel for your soul');

// Returns 'Daily poWEr: 365 days of Fuel for Your Soul'
const correctedTitleWithOptions = titleCase('daily poWEr: 365 days of fuel for your soul', { ignoreWords: ['poWEr', 'days'], caseSensitive: true });
```

## Properties

The following properties are available:

- `{string} string` - The string to be converted to title case.
- `{object} [options]` - Optional options.
- `{boolean} [options.caseSensitive]` - If true, only ignores * specified words when case is exactly the same.
- `{Array} [options.ignoreWords]` - Array of words to ignore.
