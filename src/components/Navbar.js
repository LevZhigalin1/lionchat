import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = firebase.auth().currentUser;

  return (
    <header id="Navbar">
      <img src={require('./NavbarLogo.png')} id="NavbarLogo" alt="for sell"/>
      <ul id="Nav">
        {user ?
          <li><Link to="/Chat">Чат</Link></li>
          :
          <li><Link to="/Authorization">Авторизация</Link></li>
        }
        <li><Link to="/About">О сайте</Link></li>
        <li><a href="https://www.youtube.com/">Исходники</a></li>
      </ul>
    </header>
  );
}