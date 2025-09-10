import "./style.css";
import workers from "../../assets/images/workers.webp";

export const ProductCatalogue = () => {
  return (
    <div id="catalogue" className="pt-10 text-center">
      <p className="highlight-title-text">Em breve: Catálogo de produtos</p>
      <img
        src={workers}
        alt="Trabalhadores"
        loading="lazy"
        className="m-auto w-full lg:w-150"
      />
      <div className="py-10 px-10 md:px-20 flex flex-col gap-5">
        <p>
          Esta página está em construção para proporcionar uma melhor
          experiência na realização de orçamentos.
        </p>
        <p>
          Por enquanto, você pode continuar solicitando orçamentos via WhatsApp.
        </p>
      </div>
    </div>
  );
};
