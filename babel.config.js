module.exports = {
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
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
          $common: './src/common',
          $components: './src/common/components',
          $constants: './src/common/constants',
          $hooks: './src/common/hooks',
          $navigation: './src/common/navigation',
          $network: './src/common/network',
          $redux: './src/common/redux',
          $dashboard: './src/dashboard',
          $settings: './src/settings',
          $tools: './src/tools',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
