import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product-service";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      const products = data.reduce((acc, prod) => {
        acc[prod.category] = [...acc[prod.category] || [], prod];
        return acc;
      }, {})
      setTimeout(() => {
        setProducts(products);
        console.log(products);
        setIsLoading(false);
      }, 500);

    }).catch((e) => {
      console.error(e.message);
      setIsLoading(false);
    });
  }, []);

  function findProduct(category, id) {
    return products[category].find(product => product.id === id);
  }

  function searchProducts(query) {
    const allProducts = [];
    Object.values(products).forEach(prod => {
      allProducts.push(...prod);
    })
    
    return allProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        findProduct,
        searchProducts
      }}
    >
      { children }
    </ProductContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductContext);
}

export { ProductProvider, useProducts };
