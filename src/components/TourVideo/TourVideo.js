import React from "react";
import styled from "styled-components";

const TourVideo = () => {
  return (
    <Wrapper>
      <div class="row-hero">
        <video
          class="video"
          poster="https://imelgrat.me/demo/images/moth.jpg"
          autoplay
          playsinline
          muted
          loop
        >
          <source
            src="https://imelgrat.me/demo/videos/moth.webm"
            type="video/webm"
          />
        </video>
        <div class="video-quote">
          <p>Fridolaben rasi fusi grasibader ingemeinheit zumtgewankt.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row-hero {
    height: 20rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  @media (min-width: 480px) {
    .row-hero {
      height: 25rem;
    }
  }
  @media (min-width: 720px) {
    .row-hero {
      height: 35rem;
    }
  }

  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    height: auto;
    width: auto;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
  }

  .video-quote {
    z-index: 1;
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default TourVideo;
