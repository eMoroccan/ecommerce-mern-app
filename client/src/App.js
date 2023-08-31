import {/* Link,*/ Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Homepage from './components/frontend/homepage/home-page';
import Footer from './components/common/footer';
import ShopPage from './components/frontend/shop/shop-page';
import ProductPage from './components/frontend/product/product-page'
import OrdersPage from './components/backend/admin/orders-page';
import Sidebar from './components/backend/admin/sidebar/sidebar';
import Dashboard from './components/backend/admin/dashboard';
import ProductsManage from './components/backend/admin/products-page';
import Customers from './components/backend/admin/customers-page';
import Settings from './components/backend/admin/website-settings';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/men' element={<ShopPage />} />
        <Route path='/women' element={<ShopPage />} />
        <Route path='/kids' element={<ShopPage />} />
        <Route path='/:slug' element={<ProductPage />} />
        <Route path='/dashboard' element={<Sidebar />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="manage-products" element={<ProductsManage />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
