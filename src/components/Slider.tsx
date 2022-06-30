import React from "react";
import "./slider.css";
import Pattern from "../images/pattern-bg.svg";
import Curves from "../images/pattern-curve.svg";
import Quotes from "../images/pattern-quotes.svg";

interface SliderProps {
  text: string;
  image: string;
  subText: string;
  name: string;
}

const Slider: React.FC<SliderProps> = ({
  text,
  image,
  subText,
  name,
}): JSX.Element => {
  return (
    <div className="slider-container">
      <div className="slider-background">
        <img src={Pattern} alt="pattern" className="pattern-image" />
        <img src={Curves} alt="curves" className="curves-image" />
        <div className="slider-text">
          <img src={Quotes} alt="quotes" className="quotes-image" />
          <h1>{text}</h1>
          <p>
            {name}
            <span>{subText}</span>
          </p>
        </div>
        <img src={image} className="image" alt="person" />
      </div>
    </div>
  );
};

export default Slider;
