import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home/Home";
import { ProductCataloguePage } from "./pages/ProductCataloguePage/ProductCataloguePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalogue", element: <ProductCataloguePage /> },
    ],
  },
  { path: "*", element: <h1>404 - Página não encontrada</h1> },
]);
