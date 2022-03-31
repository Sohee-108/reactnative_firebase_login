import React from 'react';
import {LogBox} from 'react-native';
import Provider from './navigation';

LogBox.ignoreLogs([
  'componentWillReceiveProps has been renamed, and is not recommended for use.',
  '`useNativeDriver` was not specified.',
  'RCTBridge required dispatch_sync to load RNGestureHandlerModule.',
  'Found screens with the same name nested inside one another.',
]);

const App = () => {
  return <Provider></Provider>;
};

export default App;
