import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
