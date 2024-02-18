import "./Animales.css";
import { useState } from "react";

const Header = () => {
    const menu = [
      { id: 1, titulo: "Inicio", href: "#" },
      { id: 2, titulo: "Perdidos", href: "#" },
      { id: 3, titulo: "Encontrados", href: "#" },
      { id: 3, titulo: "Contacto", href: "#" },
    ];
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="Header">
        <h1 className="Header-h1">
          Mascotas Perdidas{" "}
          <span className="material-symbols-outlined">pets</span>
        </h1>
        <nav className={`Header-nav ${isOpen ? "" : "isVisible"}`}>
          <ul className="Header-ul">
            {menu.map((menu, index) => (
              <Li key={index} {...menu} />
            ))}
          </ul>
        </nav>
  
        {/* botón menú hamburguesa */}
        <button onClick={toggleMenu} className="Header-button">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>
    );
};

export default Header;

const Li = ({ titulo, href }) => {
    return (
      <a className="Header-a" href={href}>
        <li className="Header-li">{titulo}</li>
      </a>
    );
};



