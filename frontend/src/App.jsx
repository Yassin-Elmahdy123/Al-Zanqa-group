import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import PublishPage from './pages/PublishPage/PublishPage.jsx'

import "./App.scss"

import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx"
import Home from "./components/Home/Home.jsx";

function App() {

  return (
    <>
      <PublishPage/>
    </>
  )
}

export default App
