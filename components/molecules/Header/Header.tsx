import Link from "next/link";
import "../Header/Header.css"; // Asegúrate de que la ruta es correcta

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navlist">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutUs">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="sesion">
        <Link href="/perfil">Perfil</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
};
