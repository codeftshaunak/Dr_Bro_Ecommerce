import React from "react";
import styled from "styled-components";
import aboutBanner from "../../assets/banner.jpg";

const Blog = (props) => {
  props.funNav(true);

  return (
    <Wrapper>
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
          <div>
            <h1 className="text-5xl font-bold text-white">Blog</h1>
          </div>
        </div>

        <div className="container py-10 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/OljlcUP9pwY"
                title="Official Entry to Pakistan 🇵🇰 | Kartarpur Corridor - 1 | Kannada | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/gAJUcEAPTpY"
                title="Sunday Bazaar  | Chor Bazaar |  Bangalore | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/-9bNDZmO4Ek"
                title="How Pakistan People Treat An Indian | Shopping in Pakisthan | EP 2 | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/QdQ3gY0IaY8"
                title="India's Largest Cruise 😍  | Cordelia | Casino | Swimming pool | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/OljlcUP9pwY"
                title="Official Entry to Pakistan 🇵🇰 | Kartarpur Corridor - 1 | Kannada | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/OljlcUP9pwY"
                title="Official Entry to Pakistan 🇵🇰 | Kartarpur Corridor - 1 | Kannada | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/-9bNDZmO4Ek"
                title="How Pakistan People Treat An Indian | Shopping in Pakisthan | EP 2 | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/OljlcUP9pwY"
                title="Official Entry to Pakistan 🇵🇰 | Kartarpur Corridor - 1 | Kannada | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="video">
              <iframe
                width="300"
                height="225"
                src="https://www.youtube.com/embed/OljlcUP9pwY"
                title="Official Entry to Pakistan 🇵🇰 | Kartarpur Corridor - 1 | Kannada | Dr Bro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .video {
    padding: 20px;
  }
`;

export default Blog;
