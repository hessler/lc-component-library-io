/**
 * @module BaseTheme
 */
import * as colors from './colors';

export const theme = Object.freeze({
  /**
   * Background colors.
   */
  backgrounds: {
    backgroundActionColor: colors.utility.action.light,
    backgroundActionLightColor: colors.labels.blue.background.light,

    backgroundColor: colors.white,

    backgroundDisabledColor: colors.gray[10],

    backgroundErrorColor: colors.utility.error.light,
    backgroundErrorLightColor: colors.labels.red.background.light,

    backgroundPrimaryActiveColor: colors.utility.action.hover,
    backgroundPrimaryColor: colors.utility.action.light,
    backgroundPrimaryFocusColor: colors.utility.action.dark,
    backgroundPrimaryHoverColor: colors.utility.action.dark,
    backgroundPrimaryLightColor: colors.labels.blue.background.light,

    backgroundSecondaryActiveColor: colors.gray[10],
    backgroundSecondaryColor: 'transparent',
    backgroundSecondaryFocusColor: 'transparent',
    backgroundSecondaryHoverColor: colors.labels.blue.background.light,

    backgroundSuccessColor: colors.utility.success.light,
    backgroundSuccessLightColor: colors.labels.green.background.light,

    backgroundTertiaryActiveColor: 'none',
    backgroundTertiaryColor: 'none',
    backgroundTertiaryFocusColor: 'none',
    backgroundTertiaryHoverColor: 'none',

    backgroundWarningColor: colors.utility.warning.light,
    backgroundWarningLightColor: colors.labels.yellow.text.dark,
  },

  /**
   * Border colors.
   */
  borders: {
    borderPrimaryActiveColor: colors.utility.action.light,
    borderPrimaryColor: colors.utility.action.light,
    borderPrimaryFocusColor: colors.utility.action.light,
    borderPrimaryHoverColor: 'transparent',

    borderSecondaryActiveColor: colors.gray[10],
    borderSecondaryColor: 'rgba(0, 158, 204, 0.2)',
    borderSecondaryFocusColor: 'rgba(0, 158, 204, 0.2)',
    borderSecondaryHoverColor: colors.labels.blue.background.light,

    borderTertiaryActiveColor: 'transparent',
    borderTertiaryColor: 'transparent',
    borderTertiaryFocusColor: 'transparent',
    borderTertiaryHoverColor: 'transparent',
  },

  /**
   * Label colors.
   */
  labels: {
    labelActionActiveColor: colors.white,
    labelActionColor: colors.white,
    labelActionDisabledColor: colors.gray[50],
    labelActionFocusColor: colors.white,
    labelActionHoverColor: colors.white,

    labelErrorActiveColor: colors.white,
    labelErrorColor: colors.white,
    labelErrorDisabledColor: colors.gray[50],
    labelErrorFocusColor: colors.white,
    labelErrorHoverColor: colors.white,

    labelPrimaryActiveColor: colors.white,
    labelPrimaryColor: colors.white,
    labelPrimaryDisabledColor: colors.gray[50],
    labelPrimaryFocusColor: colors.white,
    labelPrimaryHoverColor: colors.white,

    labelSecondaryActiveColor: colors.utility.action.dark,
    labelSecondaryColor: colors.labels.blue.text.light,
    labelSecondaryDisabledColor: colors.gray[50],
    labelSecondaryFocusColor: colors.labels.blue.text.light,
    labelSecondaryHoverColor: colors.utility.action.dark,

    labelSuccessActiveColor: colors.white,
    labelSuccessColor: colors.white,
    labelSuccessDisabledColor: colors.gray[50],
    labelSuccessFocusColor: colors.white,
    labelSuccessHoverColor: colors.white,

    labelTertiaryActiveColor: colors.utility.action.hover,
    labelTertiaryColor: colors.labels.blue.text.light,
    labelTertiaryDisabledColor: colors.gray[50],
    labelTertiaryFocusColor: colors.labels.blue.text.light,
    labelTertiaryHoverColor: colors.utility.action.dark,

    labelWarningActiveColor: colors.white,
    labelWarningColor: colors.white,
    labelWarningDisabledColor: colors.gray[50],
    labelWarningFocusColor: colors.white,
    labelWarningHoverColor: colors.white,
  },

  /**
   * Shadow colors.
   */
  shadows: {
    boxShadowHover: 'rgba(0, 0, 0, 0.25)',
  },

  /**
   * Utility colors.
   */
  utility: {
    actionColor: colors.utility.action.light,
    black: colors.black,
    errorColor: colors.utility.error.light,
    primaryColor: colors.utility.action.light,
    successColor: colors.utility.success.light,
    warningColor: colors.utility.warning.light,
    white: colors.white,
  },
});
