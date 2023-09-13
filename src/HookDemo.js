import React, { useState } from "react";
import useFetch from "./hooks/useFetch";

function HookDemo() {
  //   const [color, setColor] = useState(""); // or
  const [color, setColor] = useState("red"); // like --> const color = "red"
  const [car, setCar] = useState({
    color: "red",
    brand: "ford",
  });

  const updateColor = (newColor) => {
    setCar((previousData) => {
      return { ...previousData, color: newColor };
    });
  };

  const { data, error, isLoading } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  // console.log(data);

  return (
    <>
      {/* {data.title} */}
      <div>HookDemo</div>

      <h1>Color : {color}</h1>

      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>

      <div>Object Hook</div>
      <h1>
        Color: {car?.color} Brand: {car?.brand}
      </h1>
      <input
        type="text"
        id="inputVal"
        onChange={(e) =>
          setCar((car) => {
            return { ...car, color: e.target.value };
          })
        }
      />
      {/* <button onClick={() => updateColor("pink")}>Update color of car</button> */}
      <button
        onClick={() => updateColor(document.getElementById("inputVal").value)}
      >
        Update color of car
      </button>
    </>
  );
}

export default HookDemo;
