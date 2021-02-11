import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './screens/Checkbox';
import { FlatListExample } from './screens/FlatListExample';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <FlatListExample />
      {/* <Checkbox /> */}
      <StatusBar style="auto" />
    </View>
  );
}