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
        href="https://wa.me/5581983022802?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        title="Entrar em contato pelo WhatsApp"
        aria-label="Entrar em contato pelo WhatsApp"
        id="whatsapp-fixed-icon"
      >
        <img
          src={whatsappIcon}
          alt="Ícone de WhatsApp"
          loading="lazy"
          width={96}
          height={96}
        />
      </a>
    </>
  );
}

export default App;
