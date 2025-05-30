// PeopleScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PeopleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>People Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#211f1f',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
