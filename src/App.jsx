import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import { ShopCategory } from './Pages/ShopCategory/ShopCategory';
import { Cart } from './Pages/Cart/Cart';
import { Product } from './Pages/Product/Product';
import Home from './Pages/Home';
import { LoginSignup } from './Pages/LoginSignup/LoginSignup'
import { Footer } from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';

function App() {
  

  return (
    <>
      <div className="./App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/homens' element={<ShopCategory banner={men_banner} category="men" />}/>
              <Route path='/mulheres' element={<ShopCategory banner={women_banner} category="women" />}/>
              <Route path='/criancas' element={<ShopCategory banner={kid_banner} category="kid" />}/>
              <Route path="/product/:productId" element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
              <Route path='*' element={<div>404 Not Found</div>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
