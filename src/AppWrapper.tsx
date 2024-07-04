import {Provider} from 'react-redux';

import App from 'App';
import {PaperProvider} from 'react-native-paper';
import {store} from '$clubhouse/redux/store';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};

export default AppWrapper;
