/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

console.disableYellowBox = true;
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
