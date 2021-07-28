import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMXzHyuttQdUhNRuCocjKnYeUCmv9xizs",
  authDomain: "crown-db-9e27b.firebaseapp.com",
  projectId: "crown-db-9e27b",
  storageBucket: "crown-db-9e27b.appspot.com",
  messagingSenderId: "743649025202",
  appId: "1:743649025202:web:cf9fab7fa62f21d798fdab",
  measurementId: "G-KRE6X4P50X",
};

export const createUserProfiledDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
