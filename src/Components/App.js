import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header";
import BeerList from "./BeerList";
import RandomBeer from "./RandomBeer";
import Footer from "./Footer";
import "../App.css";

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
			return <RandomBeer randomBeer={randomBeer} />;
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
					{/* on click will toggle list to determine which beer data to show */}
					<button onClick={() => this.toggleList("randomBeer")}>Randomize!</button>
					<button onClick={() => this.toggleList("beerList")}>Beer List</button>

					{this.beerDataToRender()}
					
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
