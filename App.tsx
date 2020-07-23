import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Firebase from "firebase";
import firebaseConfig from './config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { firebaseAuth } from './services/auth';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	let loggedIn: boolean = false;

	firebaseAuth.onAuthStateChanged((user) => {
		if (user) {
			loggedIn = true;
		} else {
			loggedIn = false;
		}
	})
	// const loggedIn = true;
	// const loggedIn = false;

	if (!isLoadingComplete) {

	return null;

	} else {

		//TODO: Implement login authentication functionality

		if(!loggedIn) {

		return (
			<SafeAreaProvider>
			<LoginScreen />
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

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
