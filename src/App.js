import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './router/home/Home';
import ProductInfo from './router/single-route/SingleRoute';
import Wishlist from './router/wishlist/Wishlist';
import Cart from './router/cart/Cart';
import Login from './router/login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path='/product/:id' element={<ProductInfo/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
