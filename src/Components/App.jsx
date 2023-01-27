import '../Sass/App.scss';
import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section>
      <NavBar />
      <ItemListContainer product={"Monitores"}/>
    </section>
  );
}

export default App;