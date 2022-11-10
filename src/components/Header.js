import React from "react";
import Nav from "./Nav";
import photo from "../photo.jpg";
import photo2 from "../photo2.jpg";
import photo3 from "../photo3.jpg";
import photo4 from "../photo4.jpg";
import photo5 from "../photo5.jpg";
import photo6 from "../photo6.jpg";
import photo7 from "../photo7.jpg";
import photo8 from "../photo8.jpg";

import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { Power2, Expo } from "gsap";

const Header = () => {
  const photoRef1 = useRef();
  const photoRef2 = useRef();
  const photoRef3 = useRef();
  const photoRef4 = useRef();
  const photoRef5 = useRef();
  const photoRef6 = useRef();
  const photoRef7 = useRef();

  const title = useRef();
  const [containerWidth, setContainerWidth] = useState(360);
  const [containerHeight, setContainerHeight] = useState(250);

  const changeContainerSize = (width, height) => {
    setContainerWidth(width);
    setContainerHeight(height);
  };

  const changeContainerToVertical = () => {
    changeContainerSize(250, 360);
  };
  const changeContainerToHorizontal = () => {
    changeContainerSize(360, 250);
  };

  useLayoutEffect(() => {
    var textWrapper = document.querySelector(".title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<div class='letter'>$&</div>"
    );

    const photos = [
      photoRef1.current,
      photoRef2.current,
      photoRef3.current,
      photoRef4.current,
      photoRef5.current,
      photoRef6.current,
      photoRef7.current,
    ];

    gsap.fromTo(
      photos,
      { top: 500 },
      {
        duration: 1,
        top: 0,
        ease: Power2.easeOut,

        stagger: {
          amount: 6,
        },
      }
    );

    gsap.fromTo(
      "nav",
      { top: -100 },
      {
        duration: 1,
        top: 0,
        ease: Power2.easeOut,
        delay: 7,
      }
    );

    gsap.to(".title .letter", {
      yPercent: 500,
      duration: 0.1,
      ease: Power2.easeOut,
      delay: 7,
      stagger: {
        amount: 1.3,
      },
    });

    gsap.to(".img-container", {
      duration: 1,
      y: "150%",
      scale: 1.8,
      delay: 7,
      ease: Expo.easeInOut,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => changeContainerToVertical(), 1000);
    setTimeout(() => changeContainerToHorizontal(), 2000);
    setTimeout(() => changeContainerToVertical(), 4000);
    setTimeout(() => changeContainerToVertical(), 5000);
    setTimeout(() => changeContainerToHorizontal(), 7000);
  }, []);

  return (
    <header className="w-full relative h-screen bg-beige">
      <Nav></Nav>
      <div className="h-full w-full flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%]">
        <div className="absolute  translate-y-[-5vh] z-10 w-[48rem]  h-20 bg-beige"></div>
        <h1
          ref={title}
          className="
           title absolute translate-y-[-5vh] text-[4rem] leading-3 flex line"
        >
          FRONT-END&nbsp;DEVELOPPER
        </h1>

        <div
          style={{
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
          }}
          className="duration-500 transition-all"
        >
          <ul className="img-container relative w-full h-full z-20 overflow-hidden">
            <li
              ref={photoRef1}
              className="w-full absolute h-full bg-cover"
              style={{ backgroundImage: `url(${photo})` }}
            ></li>
            <li
              ref={photoRef2}
              className="w-full absolute h-full bg-cover"
              style={{ backgroundImage: `url(${photo6})` }}
            ></li>
            <li
              ref={photoRef3}
              className="w-full absolute h-full bg-cover"
              style={{ backgroundImage: `url(${photo3})` }}
            ></li>
            <li
              ref={photoRef4}
              className="w-full absolute h-full bg-cover"
              style={{ backgroundImage: `url(${photo4})` }}
            ></li>
            <li
              ref={photoRef5}
              className="w-full absolute h-full bg-cover"
              style={{ backgroundImage: `url(${photo7})` }}
            ></li>
            <li
              ref={photoRef6}
              className="w-full absolute h-full bg-cover "
              style={{ backgroundImage: `url(${photo6})` }}
            ></li>
            <li
              ref={photoRef7}
              className="w-full absolute h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${photo8})` }}
            ></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
