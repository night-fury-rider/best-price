// Use this file as single source of truth for all app level configurations.
// App
const APP_CONFIG = {
  delimeter: '^&#',
  units: ['gm', 'kg', 'ml', 'lt'],
  offset: 100, // Difference between two markers for unit. Ex. when offset is 100, the markers will be  100, 200, 300 and so on.
  depth: 10, // Number of offsets to be shown.
};

export default APP_CONFIG;
