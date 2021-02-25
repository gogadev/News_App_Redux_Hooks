import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchTech } from "../../actions/fetch_tech";

import "./tech.style.css";

const Tech = () => {
  const techSelector = useSelector((state) => state.fetchTech);
  const dispatch = useDispatch();

  const getTechNews = () => dispatch(fetchTech());

  useEffect(() => {
    getTechNews();
  }, []);

  return (
    <section className="container">
      <h2 className="title">Tech News</h2>
      <div className="news">
        {techSelector.techNews.map((post) => {
          return (
            <div className="post" key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
