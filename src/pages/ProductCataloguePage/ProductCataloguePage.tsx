import "./style.css";
import { ProductCatalogue } from "./components/ProductCatalogue/ProductCatalogue";
import { CatalogueFilterPanel } from "./components/CatalogueFilterPanel/CatalogueFilterPanel";

export const ProductCataloguePage = () => {
  return (
    <div id="catalogue">
      <CatalogueFilterPanel />
      <ProductCatalogue />
    </div>
  );
};
