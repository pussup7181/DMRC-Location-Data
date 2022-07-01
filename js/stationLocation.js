// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, signOut, updatePassword} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo1QNDosdfxsDIZ5LejWB0sQwJWLI3Gu4",
  authDomain: "dmrc-metro.firebaseapp.com",
  databaseURL: "https://dmrc-metro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dmrc-metro",
  storageBucket: "dmrc-metro.appspot.com",
  messagingSenderId: "565647665542",
  appId: "1:565647665542:web:0f83a3863307263bcae407",
  measurementId: "G-1X0T4R2VR7"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth();
  


var location_select = documemnt.getElementById("maps");

location_select.addEventListener("location", ()=>{
	switch(location_select.selectedIndex){
		case 0:
			break;
		case 1:
			break;
	}
});