import ShowShelf from "./ShowShelf";
import ShowList from "./ShowList";


const WatchList = ({ shows, toWatchShows, toggleToWatch, handleToggleToWatchShow }) => {


	return (

		<ShowList
        shows={shows}
        toWatchShows={toWatchShows}
        toggleToWatch={handleToggleToWatchShow}
      />
	)
}
export default WatchList;
