import { Clock, Factory, Mail, MapPinned, Phone } from "lucide-react";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="px-40 pt-10 text-white">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold mb-2">Horário de funcionamento</p>
            <div className="flex gap-2">
              <Clock />
              <p>Segunda a sexta, 08:00 às 18:00</p>
            </div>
          </div>
          <div>
            <p className="font-bold mb-2">Institucional</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/558183022802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <Phone />
                <p>+55 81 9 8302 2802</p>
              </a>
              <a
                href="mailto:dmmdistribuicao@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <Mail />
                <p>dmmdistribuicao@gmail.com</p>
              </a>
              <a
                href="https://cnpj.biz/58257580000187"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <Factory />
                <p>58.257.580/0001-87</p>
              </a>
              <a
                href="https://maps.app.goo.gl/k4GbCuai7jQy7HNi8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <MapPinned />
                <div>
                  <p>Olinda - PE</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0422475417695!2d-34.85579459999997!3d-7.994574299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d5a0a13f3f7%3A0xac1e467f1f7142cd!2sR.%20Maria%20Gomes%20da%20Silva%2C%20105%20-%20Ouro%20Preto%2C%20Olinda%20-%20PE%2C%2053370-680!5e0!3m2!1spt-BR!2sbr!4v1755375312479!5m2!1spt-BR!2sbr"
            width="500"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center pt-10 pb-5">
        <p className="font-bold">
          DDM - Distribuição e Manutenção Industrial &#8226;{" "}
          {new Date().getUTCFullYear()} &#8226; Todos os direitos reservados
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/gabrielsoarespebr/"
            target="_blank"
          >
            Presença online desenvolvida por Gabriel Soares
          </a>
        </p>
      </div>
    </footer>
  );
};
