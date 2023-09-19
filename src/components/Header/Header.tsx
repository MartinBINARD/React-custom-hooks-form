import { Link } from 'react-router-dom';
import logo from '../../assets/alien-green.svg';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
    </header>
  );
}
