import "./style.css";
import industrialBelt from "../../../../assets/images/industrialBelt.webp";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { handleCategorySelection } from "../../../../features/category/categorySlice";

export const CatalogueFilterPanel = () => {
  const dispatch = useAppDispatch();
  const categorySelected = useAppSelector((state) => state.category);

  const categoryList = [
    { id: "todos", title: "Todos os produtos", imageUrl: industrialBelt },
    {
      id: "correias-industriais",
      title: "Correias industriais",
      imageUrl: industrialBelt,
    },
    { id: "polias", title: "Polias", imageUrl: industrialBelt },
    { id: "rolamentos", title: "Rolamentos", imageUrl: industrialBelt },
  ];

  return (
    <div className="py-10 flex flex-col items-center">
      <ul id="category-list-container" className="w-1/2 flex justify-around">
        {categoryList.map((category) => (
          <li
            key={category.id}
            className={`text-center w-1/6 ${
              categorySelected === category.id ? "active" : ""
            }`}
          >
            <button
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
      <input type="text" name="" id="" className="center border" />
    </div>
  );
};
