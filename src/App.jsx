import './App.css';
import './components/css/styleCuerpo.css';
import './components/css/styleFooter.css';
import './components/css/styleNavbar.css';
import Navbar from './components/Navbar';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <main>
        <ItemCount nombre="Intel Celeron" stock={10} initial={1} onAdd={0} />
        <ItemListContainer proyecto="ACA VA EL TITULO DEL PROYECTO" />
        <Cuerpo />
      </main>
      <Footer ubicacion='CABA' copyright='Nombre™' />
    </div>

  );
}

export default App;
