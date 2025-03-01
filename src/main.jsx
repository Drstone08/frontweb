import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Creating the root of the React app and rendering it inside the 'root' element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/frontweb"> {/* Setting the base URL to '/webhunt' */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
