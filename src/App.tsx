import {ThemeProvider} from '@rneui/themed';
import React, {useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ErrorBoundary from '$clubhouse/components/ErrorBoundary';
import {useAppDispatch, useAppSelector} from '$clubhouse/redux/redux.hooks';
import StorageService from '$clubhouse/services/StorageService';
import {getTheme, getColors} from '$clubhouse/services/ThemeService';
import {DASHBOARD, SETTINGS, TOOLS} from '$constants/strings.constants';
import {getTabBarIconName} from '$navigation/NavigationService';
import DashboardScreen from 'dashboard/DashboardScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

StorageService.init();

// TODO: Integrate this to screens to avoid using `any` type
export type TRootStackParamList = {
  DashboardNavigator: undefined; // undefined because we aren't passing any params to this screen
  Settings: undefined;
  Tools: undefined;
};

function App() {
  const dispatch = useAppDispatch();

  const appColors = getColors(0);

  useEffect(() => {
    // When we use await in useEffect that means it's gonna return a promise but useEffect doesn't expect any value to be returned.
    // Added self involking function so that useEffect treats it as void function.
    (async () => {
      const existingSettings = await StorageService.get('settings');
    })();
  }, []);

  const appTheme = getTheme(0);

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <ThemeProvider theme={appTheme}>
          <DashboardScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  // As this element is from React Navigation, we can't move this to ThemeService.
  tabBarLabel: {
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'IBMPlexSerif-Bold',
    marginBottom: 3,
  },
});

export default App;
