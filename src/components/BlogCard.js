import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import blog1 from "../assets/blog/blog-1.jpg";
import { BASE_URL } from "../config";
import axios from "axios";

const BlogCard = () => {
  const [blog, setBlog] = useState([]);
  console.log(blog);
  const API = `${BASE_URL}/blogs/`;
  const getBlogs = async (api) => {
    const res = await axios.get(api);
    const data = res.data.results;
    setBlog(data);
  }

  useEffect(() => {
    getBlogs(API);
  }, [])

  return (
    <Wrapper>
      <div className="container mx-auto pb-36">
        <div className="intro-data text-center">Check Now!</div>
        <div className="common-heading text-center">Our New Blogs</div>
        <div className="blog">

          {
            blog.map((blog) => {
              return <div key={blog.id}>
                <div className="blog__1 border">
                  <div className="blog__body">
                    <div className="blog__image">
                      <a href={blog.link} target="_blank">
                        <img src={blog.thumbnail} alt="blog" className="w-[300px]" />
                      </a>
                    </div>
                    <div className="blog__title text-left pt-3 capitalize">
                      <h3 className="text-2xl font-bold">{blog.title}</h3>

                      <span className="blog__date text-xl">22 Spet 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
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
