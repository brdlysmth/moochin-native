import firebase from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDCuu-9gjNuWF46DNhUssyc_Yto-TZuZnI",
    authDomain: "moochin-a323c.firebaseapp.com",
    databaseURL: "https://moochin-a323c.firebaseio.com",
    projectId: "moochin-a323c",
    storageBucket: "moochin-a323c.appspot.com",
    messagingSenderId: "11134726879",
    appId: "1:11134726879:web:86f636812ec1eaeb9cef6a",
    measurementId: "G-0YYFDFMXQF"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;