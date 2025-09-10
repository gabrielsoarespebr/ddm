import "./App.css";

import { Header } from "./shared/components/Header/Header";
import whatsappIcon from "./assets/images/whatsappIcon.webp";

import { Outlet } from "react-router-dom";
import { Footer } from "./shared/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
    </>
  );
}

export default App;
