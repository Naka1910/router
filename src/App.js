
import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route, } from 'react-router-dom'
import About from './About';
import Products from './Products';
import Product1 from './Product1';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Products />} />
        <Route path='/Product/1' element={<Product1 />} />

      </Routes>


    </div>
  );
}

export default App;
