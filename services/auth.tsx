import firebase from '@firebase/app';
import '@firebase/auth';
import { FirebaseAuth, Error } from '@firebase/auth-types';

export const firebaseAuth: FirebaseAuth = (firebase as any).auth();

export const logout = () =>
  firebaseAuth.signOut();

export const loginUserInFirebase = (email: string, pw: string) =>
  firebaseAuth.signInWithEmailAndPassword(email, pw);

export const registerUserInFirebase = ( email: string, pw: string ) => {
  firebaseAuth.createUserWithEmailAndPassword(email, pw);
}

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
