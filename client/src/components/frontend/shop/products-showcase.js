import { useEffect, useState } from "react";
import ShowcaseCard from "./showcase-card";
import { useLocation } from 'react-router-dom';

export default function Showcase({filters}) {
    const location = useLocation().pathname;
    const removeFirstLetter = (str) => {
        return str.substring(1);
      };
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true); // Set loading to true before fetching data

        try {
          const response = await fetch("/api/products/get-all");
          const json = await response.json();

          if (response.ok) {
            // Filter the products based on the filters object
            const filteredProducts = json.filter((product) => {
              // Apply the price filter
              if (filters.price && product.price > filters.price) {
                return false;
              }

              // Apply the color filter
              if (
                filters.color.length > 0 &&
                !product.colors.some((color) =>
                  filters.color.includes(color)
                )
              ) {
                return false;
              }

              if (removeFirstLetter(location) !== product.categoryName) {
                return false;
              }

              // Apply the size filter
              if (
                filters.size.length > 0 &&
                !product.sizes.some((size) => filters.size.includes(size))
              ) {
                return false;
              }

              return true;
            });

            setProducts(filteredProducts);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, [filters, location]);

    return (
        <div className="col-md-9">
        {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        ) : (
          <div className="jiMoro-grid">
            {products &&
              products.map((product) => (
                <ShowcaseCard
                  prodId={product._id}
                  productSlug={product.slug}
                  productImg={product.cover}
                  productName={product.title}
                  productPrice={product.price}
                />
              ))}
          </div>
        )}
      </div>
    );
}
