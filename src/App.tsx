import React, { useState } from "react";

import "./App.css";
import Slider from "./components/Slider";
import MaleImage from "./images/image-john.jpg";
import FemaleImage from "./images/image-tanya.jpg";
import NextIcon from "./images/icon-next.svg";
import PrevIcon from "./images/icon-prev.svg";

const data: { image: string; text: string; name: string; job: string }[] = [
  {
    image: FemaleImage,
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now.   I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    job: "UX Engineer",
  },
  {
    image: MaleImage,
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",

    name: "John Tarkpor",
    job: "Junior Front-end Developer",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const length = data.length;

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="App">
      {data.map((testemonial, index) => {
        return (
          <div key={index}>
            {index === current && (
              <Slider
                text={testemonial.text}
                name={testemonial.name}
                image={testemonial.image}
                subText={testemonial.job}
              />
            )}
          </div>
        );
      })}
      <div className="icons-container">
        <img
          src={PrevIcon}
          alt="icon"
          onClick={prevSlide}
          className="prevSlide"
        />
        <img
          src={NextIcon}
          alt="icon"
          onClick={nextSlide}
          className="nextSlide"
        />
      </div>
    </section>
  );
}

export default App;
