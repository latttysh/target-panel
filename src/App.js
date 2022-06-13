import { Route, Routes } from 'react-router-dom';
import './App.scss';
// Components
import SideBar from './components/SideBar';
// Pages
import Home from './pages/Home';
import Support from './pages/Support';
import Withdraw from './pages/Withdraw';
import News from './pages/News';
import History from './pages/History';
import Promo from './pages/Promo';
import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
      </div>
    </div>
  );
}

export default App;
