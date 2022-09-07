import './App.css';
import './components/Cuerpo/styleCuerpo.css';
import './components/Footer/styleFooter.css';
import './components/Navbar/styleNavbar.css';
import Navbar from './components/Navbar/Navbar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <main>
        <ItemListContainer proyecto="ACA VA EL TITULO DEL PROYECTO" />
        <Cuerpo />
      </main>
      <Footer ubicacion='CABA' copyright='Nombre™' />
    </div>

  );
}

export default App;
