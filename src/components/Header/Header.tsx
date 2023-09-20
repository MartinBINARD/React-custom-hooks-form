import { NavLink } from 'react-router-dom';
import logo from '../../assets/alien-green.svg';

import './Header.scss';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--active' : 'nav-link'
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/wronglink"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--active' : 'nav-link'
          }
        >
          Wrong link
        </NavLink>
      </div>
    </header>
  );
}
