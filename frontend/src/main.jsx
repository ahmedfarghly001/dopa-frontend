import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css'
import App from './App'
createRoot(document.getElementById('root')).render(
  <div>
    <Header/>
    <Hero />
  </div>
)
