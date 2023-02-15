import './Styles/App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
        <Route exact path='/:categoryId/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}