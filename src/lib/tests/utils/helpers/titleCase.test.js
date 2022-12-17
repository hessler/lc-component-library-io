import { titleCase } from '../../../utils/helpers/titleCase';

const errors = {
  ignoreWords: new Error(
    'ignoreWords contains non-string values or incorrect type.',
  ),
  string: new Error('string is missing or incorrect type.'),
};

const ignoreWords = {
  caseInsensitiveArray: ['power', 'days', 'fuel'],
  caseSensitiveArray: ['poWEr', 'DAYS'],
  incorrectArray: ['power', 365, 'days'],
  incorrectObject: { power: 'power' },
};

const titles = {
  caseSensitive: {
    original: 'daily poWEr: 365 DAYS of fuel for your soul',
    titleCase: 'Daily poWEr: 365 DAYS of Fuel for Your Soul',
  },
  groeschelWithColon: {
    ignoreTitleCase: 'Daily power: 365 days of fuel for Your Soul',
    original: 'daily power: 365 days of fuel for your soul',
    titleCase: 'Daily Power: 365 Days of Fuel for Your Soul',
  },
  singleLetter: {
    original: 'x: multiply your god-given potential',
    titleCase: 'X: Multiply Your God-Given Potential',
  },
  smallWordsCapitalized: {
    original: 'relentless: the power you need To never GIVE up',
    titleCase: 'Relentless: The Power You Need to Never Give Up',
  },
  smallWordsWithHyphen: {
    original: 'a self-help but for your nor',
    titleCase: 'A Self-Help but for Your Nor',
  },
  withUrl: {
    original: 'sample title with http://www.example.com url included',
    titleCase: 'Sample Title With http://www.example.com Url Included',
  },
};

describe('titleCase', () => {
  const assertions = [
    {
      description: 'correctly converts a string to title case',
      titles: {
        original: titles.groeschelWithColon.original,
        titleCase: titles.groeschelWithColon.titleCase,
      },
    },
    {
      description: 'correctly converts a string when string contains url',
      titles: {
        original: titles.withUrl.original,
        titleCase: titles.withUrl.titleCase,
      },
    },
    {
      description:
        'correctly converts a string when single letter starts string',
      titles: {
        original: titles.singleLetter.original,
        titleCase: titles.singleLetter.titleCase,
      },
    },
    {
      description:
        'correctly converts a string with small words incorrectly capitalized',
      titles: {
        original: titles.smallWordsCapitalized.original,
        titleCase: titles.smallWordsCapitalized.titleCase,
      },
    },
    {
      description:
        'correctly converts a string with small words and break characters',
      titles: {
        original: titles.smallWordsWithHyphen.original,
        titleCase: titles.smallWordsWithHyphen.titleCase,
      },
    },
    {
      description:
        'correctly converts a string with ignoreWords specified and caseSensitive set to true',
      options: {
        caseSensitive: true,
        ignoreWords: ignoreWords.caseSensitiveArray,
      },
      titles: {
        original: titles.caseSensitive.original,
        titleCase: titles.caseSensitive.titleCase,
      },
    },
    {
      description: 'correctly converts a string with ignoreWords specified',
      options: { ignoreWords: ignoreWords.caseInsensitiveArray },
      titles: {
        original: titles.groeschelWithColon.original,
        titleCase: titles.groeschelWithColon.ignoreTitleCase,
      },
    },
  ];

  assertions.forEach((assertion) => {
    it(`${assertion.description}`, () => {
      expect(
        titleCase(
          assertion.titles.original,
          assertion.options ? { ...assertion.options } : {},
        ),
      ).toEqual(assertion.titles.titleCase);
    });
  });

  it('throws an error if ignoreWords contains non-string values or is incorrect type', () => {
    expect(() =>
      titleCase(titles.groeschelWithColon.original, {
        ignoreWords: ignoreWords.incorrectArray,
      }),
    ).toThrow(errors.ignoreWords);
    expect(() =>
      titleCase(titles.groeschelWithColon.original, {
        ignoreWords: ignoreWords.incorrectObject,
      }),
    ).toThrow(errors.ignoreWords);
  });

  it('throws an error if string is missing or incorrect type', () => {
    expect(() => titleCase()).toThrow(errors.string);
    expect(() => titleCase(123)).toThrow(errors.string);
    expect(() => titleCase([titles.groeschelWithColon.original])).toThrow(
      errors.string,
    );
    expect(() =>
      titleCase({ string: titles.groeschelWithColon.original }),
    ).toThrow(errors.string);
  });
});
