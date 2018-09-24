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
    	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seongsan_Jeju_Island_%EC%A0%9C%EC%A3%BC%EB%8F%84.jpg/800px-Seongsan_Jeju_Island_%EC%A0%9C%EC%A3%BC%EB%8F%84.jpg",
    	distance: "12,000 km"
	},
	{
		dest: "Cliffs of Moher",
    	country: "Ireland",
    	image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Cliffs_of_Moher_north.jpg",
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
