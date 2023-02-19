/*
Box Objet Model en React Native
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjetModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={ styles.title }>
            Box Objet Model
        </Text>
    </View>
  )
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 65,
    paddingBottom:15,
    fontSize: 20,
    //width: 250,
    borderWidth: 10
  }
});