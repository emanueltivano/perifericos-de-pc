import './Styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Cart from './Components/Cart';
import Help from './Components/Help';

export default function App(props) {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer items={props.items}/>} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer items={props.items}/>} />
        <Route exact path='/category/:categoryId/item/:id' element={<ItemDetailContainer items={props.items} />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/help' element={<Help />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}