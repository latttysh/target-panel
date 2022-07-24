import { Route, Routes } from 'react-router-dom';
import './App.scss';
// Components
import {NavBar} from "./components/NavBar"
// Pages
import Feedback from "./pages/Feedback"
import Home from './pages/Home';
import Support from "./pages/Support";
import Faq from "./pages/Faq"
import Guarantees from "./pages/Guarantees";

function App() {
  return (
    <div className="app">
        <NavBar/>
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/guarantees" element={<Guarantees />} />
    </Routes>
      </div>
    </div>
  );
}

export default App;
