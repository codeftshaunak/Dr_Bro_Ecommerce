import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import blog1 from "../assets/blog/blog-1.jpg";

const BlogCard = () => {
  return (
    <Wrapper>
      <div className="container mx-auto pb-36">
        <div className="intro-data text-center">Check Now!</div>
        <div className="common-heading text-center">Our New Blogs</div>
        <div className="blog">
          <div className="blog__1">
            <div className="blog__body">
              <div className="blog__image">
                <img src={blog1} alt="blog" />
              </div>
              <div className="blog__title text-left">
                <h3>Is this world have a place like haven?</h3>
                <span className="blog__date">22 Spet 2022</span>
              </div>
              <div className="blog__desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi accusantium, quasi asperiores porro beatae nobis?
                  Eaque distinctio at sint tempora hic quae architecto quas,
                  commodi dicta adipisci repudiandae repellendus repellat
                  delectus cupiditate impedit.
                </p>
              </div>
            </div>
          </div>

          <div className="blog__1">
            <div className="blog__body">
              <div className="blog__image">
                <img src={blog1} alt="blog" />
              </div>
              <div className="blog__title text-left">
                <h3>Is this world have a place like haven?</h3>
                <span className="blog__date">22 Spet 2022</span>
              </div>
              <div className="blog__desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi accusantium, quasi asperiores porro beatae nobis?
                  Eaque distinctio at sint tempora hic quae architecto quas,
                  commodi dicta adipisci repudiandae repellendus repellat
                  delectus cupiditate impedit.
                </p>
              </div>
            </div>
          </div>

          <div className="blog__1">
            <div className="blog__body">
              <div className="blog__image">
                <img src={blog1} alt="blog" />
              </div>
              <div className="blog__title text-left">
                <h3>Is this world have a place like haven?</h3>
                <span className="blog__date">22 Spet 2022</span>
              </div>
              <div className="blog__desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi accusantium, quasi asperiores porro beatae nobis?
                  Eaque distinctio at sint tempora hic quae architecto quas,
                  commodi dicta adipisci repudiandae repellendus repellat
                  delectus cupiditate impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blog {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
    .blog__title {
      padding-bottom: 5px;
      h3 {
        font-size: 20px;
      }
    }

    .blog__1 {
      width: 350px;
      padding: 20px;
      .blog__desc {
        p {
          font-size: 14px;
          text-align: justify;
        }
      }
    }
  }
`;

export default BlogCard;
