import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import PhotoFormats from './components/PhotoFormats';
import Albums from './components/Albums';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import AuthModal from './components/AuthModal';
import { CartProvider } from './contexts/CartContext';
import CartModal from './components/CartModal';
import PhotoPackageSelector from './components/PhotoPackageSelector';
import PhotoPackageCreator from './components/PhotoPackageCreator';
import PhotoPackage15x20Creator from './components/PhotoPackage15x20Creator';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminCustomers from './components/admin/AdminCustomers';
import AdminOrders from './components/admin/AdminOrders';
import ClientLayout from './components/client/ClientLayout';
import ClientDashboard from './components/client/ClientDashboard';
import ClientOrders from './components/client/ClientOrders';
import ClientProfile from './components/client/ClientProfile';
import CheckoutPage from './components/checkout/CheckoutPage';

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    if (hash) {
      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <Header />
    <main>
        <Hero />
        <PhotoFormats />
        <Albums />
        <HowItWorks />
        <Plans />
        <Testimonials />
        <Faq />
    </main>
    <Footer />
  </>
);


const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="bg-white font-sans text-brand-text">
          <ScrollToHashElement />
          <AuthModal />
          <CartModal />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pacote-foto-imas" element={<PhotoPackageSelector />} />
            <Route path="/pacote-10x15" element={<PhotoPackageCreator />} />
            <Route path="/pacote-15x20" element={<PhotoPackage15x20Creator />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="orders" element={<AdminOrders />} />
            </Route>
            <Route path="/cliente" element={<ClientLayout />}>
              <Route index element={<ClientDashboard />} />
              <Route path="dashboard" element={<ClientDashboard />} />
              <Route path="pedidos" element={<ClientOrders />} />
              <Route path="meus-dados" element={<ClientProfile />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;