import React from "react";
const Banner = (data) => {
  const {
    hadding__text,
    bold__text,
    footer__text,
    imgData,
    bg__color,
    text__color,
  } = data.myData;
  return (
    <div
      className="container shadow-lg  rounded-lg"
      style={{ backgroundColor: bg__color }}
    >
      <div className="flex items-center justify-around">
        <div>
          <h2 className="text-white">{hadding__text}</h2>
          <h1 className="text-white" style={{ color: text__color }}>
            {bold__text}
          </h1>
          <h2 className="text-white">{footer__text}</h2>
        </div>
        <div className="">{imgData}</div>
      </div>
    </div>
  );
};

export default Banner;
