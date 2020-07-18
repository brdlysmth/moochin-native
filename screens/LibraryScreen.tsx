import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';

import LibraryScreenInfo from '../components/LibraryScreenInfo';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';
import { RootStackParamList } from '../types';
import { db } from '../App';
import Modal from 'react-native-modal';



export default function LibraryScreen() {

  // TODO: ditching form, going straight to adding photo book
  // s3 bucket
  // url to firebase 
  // yarn add react-native-photo-upload

  const [isModalVisible, setModalVisible] = React.useState(false);
  // const [value, onChangeText] = React.useState('Book Name');
  const [value, onChangeText] = React.useState('');

  const addBook = async ( name: string, title: string, author: string ) => {
      await db.ref('/books').push({
          new: 'true',
          name: name,
          title: title,
          author: author,
      })
  }

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  return (
      <View style={styles.container}>
      <Text style={styles.title}> Library </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LibraryScreenInfo path="/screens/LibraryScreen.tsx" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button 
          text="Add Book"
          raised={true}  
          primary={false}
          // TODO: wire up Formik form onPress

          // TODO: 
          // - on press renders 
          // onPress={() => navigation.navigate('BookForm')}
          onPress={toggleModal}
          /> 

      <Modal 
          isVisible={ isModalVisible }
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="left"
          >
          <View style={styles.container}>
              <Text>
                  Love to see some books getting added.
              </Text>
    
              <Button 
                  text="Exit" 
                  raised={true}  
                  primary={false}
                  onPress={toggleModal} 
                  />

          </View>

      </Modal>
      
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
