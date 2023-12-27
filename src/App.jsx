import './App.css'
import ProductDetails from './components/ProductDetails';
import AddToCart from './pages/AddToCart';
import ProductsPage from './pages/ProductsPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<AddToCart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
