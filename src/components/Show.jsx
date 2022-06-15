import placeholder from "../images/image-not-available.jpg";

const Show = ({ show, toWatch, toggleToWatch }) => {
	const { id, title, overview, vote_average, poster_path } = show;
	const handleClick = (event) => {
		toggleToWatch(id);
	};

	return (
		<div className="movie">
			<a href={`/details/${id}`}>
				<img
					src={
						poster_path === null ? placeholder : `https://image.tmdb.org/t/p/w500${poster_path}`}
					alt="Movie poster" />
				<div className="overlay">
					<div className="title">{title}</div>
					<div className="rating">{vote_average}/10</div>
					<div className="plot">
						{overview}
					</div>
				</div>
			</a>
			<div data-toggled={toWatch} className="listToggle">
				<div onClick={handleClick}>
					<i className="fa fa-fw fa-plus"></i>
					<i className="fa fa-fw fa-check"></i>
				</div>
			</div>
		</div>


	);
};

export default Show;