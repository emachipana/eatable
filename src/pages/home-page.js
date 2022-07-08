import { useState } from "react";
import Search from "../components/Search";
import SlideMenu from "../components/SlideMenu";
import { useProducts } from "../context/products-context";

function HomePage() {
  const { products } = useProducts();
  const options = Object.keys(products);
  const [currentPage, setCurrentPage] = useState(options[0]);
  const [currentProducts, setCurrentProducts] = useState(products);

  return (
    <>
      <Search />
      <SlideMenu 
        options={[...options]}
        currentOption={currentPage}
        setCurrentOption={setCurrentPage}
      />
    </>
  );
}

export default HomePage;
