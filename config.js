const firebaseConfig = {
  apiKey: "AIzaSyCrYR4PPpTQ4kqv1R_K-NWaK34m9NLXg_4",
  authDomain: "awaismoneylab.firebaseapp.com",
  projectId: "awaismoneylab",
  storageBucket: "awaismoneylab.firebasestorage.app",
  messagingSenderId: "315930787320",
  appId: "1:315930787320:web:0e1b931203e19a3f21aa0d"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
