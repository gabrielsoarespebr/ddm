import { Provider } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { store } from "./app/store";
import { Header } from "./shared/components/Header/Header";
import whatsappIcon from "./assets/images/whatsappIcon.webp";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <a
        href="https://wa.me/558183022802"
        target="_blank"
        rel="noopener noreferrer"
        title="Entrar em contato pelo WhatsApp"
        aria-label="Entrar em contato pelo WhatsApp"
        id="whatsapp-fixed-icon"
      >
        <img src={whatsappIcon} alt="Ícone de WhatsApp" />
      </a>
    </Provider>
  );
}

export default App;
