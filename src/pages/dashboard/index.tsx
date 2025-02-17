import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Setting</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/asdasd">unknown</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
