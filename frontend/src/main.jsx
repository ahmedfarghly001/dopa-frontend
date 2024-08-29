import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css'
import App from './App'
import { AuthContextProvider } from './AuthContext';
createRoot(document.getElementById('root')).render(
  <div>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </div>
) 
