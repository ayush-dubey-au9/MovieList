import React, { useState, useEffect } from "react";
import "../Style/style.css";
import Header from "./header";

const MovieList = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    let _data = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };

    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setMovies(json));
  }, []);

  let data = movie.result;
  console.log(data);

  return (
    <>
      <Header />
      <div className="item-container">
        {data === undefined ? (
          <h1 style={{ textAlign: "center" }}>Data Loading</h1>
        ) : (
          data.map((element) => (
            <div className="card" key={element._id}>
              <div className="part2">
                <img src={element.poster} alt="moviepic" />
              </div>
              <div className="part3">
                <h3>{element.title}</h3>
                <p>
                  <strong>Genre</strong>: {element.genre}
                </p>
                <p>
                  <strong>Director</strong>: {element.director}
                </p>
                <p>
                  <strong>Starring</strong>: {element.stars}
                </p>
              </div>
              <div className="part1">
                <p>
                  <strong>Votes</strong> :&nbsp;{element.totalVoted}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>

  );
};

export default MovieList;
