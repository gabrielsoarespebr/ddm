import { useAppDispatch } from "../../../../app/hooks";
import { addToCart } from "../../../../features/cart/cartSlice";
import { productList } from "../../../../features/product/data";

export const Catalogue = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Catalogo</p>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
