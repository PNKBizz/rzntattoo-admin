import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAX2YN3Dd3M_p8qQfA90wZpEYWaehz6Zts",
    authDomain: "rzntattoo62.firebaseapp.com",
    databaseURL: "https://rzntattoo62.firebaseio.com",
    projectId: "rzntattoo62",
    storageBucket: "",
    messagingSenderId: "47157398920"
  };
  
const firebaseApp = Firebase.initializeApp(config);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
