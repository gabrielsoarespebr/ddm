import { ScrollText } from "lucide-react";
import { useAppSelector } from "../../../app/hooks";

export const CartBtn = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);

  const cartInitialTotalAmount = 0;
  const cartCurrentTotalAmount = cartItemList.reduce(
    (total, currentCartItem) => total + currentCartItem.quantity,
    cartInitialTotalAmount
  );

  return (
    <button id="cartBtn" title="Lista de orçamento">
      <ScrollText size={36} />
      <p>{cartCurrentTotalAmount}</p>
    </button>
  );
};
