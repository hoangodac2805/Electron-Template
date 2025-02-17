import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">dashboard</Link>
          <Link to="/post">post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
