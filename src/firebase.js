import firebase from 'firebase/app';
import "firebase/firestore";

const config = {
        apiKey: "AIzaSyBB4UsMkjI0Vn2HdsuluXfB2rR6DVht0CM",
        authDomain: "everlearn-holding.firebaseapp.com",
        projectId: "everlearn-holding",
        storageBucket: "everlearn-holding.appspot.com",
        messagingSenderId: "523433635578",
        appId: "1:523433635578:web:f2bde290d07a63a4ed2343"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
