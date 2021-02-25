import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchCustomNews } from "../../actions/fetch_custom_news";

import mainImg from "../../assets/news.png";

import "./main.style.css";

const Main = () => {
  const [sources, setSources] = useState([]);
  const [source, setSource] = useState("");
  const [relevance, setRelevance] = useState("");

  const customNewsSelector = useSelector((state) => state.customSearch);
  const dispatch = useDispatch();

  const getCustomNews = (source, relevance) =>
    dispatch(fetchCustomNews(source, relevance));

  const getSources = () => {
    fetch("https://newsapi.org/v1/sources?")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setSources(response.sources);
      });
  };

  useEffect(() => {
    getSources();
  }, []);

  const getNews = (e) => {
    e.preventDefault();
    if (source === "" || source === "nothing") {
    } else {
      getCustomNews(source, relevance);
    }
  };

  let news;

  if (customNewsSelector.customNews.length > 0) {
    news = (
      <div className="container">
        {customNewsSelector.customNews.map((post) => {
          return (
            <div className="post" key={post.title}>
              <img className="post-img" src={post.urlToImage} alt="" />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    news = (
      <p className="text">~Select a source and relevance from the form.~</p>
    );
  }

  return (
    <div className="container">
      <img src={mainImg} alt="" />
      <form className="form" onSubmit={getNews}>
        <div className="form-control">
          <label>Source</label>
          <select onChange={(e) => setSource(e.target.value)}>
            <option value="nothing">Select an option...</option>
            {sources.map((source) => {
              return (
                <option key={source.id} value={source.id}>
                  {source.name}
                </option>
              );
            })}
          </select>
          <label>Relevance</label>
          <select onChange={(e) => setRelevance(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="top">Top</option>
          </select>
          <div className="buttons">
            <button type="submit">Search</button>
          </div>
        </div>
      </form>
      {news}
    </div>
  );
};

export default Main;
