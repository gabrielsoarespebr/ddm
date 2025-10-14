import "./style.css";
import { useEffect, useState } from "react";
import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";
import { Pagination } from "../../../../shared/components/Pagination/Pagination";
import { useAppSelector } from "../../../../app/hooks";

export const ProductCatalogue = () => {
  // CATEGORY FILTER
  const categorySelected = useAppSelector((state) => state.category);

  const [productListAfterCategoryFilter, setProductListAfterCategoryFilter] =
    useState(productList);

  useEffect(() => {
    const productListFiltered = productList.filter(
      (product) =>
        categorySelected === "todos" || product.category === categorySelected
    );

    setProductListAfterCategoryFilter(productListFiltered);

    setCurrentPage(1);
  }, [categorySelected]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productAmountPerPage = 24;

  const pageAmount = Math.ceil(
    productListAfterCategoryFilter.length / productAmountPerPage
  );

  const currentIndex = (currentPage - 1) * productAmountPerPage;

  const productListVisibleOnPage = productListAfterCategoryFilter.slice(
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
      <div className="flex justify-center items-center mb-20">
        <Pagination
          pageAmount={pageAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
