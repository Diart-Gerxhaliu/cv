import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import CvEng from './pages/CvEng';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/'  element={<CvEng/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
