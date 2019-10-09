import React from "../../node_modules/react";
import BeerDesc from "./BeerDesc";

const RandomBeer = (props) => {
	return (
		<section className='randomBeerInfo'>

			{props.randomBeer.map(randomBeer => {
				return (
					<BeerDesc
						key={randomBeer.id}
						name={randomBeer.name}
						desc={randomBeer.description}
						tagline={randomBeer.tagline}
						image={randomBeer.image_url}
						abv={randomBeer.abv}
						ibu={randomBeer.ibu}
						foodPairing={randomBeer.food_pairing}
					/>
				);
			})}
		</section>
	);
};

export default RandomBeer;
