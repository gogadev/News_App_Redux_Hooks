export function fetchTech() {
  return function (dispatch) {
    fetch(
      `https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dispatch({ type: "FETCH_TECH", payload: response.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
