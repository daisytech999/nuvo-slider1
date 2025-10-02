import React from "react";
import Slider from "./components/Slider";
import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Heading</h1>
      <p className="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto neque illum eius error,
        totam mollitia reiciendis officiis quis magnam?
      </p>
      <Slider />
    </div>
  );
}

export default App;
