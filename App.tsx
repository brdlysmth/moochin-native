import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Firebase from "firebase";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	const [user, loggedIn] = React.useState();

	Firebase.auth().onAuthStateChanged((user) => {
		console.log('ok')
		if (user) {
			console.log(user)
			const loggedIn = true;
		} else {
			const loggedIn = false;
		}
	})

	if (!isLoadingComplete) {

		return null;

	} else {

		//TODO: Implement login authentication functionality

		if (!loggedIn) {

			return (
				<SafeAreaProvider>
				<LoginScreen 
					/>
				</SafeAreaProvider>
			) 

		} else {

			return (
				<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
				</SafeAreaProvider>
			);

		}
	}
}

// const app = Firebase.initializeApp(firebaseConfig);
export const db = Firebase.database();

// AppRegistry.AppRegistry.registerComponent('moochin-native', () => App)