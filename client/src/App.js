import {/* Link,*/ Route, Routes} from 'react-router-dom';
import Navbar from './components/common/navbar';
import Homepage from './front/homepage/home-page';
import Footer from './components/common/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
