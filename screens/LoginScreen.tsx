import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

import LibraryScreenInfo from '../components/LibraryScreenInfo';
import { Text, View } from '../components/Themed';
import { db } from '../App';
import Modal from 'react-native-modal';
import { Formik } from 'formik';



export default function LoginScreen() {

  const [isModalVisible, setModalVisible] = React.useState(false);
  // const [value, onChangeText] = React.useState('Book Name');
  const [value, onChangeText] = React.useState('');

  const addBook = async ( name: string, title: string ) => {
      await db.ref('/books').push({
          new: 'true',
          name: name,
          title: title,
      })
  }

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  return (
        <View style={styles.container}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title}> Moochin </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button 
          text="Login"
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
            
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                <Text>
                    The bliss of reading awaits...
                </Text>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => addBook(
                        values.email,
                        values.password,
                        )
                    }
                    > 
                    {({
                    handleChange, handleBlur, handleSubmit, values
                    }) => (

                        <View style={styles.formik}>

                            <TextInput
                                style={styles.formikBox}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                />

                            <TextInput
                                style={styles.formikBox}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                />

                            <Button 
                                onPress={handleSubmit} 
                                text='Login'
                                raised={true}  
                                primary={false}
                                />
                            
                            </View>
                            )}

                </Formik>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

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
    height: 250,
    width: 200,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // padding: 100
  },
  formikBox: {
    height: 35,
    width: 75,
    margin: 15,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 2
  },
});