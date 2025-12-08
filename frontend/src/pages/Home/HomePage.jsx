import React from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../features/productsApi.js";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">Welcome to the Dashboard</h1>
        <p className="home__subtitle">
          Choose an action below to get started.
        </p>
      </header>

      <div className="home__buttons">
        <Link to="/publish">
          <button className="home__btn home__btn--primary">Publish Newspaper</button>
        </Link>

        <Link to="/create">
          <button className="home__btn home__btn--secondary">Create New Post</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
