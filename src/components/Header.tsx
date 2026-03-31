import logo from "../assets/logo.png";
import '../styles/Header.css'

export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <a href="#">Інтерактив</a>
          <a href="#">Наша команда</a>
          <a href="#">Контакти</a>
        </nav>

        <p>Вітаємо, User</p>
      </header>
    </>
  );
}
