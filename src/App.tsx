import React from 'react';
import {BottomNavigation} from 'react-native-paper';

import ErrorBoundary from '$clubhouse/components/ErrorBoundary';
import StorageService from '$clubhouse/services/StorageService';
import DashboardScreen from 'dashboard/DashboardScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SettingsScreen from '$settings/SettingsScreen';

StorageService.init();

function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'dashboard',
      title: 'Dashboard',
      focusedIcon: 'currency-inr',
      unfocusedIcon: 'currency-inr',
    },
    // TODO/Note: If we want to add settings tab, uncomment code below
    /* ,
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'wrench',
      unfocusedIcon: 'wrench-outline',
    }, */
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    settings: SettingsScreen,
  });

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
export default App;
