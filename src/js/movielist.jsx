import React, { Component } from 'react';

import MovieListing from './movielisting';

export default class MovieList extends Component {

	render(){

		let movies = this.props.movies.map((movie) => {
			if(movie.Poster == "N/A"){
				return ;
			}
			return (
				<MovieListing
					poster={movie.Poster}
					title={movie.Title}
					year={movie.Year}
					review={movie.Type}
					key={movie.imdbID} />
			)
		})

		return (
			<div className="results">
				<table>
					<thead>
						<tr>
							<th>Poster</th>
							<th>Movie</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{movies}
					</tbody>
				</table>
			</div>
		)
	}
}
