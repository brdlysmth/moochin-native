import * as React from 'react';
import { TextInput, StyleSheet, Button } from 'react-native';

import firebase from 'firebase';
import { Formik, Field, Form } from 'formik';
import Modal from 'react-native-modal';

import BookFormScreenInfo from '../components/BookFormScreenInfo';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation/index';
import { db } from '../App';

export default function BookFormScreen() {

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
            <Text style={styles.title}> 
                Add Book 
            </Text>

            <Button title="Add Book" onPress={toggleModal} />

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
                        title="Exit" 
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
    // backgroundColor: 'white',
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
  