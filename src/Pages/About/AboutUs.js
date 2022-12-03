import React from "react";
import aboutBanner from "../../assets/banner.jpg";
import wahtWeDo from "../../assets/wahtWeAreDo.png";
import misson from "../../assets/Business mission-pana.png";
import vision from "../../assets/vision.png";
import sliderBanner from "../../assets/slider__bag.png";
import "./AboutUs.css";
const AboutUs = (props) => {
  props.funNav(true);

  return (
    <div className="about-cl">
      <div
        style={{
          background: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-96 flex items-center justify-center  "
      >
        <div className=" ">
          <h1 className=" text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="container">
        <div className="video pt-36">
          <div className="text-center">
            <h3 className="text-5xl font-bold pb-10">Dr Bro In Youtube</h3>
          </div>
          <iframe
            width="90%"
            height="500px"
            src="https://www.youtube.com/embed/rbry-CadEw4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
            className="mx-auto"
          ></iframe>
        </div>
        <div
          npm
          className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-5 
      grid lg:grid-cols-2
      "
        >
          <div className="pl-28">
            <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
              What We Are
            </p>
            <div className="pb-10">
              <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>
            <p className=" ">
              Text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <p className=" ">
              Typesetting, remaining essentially unchanged. It was popularised
              with the release of Contrary to popular belief, Lorem Ipsum is
              random text.
            </p>
            <p className="">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing.
            </p>
          </div>
          <div className="">
            <figure className="">
              <img
                className=" shadow-lg rounded-md w-1/2 h-1/2 lg:ml-7"
                src={wahtWeDo}
                alt="Album"
              />
            </figure>
          </div>
        </div>{" "}
        {/* our misson */}
        <div
          className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
        >
          <div className="">
            <figure className="">
              <img
                className=" shadow-lg rounded-md w-1/2 h-1/2"
                src={misson}
                alt="Album"
              />
            </figure>
          </div>

          <div className="pl-28">
            <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
              Our Mession
            </p>
            <div className="pb-10">
              <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>
            <p className=" ">
              Text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <p className=" ">
              Typesetting, remaining essentially unchanged. It was popularised
              with the release of Contrary to popular belief, Lorem Ipsum is
              random text.
            </p>
            <p className="">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing.
            </p>
          </div>
        </div>{" "}
        {/* Our Vision  */}
        <div
          className="card lg:card-side bg-white mx-auto max-w-[1240px] mt-[60px] lg:mt-[120px] py-10 
      grid lg:grid-cols-2
      "
        >
          <div className="pl-28">
            <p className="text-4xl lg:text-5xl font-semibold text-secondary ">
              Our Vision
            </p>
            <div className="pb-10">
              <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
            </div>
            <p className=" ">
              Text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy.
            </p>
            <p className=" ">
              Typesetting, remaining essentially unchanged. It was popularised
              with the release of Contrary to popular belief, Lorem Ipsum is
              random text.
            </p>
            <p className="">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing.
            </p>
          </div>
          <div className="">
            <figure className="">
              <img
                className=" shadow-lg rounded-md w-1/2 h-1/2 lg:ml-7"
                src={vision}
                alt="Album"
              />
            </figure>
          </div>
        </div>
        <div
          style={{
            background: `url(${sliderBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
