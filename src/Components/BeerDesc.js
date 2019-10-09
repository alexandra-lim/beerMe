import React, { Component } from "../../node_modules/react";

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
				<figure>
					<img src={image} alt={name} />
				</figure>
				<div className='content'>
					<div className='contentText'>
						<h3>{name}</h3>
						<p className='tagline'>{tagline}</p>
						<p className='abv'>
							<span class='bold'>ABV:</span> {abv}
						</p>
						<p className='ibu'>
							<span className='bold'>IBU:</span> {ibu}
						</p>
						<p className='description'>{desc}</p>
						<p className='foodPairing'>
							<span className='bold'>Pairs well with:</span>{" "}
							{foodPairing[0]}, {foodPairing[1]}, and{" "}
							{foodPairing[2]}
						</p>
					</div>
				</div>
			</li>
		);
	}
}

export default BeerDesc;
