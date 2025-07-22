import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { store } from "./app/store";
import { Header } from "./shared/components/Header/Header";
import { Divider } from "./shared/components/Divider/Divider";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Divider />
      <Home />
    </Provider>
  );
}

export default App;
