import { Catalogue } from "./components/Catalogue/Catalogue";
import { Cart } from "./components/Cart/Cart";

export const Home = () => {
  return (
    <div>
      <div>
        <Catalogue />
        <Cart />
      </div>
    </div>
  );
};
