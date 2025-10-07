import "./style.css";
import { useState } from "react";
import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ProductCatalogue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productAmountPerPage = 24;

  const pageAmount = Math.ceil(productList.length / productAmountPerPage);

  const currentIndex = (currentPage - 1) * productAmountPerPage;

  const productListVisibleOnPage = productList.slice(
    currentIndex,
    currentIndex + productAmountPerPage
  );

  return (
    <div>
      <ul className="m-auto pb-25 w-4/5 flex justify-around flex-wrap gap-y-7">
        {productListVisibleOnPage.map((product) => (
          <li
            key={product.id}
            className="w-64 h-80 hover:shadow-xl duration-500"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <ul id="pagination" className="flex">
        <li>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft />
          </button>
        </li>
        {[...Array(pageAmount).keys()].map((pageIndex) => (
          <li key={pageIndex + 1}>
            <button onClick={() => setCurrentPage(pageIndex + 1)}>
              {pageIndex + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageAmount}
          >
            <ArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};
