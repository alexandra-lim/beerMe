import React, { Component } from "../../node_modules/react";
import Axios from "../../node_modules/axios";
import Header from "./Header";
import BeerList from "./BeerList";
import RandomBeer from "./RandomBeer";
import Footer from "./Footer";
import "../styles/App.scss";

class App extends Component {
	constructor() {
		super();
		this.state = {
			beerList: [],
			randomBeer: [],
			listToShow: "beerList"
		};
	}

	// two api calls are made once page is loaded - one to beer list of 25, the other to randomized beer. State is also updated to receive data
	componentDidMount() {
		const beers = Axios.get("https://api.punkapi.com/v2/beers/");
		const randomBeer = Axios.get("https://api.punkapi.com/v2/beers/random");

		Promise.all([beers, randomBeer])
			.then(res => {
				this.setState({
					beerList: res[0].data,
					randomBeer: res[1].data
				});
			})
			.catch(error => {
				console.log(error);
				alert("Try again later!");
			});
	}

	// to generate random beer by calling random api when user clicks on randomize. randomized loop when called in beerDataToRender();
	// randomize = () => {
	//   Axios.get("https://api.punkapi.com/v2/beers/random")
	//   .then(res => {
	//     this.setState({
	//       randomBeer: res.data,
	//     })
	//   });
	// }

	// to show the right content based on button clicked
	beerDataToRender = () => {
		const { beerList, randomBeer, listToShow } = this.state;
		if (listToShow === "beerList") {
			return <BeerList beerList={beerList} />;
		} else if (listToShow === "randomBeer") {
			// this.randomize();
			return (
				<RandomBeer
					randomBeer={randomBeer}
					toggleList={this.toggleList}
				/>
			);
		}
	};

	// to change the state of listToShow
	toggleList = listType => {
		this.setState({
			listToShow: listType
		});
	};

	render() {
		return (
			<div className='App'>
				<Header />

				<main>
					<div className='wrapper'>
						<h2>
							A selection of BrewDog's DIY homebrew recipes. Click
							"Randomize!" for a random recipe!
						</h2>

						{/* on click will toggle list to determine which beer data to show */}
						<section className="buttons">
							<button onClick={() => this.toggleList("randomBeer")}>
								Randomize!
							</button>
							<button onClick={() => this.toggleList("beerList")}>
								Beer List
							</button>
						</section>

						{/* render beer data based on list toggled */}
						{this.beerDataToRender()}
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
