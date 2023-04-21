import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// firebase sdks 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARrpVpJz9KXZSMhBSYPKrrfSufxE76ngQ",
  authDomain: "chatapp-4b4c6.firebaseapp.com",
  projectId: "chatapp-4b4c6",
  storageBucket: "chatapp-4b4c6.appspot.com",
  messagingSenderId: "318397371746",
  appId: "1:318397371746:web:8d9659b4ec7f04ee09483b",
  measurementId: "G-3F5K44BBGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

