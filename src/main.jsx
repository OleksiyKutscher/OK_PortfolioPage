import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/aladin";
import "@fontsource/manrope";
import '@fontsource/archivo-black';
import '@fontsource/syne';
import '@fontsource-variable/syne/wght.css';
import '@fontsource-variable/alexandria/wght.css';
import '@fontsource-variable/space-grotesk/wght.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <App />
      </div>
    </div>
  </StrictMode>,
)
