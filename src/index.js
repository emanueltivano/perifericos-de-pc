import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './Components/CartContext';
import App from './App.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyDgj5gILIMhTkMRO5YaoxFu_UoVXqIIV_E",
  authDomain: "perifericos-de-pc.firebaseapp.com",
  projectId: "perifericos-de-pc",
  storageBucket: "perifericos-de-pc.appspot.com",
  messagingSenderId: "759580636862",
  appId: "1:759580636862:web:8426a7a49ef8c8980c90ef",
  measurementId: "G-VJBDPF75K5"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const itemsRef = collection(db, 'items');

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(itemsRef);
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    };
    fetchItems();
  }, []);

  return (
    <CartProvider>
      <App items={items}/>
    </CartProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);