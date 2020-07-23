import firebase from '@firebase/app';
import '@firebase/auth';
import { FirebaseAuth, Error } from '@firebase/auth-types';

import Firebase from '../config';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const firebaseAuth: FirebaseAuth = (Firebase as any).auth();

export const logoutWithFirebase = () =>
  firebaseAuth.signOut();

export const loginWithFirebase = (email: string, pw: string) =>
  firebaseAuth.signInWithEmailAndPassword(email, pw);

export const registerWithFirebase = (email: string, pw: string) =>
  firebaseAuth.signInWithEmailAndPassword(email, pw);

export const loginErrorToText = (err: Error) => {
  switch (err.code) {
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/user-disabled':
      return 'Account has been disabled';
    case 'auth/user-not-found':
      return 'Account does not exist';
    case 'auth/wrong-password':
      return 'Incorrect password';
    default:
      return 'An unknown error occured';
  }
};

export const resetPassword = (email: string) =>
  firebaseAuth.sendPasswordResetEmail(email);
