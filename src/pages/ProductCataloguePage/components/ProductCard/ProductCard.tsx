import "./style.css";
import { useAppDispatch } from "../../../../app/hooks";
import { addToCart } from "../../../../features/cart/cartSlice";
import type { ProductProps } from "../../../../types/productProps";

export const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div id={product.id} className="h-full border border-gray-200 rounded">
      <div className="h-1/2">
        <img
          src={product.imageUrl}
          alt={`Imagem do produto ${product.name}`}
          loading="lazy"
          className="max-h-full place-self-center rounded-t"
        />
      </div>
      <div className="h-1/2 flex flex-col justify-between">
        <div className="p-2">
          <p className="font-bold">{product.name}</p>
        </div>
        <button
          className="w-full p-2 text-white font-bold rounded-b cursor-pointer"
          id="add-to-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Adicionar ao orçamento
        </button>
      </div>
    </div>
  );
};
