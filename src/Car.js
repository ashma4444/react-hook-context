import React from "react";

function Car(props) {
  // JS logic
  const cars = ["BMW", "Tesla"];
  const shoot = (name) => {
    alert(`Shoot... by ${name}`);
  };

  // HTML
  return (
    <>
      <div>Car is of color {props.color}</div>
      <input id="name" type="text" />
      <button onClick={() => shoot(document.getElementById("name").value)}>
        Click me
      </button>

      <ol>
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ol>
    </>
  );
}

export default Car;
