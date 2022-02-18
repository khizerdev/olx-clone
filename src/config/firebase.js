
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc} from "firebase/firestore"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGaGbkUhggeRznvHcidUSfR7GmpEMavY",
  authDomain: "expert-4f908.firebaseapp.com",
  projectId: "expert-4f908",
  storageBucket: "expert-4f908.appspot.com",
  messagingSenderId: "775008775288",
  appId: "1:775008775288:web:92b66833aa39228ad6118d",
  measurementId: "G-QV54P6Q2FF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

function register(email, password , phone ,name) {
//Asynchoronous functions
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert('Successfully Registered')
    // Signed in 
    const user = userCredential.user;
    const uid = userCredential.user.uid

    setDoc(doc(db, "users", uid), {
      name,
      email,
      phone
    }).then(() => {
      alert('data added successfully')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    })
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}

function login(email, password,props) {
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Successfully Logged In')
    console.log('user --->', user)
    props.onClick("Dashboard")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })
}

export {
  register,
  login
}
