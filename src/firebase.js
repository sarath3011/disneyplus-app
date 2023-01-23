import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFOWB_02AlT-fwLSw_cnX-vG4EoI3ByTk",
  authDomain: "disney-clone-app-10336.firebaseapp.com",
  projectId: "disney-clone-app-10336",
  storageBucket: "disney-clone-app-10336.appspot.com",
  messagingSenderId: "882157780810",
  appId: "1:882157780810:web:859b8e42c17373e2b30bb3",
  measurementId: "G-XZ6QSZDNTR"
};

const firebaseApp = initializeApp(firebaseConfig);
const db =  getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage =  getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
export {collection,getDocs,doc}



