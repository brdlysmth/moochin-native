import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Firebase from "firebase";
import firebaseConfig from './config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const loggedIn = true;

  if (!isLoadingComplete) {

    return null;

  } else {

    if(loggedIn) {

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
