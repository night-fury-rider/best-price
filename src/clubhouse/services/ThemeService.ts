// This file is inteneded to contain all theming (custom fonts, coloring, dark mode, light mode etc.) related stuff in this file.

import {StyleSheet} from 'react-native';

import {
  BLUE_COLOR_THEME,
  ORANGE_COLOR_THEME,
} from '$clubhouse/constants/colors.constants';

const styles = StyleSheet.create({
  normalFont: {
    fontFamily: 'IBMPlexSerif',
  },
  boldFont: {
    fontFamily: 'IBMPlexSerif-Bold',
    fontWeight: '600',
  },
  boldItalicFont: {
    fontFamily: 'IBMPlexSerif-BoldItalic',
    fontWeight: '600',
  },
  centerAlign: {
    textAlign: 'center',
  },
});

// Keep all font family info in this function only
const getTheme = (selectedColorThemeIndex: number) => {
  let selectedLightColors;
  switch (selectedColorThemeIndex) {
    case 1:
      selectedLightColors = ORANGE_COLOR_THEME;
      break;

    case 0:
    default:
      selectedLightColors = BLUE_COLOR_THEME;
  }
  const theme = {
    mode: 'light',
    lightColors: {},
    darkColors: {},
  };

  return theme;
};

const getColors = (selectedColorThemeIndex: number) => {
  const theme = getTheme(selectedColorThemeIndex);
  if (theme.mode === 'light') {
    return theme.lightColors;
  }
  return theme.darkColors;
};

export {getTheme, getColors};
