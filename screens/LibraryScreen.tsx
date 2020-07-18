import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';

import LibraryScreenInfo from '../components/LibraryScreenInfo';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';
import { RootStackParamList } from '../types';

export default function LibraryScreen({ navigation, }: StackScreenProps<RootStackParamList, 'BookForm'>) {

  return (
      <View style={styles.container}>
      <Text style={styles.title}> Library </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LibraryScreenInfo path="/screens/LibraryScreen.tsx" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button 
          text="Book Form Page"
          raised={true}  
          primary={false}
          // TODO: wire up Formik form onPress

          // TODO: 
          // - on press renders 
          onPress={() => navigation.navigate('BookForm')}
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
