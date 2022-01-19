import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import NotFound from './components/NotFound';
import Reto from './components/Reto';
import Reto300 from './components/Reto300';
import Preg from './components/Preguntas';
import About from './components/About'
import NewPre from './components/NewPre'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/reto' element={<Reto/>}/>
        <Route path='/reto300' element={<Reto300/>}/>
        <Route path='/preg' element={<Preg/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/newpre' element={<NewPre/>}> </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
