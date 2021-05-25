import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Jumbotron from 'react-bootstrap/Jumbotron'

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron>
        <h1>¡Bienvenidos!</h1>
        <p className="px-4">
          En este espacio buscamos dar una oportunidad de expresión artística a los
          niños de ARENA.
        </p>
        <p>
          Sabemos que la pandemia ha sido difícil para todas las personas de maneras muy diferentes y creemos que una manera de sobrellevar la situación es a través del arte.
          Agradecemos a la maestra Belinda Jiménez y a la Rosa Icela Sepúlveda por su cooperación.
        </p>
      </Jumbotron>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
