import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [text, settext] = useState("");

  const Dictionary = {
    "🍇": "Grapes",
    "🍎": "Apple",
    "🍺": "Beer",
    "🍕": "Pizza",
    "🧁": "CupCake",
    "🍞": "Bread",
    "🍷": "Wine",
    "🍋": "Lemon",
    "🌭": "Hot Dog",
    "🍩": "Cookie",
    "🍰": "Cake",
    "☕": "Tea",
    "🍸": "CockTail",
    "🍦": "Ice Cream",
    "🥦": "Broccolli",
    "🥑": "Avocado",
    "🥝": "Kiwi",
    "🌮": "Taco",
    "🥗": "Salad",
    "🍫": "Choclate",
    "🧆": "Falafel",
    "🥓": "Bacon",
    "🍟": "French Fries"
  };

  var FruitArray = Object.keys(Dictionary);
  //var FruitValue = Object.values(Dictionary);
  // console.log(FruitValue);

  function Changetext(e) {
    console.log(e.target.value);
    const food = e.target.value;
    console.log(Dictionary[food]);
    settext(Dictionary[food]);

    if (Dictionary[food] === undefined) settext("Sorry, Please try Again!!");
  }

  function clickHandler(value) {
    console.log("Clicked", value);
    settext(Dictionary[value]);
  }

  return (
    <div className="App">
      <h1>
        Welcome to{" "}
        <i>
          {" "}
          <span style={{ color: "blue" }}> Food & Drinks Game!! </span>
        </i>
      </h1>
      <input className="inputtxt" onChange={Changetext}></input>
      <br /> <br />
      <div className="cont" style={{ border: "2px solid Black" }}>
        <ul>
          {FruitArray.map((value) => {
            return (
              <span
                style={{ cursor: "pointer", fontSize: "2rem" }}
                onClick={() => clickHandler(value)}
                key={value}
              >
                {" "}
                {value}{" "}
              </span>
            );
          })}
        </ul>
        <div>
          {" "}
          <h1> {text} </h1>
        </div>
      </div>
    </div>
  );
}
