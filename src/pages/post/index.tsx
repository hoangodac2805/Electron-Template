import { ROUTER } from "@/config/router";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

type Props = {};

const Post = (props: Props) => {
  const { path } = useRouteMatch();

  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`${ROUTER.POST}/1`}>Post1</Link>
          <Link to={`${ROUTER.POST}/2`}>Post2</Link>
        </li>

        <li>
          <Link to="/asdasd">unknown</Link>
        </li>
      </ul>
    </div>
  );
};

export default Post;
