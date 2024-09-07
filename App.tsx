import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Calculator from './src/components/Caculator'

const App = () => {
  return (
    <PaperProvider>
      <Calculator />
    </PaperProvider>
  )
}
export default App