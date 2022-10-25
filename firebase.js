import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA03W3GvpFIInLKES6alDuMEZH1csur5Uo',
  authDomain: 'breaking-bad-8178e.firebaseapp.com',
  projectId: 'breaking-bad-8178e',
  storageBucket: 'breaking-bad-8178e.appspot.com',
  messagingSenderId: '1016885148758',
  appId: '1:1016885148758:web:71d3f03e20d559d4430ff7',
  measurementId: 'G-925L5J5879',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
