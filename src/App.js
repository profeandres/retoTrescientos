import './styles/App.css';
import {Routes, Route} from 'react-router-dom';

//components 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Preguntas from './components/Preguntas';
import NotFound from './components/NotFound';
import Reto from './components/Reto';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/preguntas' element={<Preguntas/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/reto' element={<Reto/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
