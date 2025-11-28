import "./style.css";

import industrialBelt from "../../../../assets/images/industrialBelt.webp";
import allProducts from "../../../../assets/images/allProducts.webp";
import pulley from "../../../../assets/images/pulley.webp";
import bearing from "../../../../assets/images/bearing.webp";

import { Search } from "lucide-react";

import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { handleCategorySelection } from "../../../../features/category/categorySlice";
import { searchProduct } from "../../../../features/search/searchSlice";

export const CatalogueFilterPanel = () => {
  const dispatch = useAppDispatch();

  // CATEGORY FILTER
  const categorySelected = useAppSelector((state) => state.category);

  const categoryList = [
    { id: "todos", title: "Todos os produtos", imageUrl: allProducts },
    {
      id: "correias-industriais",
      title: "Correias industriais",
      imageUrl: industrialBelt,
    },
    { id: "polias", title: "Polias", imageUrl: pulley },
    { id: "rolamentos", title: "Rolamentos", imageUrl: bearing },
  ];

  // SEARCH FILTER
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-10 flex flex-col items-center">
      <ul id="category-list-container" className="flex justify-around gap-5">
        {categoryList.map((category) => (
          <li
            key={category.id}
            className={`text-center ${
              categorySelected === category.id ? "active" : ""
            }`}
          >
            <button
              className="cursor-pointer"
              onClick={() => dispatch(handleCategorySelection(category.id))}
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                loading="lazy"
              />
              <p>{category.title}</p>
            </button>
          </li>
        ))}
      </ul>
      <div className="flex mt-10 mb-2">
        <input
          type="text"
          name="product-searchbar-input"
          id="product-searchbar-input"
          className="center border"
          placeholder="Exemplo: POLIA ROYAL 9MM"
          onChange={(input) => setSearchText(input.target.value)}
        />
        <button
          id="product-searchbar-button"
          onClick={() => dispatch(searchProduct(searchText))}
        >
          <Search />
        </button>
      </div>
    </div>
  );
};
