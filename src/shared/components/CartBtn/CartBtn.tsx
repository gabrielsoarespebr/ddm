import { ScrollText } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleCartVisibility } from "../../../features/cart/cartSlice";

export const CartBtn = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);
  const dispatch = useAppDispatch();

  const cartInitialTotalAmount = 0;
  const cartCurrentTotalAmount = cartItemList.reduce(
    (total, currentCartItem) => total + currentCartItem.quantity,
    cartInitialTotalAmount
  );

  return (
    <button
      id="cart-btn"
      className="mr-5 cursor-pointer"
      title="Lista de orçamento"
      onClick={() => dispatch(toggleCartVisibility())}
    >
      <ScrollText size={36} />
      <p>{cartCurrentTotalAmount}</p>
    </button>
  );
};
