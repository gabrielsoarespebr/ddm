import { useAppDispatch } from "../../../../app/hooks";
import { updateQuantity } from "../../../../features/cart/cartSlice";
import type { CartItemProps } from "../../../../types/cartItemProps";

export const CartItemCard = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex p-2">
        <img
          src={cartItem.imageUrl}
          alt={`Imagem do produto ${cartItem.name}`}
          className="w-1/6 object-contain rounded"
        />
        <div className="">
          <div className="p-2">
            <p className="font-bold">{cartItem.name}</p>
            <div className="flex">
              <div className="flex gap-2">
                <label htmlFor="cartItemId" className="text-gray-500">
                  Quantidade:
                </label>
                <input
                  type="number"
                  name="cartItemId"
                  id={`cartItemId${cartItem.id}`}
                  min={1}
                  max={999}
                  className="bg-white rounded w-10 text-center"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
