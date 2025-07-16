import { Catalogue } from "./components/Catalogue/Catalogue";
import { Cart } from "./components/Cart/Cart";

export const Home = () => {
  return (
    <div>
      <div className="flex justify-around">
        <Catalogue />
        <Cart />
      </div>
    </div>
  );
};
