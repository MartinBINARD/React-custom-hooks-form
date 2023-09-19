import { Outlet } from 'react-router';

import Header from '../Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
