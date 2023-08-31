import { useParams } from 'react-router-dom';
import ProductHeader from './product-page-header';
import Visuals from './visuals';
import Info from './product-info.jsx'

export default function ProductPage() {
  const category = "men";
  const cover = "https://cdn.youcan.shop/stores/d72606f04c6ff198c703892312f6cfa2/others/9fwq5JrbFYETt5pmDGJygi5ixHWJh7PQKa39ERMz.jpeg";
  const title = "Test product"
  const img1 = "https://demo.evershop.io/assets/catalog/9916/3001/plv4547-Grey-single.png"
  const img2 = "https://demo.evershop.io/assets/catalog/8470/3468/plv7190-Grey-single.png"
  const img3 = "https://cdn.youcan.shop/stores/d72606f04c6ff198c703892312f6cfa2/others/9fwq5JrbFYETt5pmDGJygi5ixHWJh7PQKa39ERMz.jpeg"
  const {slug} = useParams();

  return (
    <>
      <ProductHeader category={category} />
      <div className="container-md mb-5 pb-5">
      <div className="row gap-4">
        <Visuals cover={cover} prodTitle={title} img1={img1} img2={img2} img3={img3} />
        <div className="col-md">
          <Info
           // prodTitle={}
           // prodShipping={}
           // prodPrice={}
           // prodBrand={}
           // prodDesc={}
          />
        </div>
      </div>
      </div>
    </>
  )
}
