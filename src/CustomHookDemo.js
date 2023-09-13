import React from "react";
import useGetById from "./hooks/useGetById";

function CustomHookDemo() {
  const urlData = "https://jsonplaceholder.typicode.com/posts";
  const idData = "1";
  const { post: data } = useGetById({ url: urlData, id: idData });
  return (
    <>
      <h1>Custom hook demo</h1>
      {data.id}
      {data.title}
      {data.body}
    </>
  );
}

export default CustomHookDemo;
