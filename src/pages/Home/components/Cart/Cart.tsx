import "./style.css";
import { useAppSelector } from "../../../../app/hooks";
import { CartItemCard } from "../CartItemCard/CartItemCard";

export const Cart = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);

  return (
    <div id="cart" className="fixed top-0 right-0 h-full w-1/3 overflow-y-auto">
      <p className="font-bold text-center">Lista de Orçamento</p>
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
