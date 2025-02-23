import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import CvEng from './pages/CvEng';
import About from './components/template/About';
import Contact from './components/template/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          
          
          <Route path='/'  element={<CvEng/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
