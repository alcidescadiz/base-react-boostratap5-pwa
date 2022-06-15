import { useState } from "react";
import { findAllShows } from "../services/show-API";

const Form = ({ findShows }) => {
	const [findAllShows, setFindAllShows] = useState('');
	const handleChange = (event) => {
		setFindAllShows(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		findShows(findAllShows);
		setFindAllShows('');
	}
	return (
		
		<form onSubmit={handleSubmit} id="search" className="search">
			<input onChange={handleChange} type="search" placeholder="Search for a title..." value={findAllShows} />
			<div className="searchResults"></div>
			
		</form>
		

	);


};

export default Form;