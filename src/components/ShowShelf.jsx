import { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Form from "./Form";
import ShowList from "./ShowList";
import {  searchShows, 
          searchShowsCrave, 
          searchShowsDisney, 
          searchShowsApple, 
          findAllShows } from "../services/show-API";

function ShowShelf() {

  const [shows, setShows] = useState([]);
  const [showsTvCrave, setShowsTvCrave] = useState([]);
  const [showsTvDisney, setShowsTvDisney] = useState([]);
  const [showsTvApple, setShowsTvApple] = useState([]);

  const [toWatchShows, setToWatchShows] = useState([]);

  const [showsFound, setShowsFound] = useState([]);

  useEffect(() => {
    searchShows().then((showsTvNetflix) => setShows(showsTvNetflix));
    searchShowsCrave().then((showsTvCrave) => setShowsTvCrave(showsTvCrave));
    searchShowsDisney().then((showsTvDisney) => setShowsTvDisney(showsTvDisney));
    searchShowsApple().then((showsTvApple) => setShowsTvApple(showsTvApple));
    findAllShows().then((showsFound) => setShowsFound(showsFound));
  }, []);


  const handleSearch = (query) => {
    findAllShows(query).then((showsFound) => setShowsFound(showsFound));
  };

  const handleToggleToWatchShow = (id) => {

    setToWatchShows((prevState) => {
      if (prevState.findIndex((showId) => showId === id) === -1) {
        return [...prevState, id];
      }

      return prevState.filter((showId) => showId !== id);
    });
  };

  return (


    <>
      <Header>
        <Form  />
      </Header>

      <div className="titleList">
        <div className="title">
          <h1>Netflix</h1>
        </div>
      </div>

      <ShowList
        shows={shows}
        toWatchShows={toWatchShows}
        toggleToWatch={handleToggleToWatchShow}
      />
      <div className="titleList">
        <div className="title">
          <h1>Crave</h1>
        </div>
      </div>

      <ShowList
        shows={showsTvCrave}
        toWatchShows={toWatchShows}
        toggleToWatch={handleToggleToWatchShow}
      />
      <div className="titleList">
        <div className="title">
          <h1>Disney</h1>
        </div>
      </div>
      <ShowList
        shows={showsTvDisney}
        toWatchShows={toWatchShows}
        toggleToWatch={handleToggleToWatchShow}
      />

      <div className="titleList">
        <div className="title">
          <h1>Apple</h1>
        </div>
      </div>

      <ShowList
        shows={showsTvApple}
        toWatchShows={toWatchShows}
        toggleToWatch={handleToggleToWatchShow}
      />


    </>
  );
}

export default ShowShelf;