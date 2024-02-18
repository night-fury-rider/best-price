module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          $clubhouse: './src/clubhouse',
          $components: './src/clubhouse/components',
          $constants: './src/clubhouse/constants',
          $hooks: './src/clubhouse/hooks',
          $navigation: './src/clubhouse/navigation',
          $network: './src/clubhouse/network',
          $redux: './src/clubhouse/redux',
          $dashboard: './src/dashboard',
          $settings: './src/settings',
          $tools: './src/tools',
        },
      },
    ],
  ],
};
