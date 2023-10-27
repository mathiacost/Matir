import './App.css';
import {React, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart'
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import {products} from './asyncMock'





function App() {
  // useEffect(()=>{
  //   const collectionProd = collection(db,'products')
  //   products.map((item)=> addDoc(collectionProd,item))
  // },[])
  
  return(
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>      
    </div>
  );
}

export default App;
