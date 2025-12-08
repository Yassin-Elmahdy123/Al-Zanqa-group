import HomePage from './pages/Home/HomePage.jsx';
import PublishPage from './pages/PublishPage/PublishPage.jsx';
import { LoginSignup } from './pages/LoginSignup/LoginSignup.jsx';
import CreatePage from './pages/CreatePage/CreatePage.jsx';
import { Routes, Route, Navigate} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/cart"  exact element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}

export default App;
