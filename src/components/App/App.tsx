import { Outlet } from 'react-router';
import logo from '../../assets/alien-green.svg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
