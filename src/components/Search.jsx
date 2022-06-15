// import { useState, useEffect } from "react";
// import "../App.css";
// import Header from "../components/Header";
// import Form from "../components/Form";
// import ShowList from "../components/ShowList";
// import {findAllShows} from "../services/show-API";

// function Search() {

// 	const [shows, setShows] = useState([]);



// 	useEffect(() => {
// 		findAllShows("fight club").then((shows) => setShows(shows));
// 	}, []);

// 	const handleSearch = (query) => {
// 		findAllShows(query).then((shows) => setShows(shows));
// 	};

// 	};

// 	return (

// 		<>
// 			<Header>
// 				<Form findAllShows={handleSearch} />
// 			</Header>
// 			<ShowList
// 				shows={shows}
// 				toWatch={toWatch}
// 				toggleToWatch={handleToggleWatchShow}
// 			/>
// 		</>
// 	);


// export default Search;