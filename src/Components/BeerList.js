import React from "../../node_modules/react";
import BeerDesc from "./BeerDesc";

const beerList = props => {
	return (
		<section className='beerList'>
			<ul>
				{props.beerList.map(beerList => {
					return (
						<BeerDesc
							key={beerList.id}
							name={beerList.name}
							desc={beerList.description}
							tagline={beerList.tagline}
							image={beerList.image_url}
							abv={beerList.abv}
							ibu={beerList.ibu}
							foodPairing={beerList.food_pairing}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default beerList;
