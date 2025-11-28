import "./style.css";
import { ProductCatalogue } from "./components/ProductCatalogue/ProductCatalogue";
import { CatalogueFilterPanel } from "./components/CatalogueFilterPanel/CatalogueFilterPanel";
import { Cart } from "./components/Cart/Cart";

export const ProductCataloguePage = () => {
  return (
    <div id="catalogue">
      <CatalogueFilterPanel />
      <ProductCatalogue />
      <Cart />
    </div>
  );
};
