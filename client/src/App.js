import {/* Link,*/ Route, Routes} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Homepage from './components/front/homepage/home-page';
import Footer from './components/common/footer';
import ShopPage from './components/front/shop/shop-page';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/men' element={<ShopPage />} />
        <Route path='/women' element={<ShopPage />} />
        <Route path='/kids' element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
