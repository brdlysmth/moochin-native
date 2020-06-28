import * as React from 'react';
import { StyleSheet } from 'react-native';

import LibraryScreenInfo from '../components/LibraryScreenInfo';
import { Text, View } from '../components/Themed';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Library </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LibraryScreenInfo path="/screens/LibraryScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});