import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";

export const Catalogue = () => {
  return (
    <div className="w-1/2">
      <p>Catálogo</p>
      <ul className="flex flex-wrap">
        {productList.map((product) => (
          <li key={product.id} className="w-1/2">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
