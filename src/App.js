import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Navbar from './components/shared/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import ShopCart from './components/ShopCart';

// Pages
import Main from './pages/Main';

// Redux
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Store />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Provider>
  );
}

export default App;
