import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
