import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCatalogue = () => {
  return (
    <div>
      <ul className="m-auto pb-25 w-4/5 flex justify-around flex-wrap gap-x-2 gap-y-15">
        {productList.map((product) => (
          <li key={product.id} className="w-1/4">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
