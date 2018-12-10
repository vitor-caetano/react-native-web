import React from 'react';
import HybridApp from './src/App';

import { Provider as PaperProvider } from 'react-native-paper';

const App = (props) => {
  return (
    <PaperProvider>
      <HybridApp />
    </PaperProvider>
  );
}

export default App;