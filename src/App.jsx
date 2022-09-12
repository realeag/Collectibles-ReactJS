import './App.css';
import './components/Cuerpo/styleCuerpo.css';
import './components/Footer/styleFooter.css';
import './components/Navbar/styleNavbar.css';
import './components/ItemListContainer/styleItem.css';
import Navbar from './components/Navbar/Navbar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() {

  return (
    <div className='container-fluid colorFondo'>
      <Navbar />
      <hr />
      <main>
        <ItemListContainer proyecto="Collectibles SRL" description="¿Nostalgia? Te traemos todos los coleccionables de tu" />
        <ItemDetailContainer />
        <Cuerpo />
      </main>
      <Footer derechos='Todos los derechos reservados. 2022.' copyright='Collectibles™' />
    </div>

  );
}

export default App;
