import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

import LibraryScreenInfo from '../components/LibraryScreenInfo';
import { Text, View } from '../components/Themed';
import { db } from '../App';
import Modal from 'react-native-modal';
import { Formik } from 'formik';



export default function LibraryScreen() {

  // TODO: ditching form, going straight to adding photo book
  // s3 bucket
  // url to firebase 
  // yarn add react-native-photo-upload


  // TODO: delete the BookForm wiring, no longer needed

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

              <Formik
                initialValues={{ name: '', title: '', author: ''}}
                onSubmit={values => addBook(
                  values.name,
                  values.title,
                  values.author,
                  )
                }
                > 
                {({
                  handleChange, handleBlur, handleSubmit, values
                }) => (

                  <View style={styles.formik}>
                    <TextInput
                      placeholder="Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      />
                    <TextInput
                      placeholder="Title"
                      onChangeText={handleChange('title')}
                      onBlur={handleBlur('title')}
                      value={values.title}
                      />
                    <TextInput
                      placeholder="Author"
                      onChangeText={handleChange('author')}
                      onBlur={handleBlur('author')}
                      value={values.author}
                      />
                    <Button 
                      onPress={handleSubmit} 
                      text='Submit'
                      raised={true}  
                      primary={false}
                      />
                  </View>
                )}

              </Formik>

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
  formik: {
    height: 100,
    width: 100,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // padding: 100
  },
});