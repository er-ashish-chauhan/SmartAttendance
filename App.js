import React from 'react';
import {
  SafeAreaView,
  View,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LoaderHOC from './src/components/HOC/LoaderHOC';
import Navigation from './src/navigations';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ flex: 1 }}>
        <LoaderHOC>
          <Navigation />
        </LoaderHOC>
      </View>
    </SafeAreaView>
  );
};

export default App;
