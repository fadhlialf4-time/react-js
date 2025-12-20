// src/App.jsx (lanjutan)
import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard'; // Import Dashboard
import DashboardProfile from './pages/DashboardProfile'; // Import DashboardProfile
import DashboardSettings from './pages/DashboardSettings'; // Import DashboardSettings
import NotFound from './pages/NotFound';
import NegaraAsiaTenggara from './evaluasi-harian16/pages/NegaraAsiaTenggara';
import NegaraEropaBarat from './evaluasi-harian16/pages/NegaraEropaBarat';
import NegaraAsiaTimur from './evaluasi-harian16/pages/NegaraAsiaTimur';
import Indonesia from './evaluasi-harian16/pages/Indonesia';
import DashboardNotification from './evaluasi-harian16/pages/DashboardNotification';
import DashboardTransaction from './evaluasi-harian16/pages/DashboardTransaction';


function App() {
  return (
    <div>
      <h1>Aplikasi React Router</h1>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/about">Tentang</Link></li>
          <li><Link to="/contact">Kontak</Link></li>
          <li><Link to="/products/1">Produk 1</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li> {/* Link ke dashboard */}
          <li><Link to="/asiaTenggara">Negara Asia Tenggara</Link></li>
          <li><Link to="/eropaBarat">Negara Eropa Barat</Link></li>
          <li><Link to="/asiaTimur">Negara Asia Timur</Link></li>
          <li><Link to="/indonesia/1945">Indonesia</Link></li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/asiaTenggara" element={<NegaraAsiaTenggara/>} />
        <Route path="/eropaBarat" element={<NegaraEropaBarat/>} />
        <Route path="/asiaTimur" element={<NegaraAsiaTimur/>} />
        <Route path="/indonesia/:republicId" element={<Indonesia/>} />

        {/* Definisi Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<DashboardProfile />} /> {/* Jalur relatif: /dashboard/profile */}
          <Route path="settings" element={<DashboardSettings />} /> {/* Jalur relatif: /dashboard/settings */}
          <Route path="notification" element={<DashboardNotification />} />
          <Route path="transaction" element={<DashboardTransaction />} />
          <Route index element={<h3>Pilih salah satu menu di atas.</h3>} /> {/* Default child route */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;