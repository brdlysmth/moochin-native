import * as React from 'react'; 
import { Formik } from 'formik';
import { Text } from './Themed';
import { Button, TextInput, View } from 'react-native';
// import { Button } from 'react-native-material-ui';
import Modal from 'react-native-modal';
import BookFormScreen from '../screens/BookFormScreen';

export default function BookFormScreenInfo({ path }: { path: string }) {
    
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View>
            <Button title="Click here to login" onPress={toggleModal} />

            <Modal
                isVisible={isModalVisible}>
                <View>
                    <BookFormScreen />
                    <View>
                        <Button 
                            title="Hide modal" 
                            onPress={toggleModal} 
                        />
                        
                    </View>
                </View>
            </Modal>

        </View>
    )
};

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
// },
// title: {
//     fontSize: 20,
//     fontWeight: 'bold',
// },
// separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
// },
// });