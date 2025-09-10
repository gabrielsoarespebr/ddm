import { Link } from "react-router-dom";
import "./style.css";

export const Navbar = () => {
  return (
    <ul
      id="navbar"
      className="flex justify-center items-center gap-10 text-white uppercase font-semibold"
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/catalogue">Produtos</Link>
      </li>
    </ul>
  );
};
