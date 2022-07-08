import { useEffect, useState } from "react";
import ListProducts from "../components/ListProducts/list-products";
import Search from "../components/Search";
import SlideMenu from "../components/SlideMenu";
import { useProducts } from "../context/products-context";

function HomePage() {
  const { products, searchProducts } = useProducts();
  const options = Object.keys(products);
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("current_page") || options[0]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [search, setSearch] = useState({
    isSearching: false,
    query: ""
  })

  useEffect(() => {
    setCurrentProducts(products[currentPage]);
    localStorage.setItem("current_page", currentPage);
  }, [currentPage, products]);

  const { isSearching, query } = search;

  function handleChange(value) {
    setSearch({...search, query: value });
  }

  function back() {
    setSearch({ query: "", isSearching: false })
  }

  useEffect(() => {
    const isSearching = query !== "";
    setSearch({ query: query, isSearching: isSearching });
    if(isSearching) {
      setCurrentProducts(searchProducts(query));
    }else {
      setCurrentProducts(products[currentPage]);
    }

  }, [query, products, currentPage, searchProducts]);

  return (
    <>
      <Search 
        isSearching={isSearching}
        value={query}
        handleChange={handleChange}
        handleClick={back}
      />
      {
        isSearching
        ?
        <p>Founded {currentProducts.length} products</p>
        :
        <SlideMenu 
          options={[...options]}
          currentOption={currentPage}
          setCurrentOption={setCurrentPage}
        />
      }
      <ListProducts 
        products={currentProducts}
      />
    </>
  );
}

export default HomePage;
