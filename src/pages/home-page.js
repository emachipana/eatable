import { useEffect, useState } from "react";
import ListProducts from "../components/ListProducts/list-products";
import Search from "../components/Search";
import SlideMenu from "../components/SlideMenu";
import { useProducts } from "../context/products-context";

function HomePage() {
  const { products } = useProducts();
  const options = Object.keys(products);
  const [currentPage, setCurrentPage] = useState(options[0]);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    setCurrentProducts(products[currentPage]);
  }, [currentPage, products])

  return (
    <>
      <Search />
      <SlideMenu 
        options={[...options]}
        currentOption={currentPage}
        setCurrentOption={setCurrentPage}
      />
      <ListProducts 
        products={currentProducts}
      />
    </>
  );
}

export default HomePage;
