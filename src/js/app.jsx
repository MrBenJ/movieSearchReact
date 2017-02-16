import React from 'react';

import SearchForm from './searchform';
import MovieList from './movielist';

import { getJSON } from './utils/utils';

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.handleTermSubmit = this.handleTermSubmit.bind(this)
	}

	componentWillMount() {
		this.setState({
			movies: [],
			loading: false
		});
	}

	handleTermSubmit(term){
		term = term.text;
		console.log(term);
		let url=`http://www.omdbapi.com/?s=${term}&r=json`;
		this.setState({loading: true});

		getJSON(url).then(
			(results) => {
				this.setState({loading: false});
				if(results.Response === 'False') {
					// No movies by this name were found!

				}
				console.log(results)
	     		let movies = results.Search
	     		this.setState({movies:movies});
			}
		).catch(
			(error) => {
				this.setState({loading: false});
				console.error(error);
			}
		);
	}

	render(){
		return (
			<div>
				<h1>Search for Movies</h1>
				<SearchForm
					onTermSubmit={this.handleTermSubmit}
					loading={this.state.loading}/>
				<MovieList movies={this.state.movies} />
			</div>
		)
	}
}
