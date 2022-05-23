import { Route, Routes } from 'react-router-dom';
import './App.scss';
// Components

import SideBar from './components/SideBar';
// Pages
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import History from './pages/History';

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
