// Use this file as single source of truth for all colors used in app.

export const LIGHT_COLORS = {
  danger1: '#D63D39',
  danger2: 'red',
  danger3: 'red',

  success1: '#83f28f',
  success2: 'green',
  success3: 'green',

  text1: 'black',
  text2: 'black',
  text3: 'black',
  text4: 'black',
  text5: 'black',

  transparent: 'transparent',
};

export const BLUE_COLOR_THEME = {
  ...LIGHT_COLORS,
  background1: '#f8f9fd', // Main background color of app
  background2: '#dce8f4', // Dashboard --> Searchbar background color
  background3: '#d0e4ff', // Dashboard --> + icon background color
  background4: '#e6edfd', // Bottom tab background color
  background5: '#0061a2', // Bottom tab active tab background color
  background6: '#0061a2', // Dashboard --> No contacts --> Icon of Phone
  // Tools --> Import Contact --> Import Button's background (When enabled)

  background7: '#f8f9fe', // Add/Edit Contact --> Background color

  background8: '#f0f4ff', // Contact Details --> Tile Background color

  text1: '#0061a2', // Main Text color, Used on change/remove profile pic buttons.
};

export const ORANGE_COLOR_THEME = {
  ...LIGHT_COLORS,
  background1: '#fff8f5', // Main background color of app
  background2: '#f3e5dc', // Dashboard --> Searchbar background color
  background3: '#ffdbcb', // Dashboard --> + icon background color
  background4: '#feeae1', // Bottom tab background color
  background5: '#2e1500', // Bottom tab active tab background color
  background6: '#9d4400', // Dashboard --> No contacts --> Icon of Phone
  // Tools --> Import Contact --> Import Button's background (When enabled)

  background7: '#fff8f6', // Add/Edit Contact --> Background color

  background8: '#fff2ec', // Contact Details --> Tile Background color

  text1: '#93550d', // Main Text color, Used on change/remove profile pic buttons.
};

export const COLORS = {
  black: 'black',
  grey: 'grey',
  transparent: 'transparent',
  white: 'white',
};
