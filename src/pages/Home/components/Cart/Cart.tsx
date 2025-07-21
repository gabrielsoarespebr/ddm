import { useAppSelector } from "../../../../app/hooks";
import { CartItemCard } from "../CartItemCard/CartItemCard";

export const Cart = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);

  return (
    <div className="fixed top-0 right-0 h-full w-1/3 bg-gray-300">
      <p className="font-bold text-center">Lista de Orçamento</p>
      <ul>
        {cartItemList.map((cartItem) => (
          <li key={cartItem.id}>
            <CartItemCard cartItem={cartItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
