
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <NavBar/>
      </div>
      <div className='Routes-pages'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cart' element={<CartPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
