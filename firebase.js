import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmaQoKwNHquqdWMXVRJLU_JIIIxwtPLks",
  authDomain: "devlink-marketplace-d3de1.firebaseapp.com",
  projectId: "devlink-marketplace-d3de1",
  storageBucket: "devlink-marketplace-d3de1.appspot.com",
  messagingSenderId: "694211977670",
  appId: "1:694211977670:web:ffc4eca6709604e3cd12c7",
  measurementId: "G-DDZB6RTZR9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }