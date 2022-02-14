import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7Z7VNyM2mAMgt3pvJJP6eJ23P5daYod4",
    authDomain: "fir-auth-c1a5a.firebaseapp.com",
    projectId: "fir-auth-c1a5a",
    storageBucket: "fir-auth-c1a5a.appspot.com",
    messagingSenderId: "868492868884",
    appId: "1:868492868884:web:e93b6cd9b5992d0a0f9601"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

