
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc , getDoc } from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
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
const storage = getStorage();

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

async function login(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    alert('Successfully LoggedIn')
    return user
  } catch (e) {
    alert(e.message)
  }
}
async function getAdDetail(adId) {
  try {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);
    // console.log("Document data:", docSnap.data());
    return docSnap.data()
  } catch (e) {
    alert(e.message)
  }
}

async function uploadMultipleImage(files) {
  console.log(files);
  let urls = [];
  for(let i=0;i < files.length;i++) {
    console.log(files);
    const storageRef = ref(storage, `ads/${files[i].name}`);
    const response = await uploadBytes(storageRef , files[i])
    const url = await getDownloadURL(response.ref)
    urls.push(url)
  }

  return urls;
}

export {
  register,
  login,
  getAdDetail,
  uploadMultipleImage
}
