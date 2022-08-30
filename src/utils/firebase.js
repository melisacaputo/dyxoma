import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxOgzulBktDEPnlkFAnhjcxLv0rOXZdMQ",
  authDomain: "dyxoma-web.firebaseapp.com",
  projectId: "dyxoma-web",
  storageBucket: "dyxoma-web.appspot.com",
  messagingSenderId: "540813412816",
  appId: "1:540813412816:web:4544aff7bd2982fa4e51d5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "products");
