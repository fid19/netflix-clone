import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//We need to seed the database

//We need a config here

const config = {
  apiKey: "AIzaSyAsTyZzzI3R3la98P3tA92gT1Z1tazPG0E",
  authDomain: "netlix-clone-f577e.firebaseapp.com",
  projectId: "netlix-clone-f577e",
  storageBucket: "netlix-clone-f577e.appspot.com",
  messagingSenderId: "124600585920",
  appId: "1:124600585920:web:231ca9b9355d10c2a62725",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
