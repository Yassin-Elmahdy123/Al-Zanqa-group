import HomePage from './pages/Home/HomePage.jsx';
import PublishPage from './pages/PublishPage/PublishPage.jsx';
import { LoginSignup } from './pages/LoginSignup/LoginSignup.jsx';
import CreatePage from './pages/CreatePage/CreatePage.jsx';
import { Routes, Route } from 'react-router-dom';

import "./App.scss"
import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/cart"  exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
