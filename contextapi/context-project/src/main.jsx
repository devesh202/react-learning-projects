import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './context/ProductContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContext>
      <App />
    </ProductContext>
  </BrowserRouter>
)
