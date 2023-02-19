import React from 'react';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { BoxObjetModelScreen } from './src/screens/BoxObjetModelScreen';//Importamos la Screen de BoxObjetModelScreen
import { SafeAreaView } from 'react-native';//Con SafeAreaView verificamos si el componente se muestra en pantalla
import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    //<ContadorScreen />
    // <SafeAreaView style={{
    //   flex: 1
    // }}>
      <DimensionesScreen />
    // </SafeAreaView>
    )
}


