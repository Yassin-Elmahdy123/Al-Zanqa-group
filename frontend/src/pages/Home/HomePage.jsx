import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>kjflsj</h1>

      <div>
        <Link to="/publish">
          <button>hep</button>
        </Link>
        <Link to="/create">
          <button>hep</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
