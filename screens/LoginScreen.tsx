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
        <Text style={styles.title}> Moochin </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

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
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    <TextInput
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