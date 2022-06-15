import Show from "../components/Show";

const ShowList = ({ shows, toWatchShows, toggleToWatch }) => {


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

export default ShowList;