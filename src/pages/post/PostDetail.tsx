import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const PostDetail = (props: Props) => {
  const { id } = useParams<{ id: string }>();

  return <div>PostDetail :{id}</div>;
};

export default PostDetail;
