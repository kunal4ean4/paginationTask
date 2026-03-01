import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products?limit=200");
      const result = await response.json();
      setData(result.products);
    }
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handleOnClick = (n) => {
    setCurrentPage(n);
  };

  const goToPrePage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pagination task</h1>
      <Pagination currentPage={currentPage} handleOnClick={handleOnClick} goToPrePage={goToPrePage} goToNextPage={goToNextPage} noOfPages={noOfPages}/>
      <div className="container">
        {data.slice(start, end).map((product) => {
          return (
            <Cards
              key={product.id}
              title={product.title}
              image={product.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
