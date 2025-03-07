
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import MenuContextProvider from './Context/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MenuContextProvider>
)
