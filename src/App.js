import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playlist from './Playlist';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
