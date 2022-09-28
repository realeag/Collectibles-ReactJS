import './App.css';
import './components/Cart/styleCart.css';
import './components/Cuerpo/styleCuerpo.css';
import './components/Footer/styleFooter.css';
import './components/Navbar/styleNavbar.css';
import './components/ItemListContainer/styleItem.css';
import Navbar from './components/Navbar/Navbar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import CartProvider from "./context/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <div className='container-fluid colorFondo' >
      <CartProvider >
        <BrowserRouter >
            <Navbar />
            <hr />
            <Cuerpo proyecto="Collectibles SRL" description="¿Nostalgia? Te traemos todos los coleccionables de tu infancia" />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoriaMundial' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            </Routes>

            <Footer derechos='2022. Todos los derechos reservados.' copyright='Collectibles™' />

        </BrowserRouter >
    </CartProvider>
    </div>

  );
}

export default App;
