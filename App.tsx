import React from 'react';
//import { ContadorScreen } from './src/screens/ContadorScreen';
import { SafeAreaView } from 'react-native';//Con SafeAreaView verificamos si el componente se muestra en pantalla
import { BoxObjetModelScreen } from './src/screens/BoxObjetModelScreen';//Importamos la Screen de BoxObjetModelScreen

export const App = () => {
  return (
    //<ContadorScreen />
    <SafeAreaView style={{
      flex: 1
    }}>
      
      <BoxObjetModelScreen />
    
    </SafeAreaView>
    )
}


