import React from "react";
import Travel from "./Travel"

const travels = [
	{
		dest: "Salto Angel",
    	country: "Venezuela",
    	image: "https://c1.staticflickr.com/4/3664/3666772290_84d4e87ff5_b.jpg",
    	distance: "7,800 km"
	},
	{
		dest: "Machu Picchu",
    	country: "Peru",
    	image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Machu_Picchu_general_view.jpg",
    	distance: "10,000 km"
	},
	{
		dest: "Buenos Aires",
    	country: "Argentina",
    	image: "https://www.goodfreephotos.com/albums/argentina/buenos-aires/bridge-and-skyline-buenos-aires-argentina.jpg",
    	distance: "15,000 km"
	},
	{
		dest: "Jeju",
    	country: "South Korea",
    	image: "https://cdn.pixabay.com/photo/2013/01/15/08/12/jeju-74956_960_720.jpg",
    	distance: "12,000 km"
	},
	{
		dest: "Cliffs of Moher",
    	country: "Ireland",
    	image: "https://cdn.pixabay.com/photo/2017/06/04/18/30/cliff-of-moher-2371819_960_720.jpg",
    	distance: "1200 km"
	},
]

const Travels = () => (
	<div>
		{travels.map(travel =>
			(<Travel{...travel} />
		))}
	</div>
	);

export default Travels;
