import "./style.css";
import { useAppDispatch } from "../../../../app/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "../../../../features/cart/cartSlice";
import type { CartItemProps } from "../../../../types/cartItemProps";
import { Trash } from "lucide-react";

export const CartItemCard = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div id="cartItem" className="p-2 flex items-center rounded">
      <img
        src={cartItem.imageUrl}
        alt={`Imagem do produto ${cartItem.name}`}
        className="w-1/6 object-contain rounded"
      />
      <div className="p-2 flex-1">
        <p className="font-bold">{cartItem.name}</p>
        <div className="flex justify-between mt-1">
          <div className="flex items-center gap-2">
            <label
              htmlFor={`cartItemId${cartItem.id}`}
              className="text-gray-700"
            >
              Quantidade:
            </label>
            <input
              type="number"
              name="cartItemId"
              id={`cartItemId${cartItem.id}`}
              min={1}
              max={999}
              className="h-full bg-white rounded w-10 text-center"
              value={cartItem.quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: cartItem.id,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />
          </div>
          <button
            className="flex gap-1 items-center bg-neutral-700 hover:bg-neutral-500 rounded p-1 cursor-pointer"
            onClick={() => dispatch(removeFromCart(cartItem.id))}
          >
            <Trash color="white" size={14} />
            <p className="text-white text-sm">Remover</p>
          </button>
        </div>
      </div>
    </div>
  );
};
