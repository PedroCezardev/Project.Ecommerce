import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import { ShopCategory } from './Pages/ShopCategory/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import Home from './Pages/Home';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import banner_kid from './assets/banner_kids.png';

function App() {
  

  return (
    <>
      <div className="./App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/homens' element={<ShopCategory banner={men_banner} category="homem" />}/>
              <Route path='/mulheres' element={<ShopCategory banner={women_banner} category="mulher" />}/>
              <Route path='/criancas' element={<ShopCategory banner={banner_kid} category="crianca" />}/>
              <Route path="/product" element={<Product/>}/>
                <Route path=':productId' element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
