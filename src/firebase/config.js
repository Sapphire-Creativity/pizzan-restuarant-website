// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyApjtSW7WrWOPsKcDYErWAO_T9XuUnLiuI",
	authDomain: "pizzan-restuarant-web-project.firebaseapp.com",
	projectId: "pizzan-restuarant-web-project",
	storageBucket: "pizzan-restuarant-web-project.firebasestorage.app",
	messagingSenderId: "240577091926",
	appId: "1:240577091926:web:51778f6105a63f6b661ef7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
