"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.white = exports.utility = exports.text = exports.ministryColors = exports.labels = exports.gray = exports.canvas = exports.black = void 0;
/**
 * @module Colors
 */

var black = '#000000';
exports.black = black;
var white = '#ffffff';
exports.white = white;
var gray = Object.freeze({
  5: '#f6f6f6',
  10: '#ececec',
  30: '#c6c6c6',
  50: '#9f9fa0',
  80: '#666667',
  100: '#404041',
  130: '#2d2d2e',
  light: '#dad8d6'
});
exports.gray = gray;
var canvas = Object.freeze({
  lightMode: {
    primary: {
      dark: gray[80],
      light: white
    },
    secondary: {
      dark: black,
      light: gray[10]
    }
  }
});
exports.canvas = canvas;
var text = Object.freeze({
  lightMode: {
    primary: {
      dark: black,
      light: white
    },
    reversed: {
      dark: white,
      light: black
    },
    secondary: {
      dark: gray[60],
      light: gray[30]
    }
  }
});
exports.text = text;
var ministryColors = Object.freeze({
  education: '#5b788c',
  families: '#3f3c40',
  globalMissions: '#00788c',
  hostTeam: {
    htRed: '#d20b15'
  },
  justice: '#b8c39e',
  lifeKids: {
    blue: '#73bae7',
    purple: '#402061',
    red: '#ac1f2d',
    yellow: '#ffda24'
  },
  localMissions: '#ff4612',
  nextSteps: {
    baptismBlue: '#004e7c',
    commitPurple: '#701789',
    givingGreen: '#09c1a1',
    knownGray: '#3e4347',
    lgGreen: '#00946e',
    oldLgGreen: '#92ca64',
    prayerYellow: '#ffba0c',
    questionBlue: '#009ecc',
    recommitRed: '#e33300',
    servingBlue: '#1c70c9'
  },
  openNetwork: {
    openBlue: '#2993e5'
  },
  wellBeing: '',
  worship: {
    worshipPurple: '#3e2b86'
  }
});
exports.ministryColors = ministryColors;
var labels = Object.freeze({
  blue: {
    background: {
      dark: '#12718d',
      light: '#f2fafc'
    },
    text: {
      dark: '#f2fafc',
      light: '#009ecc'
    }
  },
  green: {
    background: {
      dark: '#1b7768',
      light: '#effbf9'
    },
    text: {
      dark: '#effbf9',
      light: '#09c1a1'
    }
  },
  red: {
    background: {
      dark: '#711a00',
      light: '#fdf4f1'
    },
    text: {
      dark: '#fdf4f1',
      light: '#e33300'
    }
  },
  yellow: {
    background: {
      dark: '#711a00',
      light: '#fdf4f1'
    },
    text: {
      dark: '#fffbf0',
      light: '#ffb10c'
    }
  }
});
exports.labels = labels;
var utility = Object.freeze({
  action: {
    dark: '#00b3e5',
    hover: '#008bb2',
    light: '#009ecc'
  },
  error: {
    dark: '#f5441d',
    light: '#e33300'
  },
  giving: {
    dark: '#23e0bf',
    light: '#09c1a1'
  },
  success: {
    dark: '#23e0bf',
    light: '#09c1a1'
  },
  warning: {
    dark: '#ffcd4f',
    light: '#ffba0c'
  }
});
exports.utility = utility;