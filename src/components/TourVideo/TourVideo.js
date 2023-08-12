import React from "react";
import styled from "styled-components";

const TourVideo = () => {
  return (
    <Wrapper>
      <div className="tourvideo">
        <video
          src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
          autoPlay
          loop
          playSinline
          muted
        ></video>

        <header class="viewport-header">
          <h1>
            Explore
            <span>Montana</span>
          </h1>
        </header>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tourvideo {
    height: 600px;
    position: relative;
    background-color: black;
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .viewport-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .viewport-header h1 {
    font-family: "Syncopate", sans-serif;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3vw;
    line-height: 1.2;
    font-size: 3vw;
    text-align: center;
    span {
      display: block;
      font-size: 10vw;
      letter-spacing: -1.3vw;
    }
  }
`;

export default TourVideo;
