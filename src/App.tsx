import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { store } from "./app/store";
import { Header } from "./shared/components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
