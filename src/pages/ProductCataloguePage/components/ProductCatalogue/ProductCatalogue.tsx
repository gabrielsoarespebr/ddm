import { productList } from "../../../../features/product/data";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCatalogue = () => {
  return (
    <div>
      <p>Catálogo</p>
      <ul className="flex flex-wrap">
        {productList.map((product) => (
          <li key={product.id} className="w-1/3">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
