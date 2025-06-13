import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import RootLayout from './Layouts/root/RootLayout.jsx';
import Feature from "./Pages/Feature.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path='feature' element={<Feature/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
