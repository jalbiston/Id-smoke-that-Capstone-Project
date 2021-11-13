import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp ({
  apiKey: "AIzaSyBrmAukZQMvlNkW22NgGLf0RdqOm7CakPg",
  authDomain: "id-smoke-that.firebaseapp.com",
  projectId: "id-smoke-that",
  storageBucket: "id-smoke-that.appspot.com",
  messagingSenderId: "817403641766",
  appId: "1:817403641766:web:219629ee5001b440c3d967",
  measurementId: "G-JLMTHKRQHZ"
});

// Initialize Firebase
export const auth = app.auth()
export default app