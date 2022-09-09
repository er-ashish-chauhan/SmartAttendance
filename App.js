import React from 'react';
import {
  SafeAreaView,
  View,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderHOC from './src/components/HOC/LoaderHOC';
import Navigation from './src/navigations';
import { persistor, store } from './src/store/Appstore';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
      <View style={{ flex: 1 }}>
        <LoaderHOC>
          <Navigation />
        </LoaderHOC>
      </View>
  );
};

const AppWrapper = () => {

  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  )
}

export default AppWrapper;
