import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Index';




export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>xkcd</Text>
      <Index />
    </View >
  );

}





const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  header: {
    fontSize: 40,
    color: "black",
    backgroundColor: 'beige',
    padding: 10,
    width: "100%",
    textAlign: "center",



  }
});