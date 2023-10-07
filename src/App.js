import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:CategoryId' element={<ItemListContainer />} />
        <Route path='/Item/:ItemId' element={<ItemListContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
