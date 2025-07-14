import { useAppSelector } from "../../../../app/hooks";

export const Cart = () => {
  const cartItemList = useAppSelector((state) => state.cart.cartItemList);
  return (
    <div>
      <p>Carrinho</p>
      <ul>
        {cartItemList.map((cartItem) => (
          <li key={cartItem.id}>
            <p>{cartItem.name}</p>
            <p>{cartItem.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
