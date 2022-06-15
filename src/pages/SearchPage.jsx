import { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import Form from "../components/Form";
import WatchList from "../components/WatchList";
import { findAllShows } from "../services/show-API";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);

  useEffect(() => {
    searchShows(query).then((shows) => setShows(shoes));
  }, [query]);

  return (

    <div className="titleList">
    <div className="title">
      <h1></h1>
      <div className="titles-wrapper">
        {shows.map((show) => (
          <Show
            key={show.id}
            show={show}
            toggleToWatch={toggleToWatch}
            ToWatch={toWatchShows.findIndex((toWatchShowId) => show.id === toWatchShowId) === -1 ? false : true
            }
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default SearchPage;