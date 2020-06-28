import { Formik } from 'formik';
import { Text } from './Themed';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native-material-ui';

export default function FormScreenInfo({ path }: { path: string }) {
    return (
        <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
            <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            <Button 
                onPress={handleSubmit} 
                text="Submit"
                />
            </View>
        )}
        </Formik>
    );
  }