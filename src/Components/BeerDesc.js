import React, { Component } from "react";

class BeerDesc extends Component {
	render() {
		const {
			name,
			image,
			tagline,
			desc,
			uniqueId,
			abv,
			ibu,
            foodPairing
		} = this.props;

		return (
			<li className='beerInfo' key={uniqueId}>
				<img src={image} alt={name} />
				<h3>{name}</h3>
				<p>{tagline}</p>
				<p>{desc}</p>
				<p>ABV: {abv}</p>
				<p>IBU: {ibu}</p>
				<p>Pairs well with: {foodPairing[0]}, {foodPairing[1]}, and {foodPairing[2]}</p>
			</li>
		);
	}
}

export default BeerDesc;
