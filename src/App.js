import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import CvEng from './pages/CvEng';
import Home from './components/organisms/Home';
import About from './components/organisms/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          
          <Route path='/#Home' element={<Home/>} />
          <Route path='/#About' element={<About/>} />
          <Route path='/'  element={<CvEng/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
