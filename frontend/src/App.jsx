import HomePage from './pages/Home/HomePage.jsx';
import PublishPage from './pages/PublishPage/PublishPage.jsx';
import  Login from './pages/LoginSignup/Login.jsx';
import  Signup from './pages/LoginSignup/Signup.jsx';
import CreatePage from './pages/CreatePage/CreatePage.jsx';
import { Routes, Route, Navigate} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NotFound from "./components/NotFound.jsx";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}

export default App;
