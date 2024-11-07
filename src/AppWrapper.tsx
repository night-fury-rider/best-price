import {useEffect, useState} from 'react';
import {PaperProvider} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';

import App from 'App';
import {store} from '$clubhouse/redux/store';
import LoggerService from '$clubhouse/services/LoggerService';
import {getTheme} from '$clubhouse/services/ThemeService';

const AppWrapper = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      LoggerService.log(`System Color Scheme changed to ${colorScheme}`);
      setColorScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  const theme = getTheme(colorScheme as ThemeProp, 0);
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </PaperProvider>
  );
};

export default AppWrapper;
