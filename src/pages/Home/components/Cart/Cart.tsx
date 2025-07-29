import "./style.css";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { CartItemCard } from "../CartItemCard/CartItemCard";
import { ScrollText, Trash } from "lucide-react";
import { emptyCart } from "../../../../features/cart/cartSlice";

export const Cart = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);
  const dispatch = useAppDispatch();

  return (
    <div id="cart" className="fixed top-0 right-0 h-full w-1/3 overflow-y-auto">
      <div className="my-3 px-5 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <ScrollText />
          <p className="font-bold">Lista de Orçamento</p>
        </div>
        <button
          className="flex gap-1 items-center bg-neutral-700 hover:bg-neutral-500 rounded p-1 cursor-pointer"
          onClick={() => dispatch(emptyCart())}
        >
          <Trash color="white" size={14} />
          <p className="text-white text-sm">Excluir tudo</p>
        </button>
      </div>

      <ul className="flex flex-col items-center gap-2">
        {cartItemList.map((cartItem) => (
          <li key={cartItem.id} className="p-1">
            <CartItemCard cartItem={cartItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
