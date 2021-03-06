import * as React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreenInfo from '../components/HomeScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-material-ui';
import { logoutWithFirebase } from '../services/auth';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo path="/screens/HomeScreen.tsx" />
      <Button 
				text="Logout"
				raised={true}  
				primary={false}
				onPress={logoutWithFirebase}
				/>
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
