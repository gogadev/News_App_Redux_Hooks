export function fetchCustomNews(source, relevance) {
  return function (dispatch) {
    fetch(
      `https://newsapi.org/v1/articles?source=${source}&sortBy=${relevance}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dispatch({ type: "FETCH_CUSTOM_NEWS", payload: response.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
