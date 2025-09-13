import { Clock, Factory, Mail, MapPinned, Phone } from "lucide-react";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="px-8 md:px-40 pt-10 text-white">
      <div className="flex justify-between items-center md:items-start flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
          <p className="font-bold mb-2 text-center lg:text-left">Institucional</p>
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center md:items-start gap-2 mb-2 lg:mb-0">
              <a
                href="https://wa.me/5581983022802?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center lg:justify-start gap-2"
              >
                <Phone />
                <p>+55 81 9 8302 2802</p>
              </a>
              <a
                href="mailto:dmmdistribuicao@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center lg:justify-start gap-2"
              >
                <Mail />
                <p>dmmdistribuicao@gmail.com</p>
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href="https://cnpj.biz/58257580000187"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center lg:justify-start gap-2"
              >
                <Factory />
                <p>58.257.580/0001-87</p>
              </a>
              <a
                href="https://maps.app.goo.gl/k4GbCuai7jQy7HNi8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center lg:justify-start gap-2"
              >
                <MapPinned />
                <div>
                  <p>Olinda - PE</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <p className="font-bold mb-2 text-center lg:text-left">Horário de funcionamento</p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <Clock />
            <p>Segunda a sexta, 08:00 às 18:00</p>
          </div>
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
