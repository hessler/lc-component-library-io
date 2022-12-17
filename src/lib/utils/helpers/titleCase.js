/**
 * @module titleCase
 */

/**
 * Convert a string to title case.
 *
 * Note: This utility is based on the title capitalization rules as specified
 * by the APA:
 *
 * 1. Capitalize the first word of the title/heading and of any
 * subtitle/subheading.
 * 2. Capitalize all major words (nouns, verbs, adjectives, adverbs, and
 * pronouns) in the title/heading, including the second part of hyphenated
 * major words (e.g., Self-Report not Self-report)
 * 3. Capitalize all words of four letters or more.
 *
 * @alias module:titleCase
 *
 * @param {string} string - The string to be converted to title case.
 * @param {object} [options] - Optional options.
 * @param {Array} [options.ignoreWords] - Array of words to ignore.
 * @param {boolean} [options.caseSensitive] - If true, only ignores
 * specified words when case is exactly the same.
 *
 * @throws {Error} - Throws an error if `string` is missing or incorrect type.
 *
 * @returns {string} - The string converted to title case.
 *
 * @example
 * // returns 'Daily Power: 365 Days of Fuel for Your Soul'
 * titleCase('daily power: 365 days of fuel for your soul')
 *
 * @example
 * // returns 'Daily poWEr: 365 days of Fuel for Your Soul'
 * titleCase('daily poWEr: 365 days of fuel for your soul', { ignoreWords: ['poWEr', 'days'], caseSensitive: true })
 *
 * @see {@link https://capitalizemytitle.com/#APAStyle}.
 * @see {@link https://github.com/gouch/to-title-case}.
 *
 */
export function titleCase(
  string,
  { ignoreWords = [], caseSensitive = false } = {},
) {
  if (!string || typeof string !== 'string') {
    throw new Error('string is missing or incorrect type.');
  }

  const urlRegExp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const smallWords =
    /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
  const wordSeparators = /([ :–—-])/;
  const urls = [];

  let wordsToIgnore;
  /* istanbul ignore next */
  if (ignoreWords) {
    if (
      !Array.isArray(ignoreWords) ||
      !ignoreWords.every((element) => typeof element === 'string')
    ) {
      throw new Error(
        'ignoreWords contains non-string values or incorrect type.',
      );
    }
    // Convert all specified ignoreWords to lowercase if case sensitivity false.
    if (!caseSensitive) {
      wordsToIgnore = ignoreWords.map((element) => {
        return String(element).toLowerCase();
      });
    } else {
      wordsToIgnore = [...ignoreWords];
    }
  }

  // Check for URLs and temporarily remove and store them so they don't get
  // unintentionally capitalized. To do this, split original string by spaces
  // only, loop over resulting array in REVERSE, and for each URL, splice it out
  // and store in array with its corresponding index.
  const spaceSplit = string.split(' ');
  for (let i = spaceSplit.length; i >= 0; i -= 1) {
    if (urlRegExp.test(spaceSplit[i])) {
      const entry = spaceSplit.splice(i, 1)[0];
      urls.unshift({ index: i, value: entry });
    }
  }

  // Now, with the URLs removed, join our spaceSplit array back together, split
  // by full wordSeparators logic, and map over the array, doing appropriate
  // checks for capitalization. After mapping, we need to join and split it at
  // just space characters to prepare for URLs to be spliced back in.
  const finalArray = spaceSplit
    .join(' ')
    .split(wordSeparators)
    .map((current, index, array) => {
      // Check for small words, skip first and last word, ignore title end and
      // subtitle start, ignore small words that start a hyphenated phrase.
      // This check is leveraged from GitHub repo specified in comments above.
      /* istanbul ignore next */
      if (
        current.search(smallWords) > -1 &&
        index !== 0 &&
        index !== array.length - 1 &&
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        (array[index + 1] !== '-' ||
          (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase();
      }

      // Ignore specified words
      if (wordsToIgnore.includes(current)) {
        return current;
      }

      // Convert to lowercase if case sensitivity is false
      if (!caseSensitive) {
        // eslint-disable-next-line no-param-reassign
        current = current.toLowerCase();
      }

      // Capitalize the first letter
      return current.replace(alphanumericPattern, (match) => {
        return match.toUpperCase();
      });
    })
    .join('')
    .split(' ');

  // Iterate over URLs and splice them in to appropriate slots in finalArray.
  for (let i = 0; i < urls.length; i += 1) {
    finalArray.splice(urls[i].index, 0, urls[i].value);
  }

  // Join array items and return as converted string.
  return finalArray.join(' ');
}
