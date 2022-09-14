
import './App.css';
import Home from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Poppy } from './components/Poppy/Poppy';
import { Search } from './components/SearchPage/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/poppy' element={<Poppy/>}/>
        <Route path='/search/:id' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
