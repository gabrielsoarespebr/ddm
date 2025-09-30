import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCatalogue = () => {
  return (
    <div>
      <ul className="m-auto pb-25 w-4/5 flex justify-around flex-wrap gap-y-7">
        {productList.map((product) => (
          <li key={product.id} className="w-64 h-80 hover:shadow-xl duration-500">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
