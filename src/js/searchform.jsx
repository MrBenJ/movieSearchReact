import React from 'react';
import { sanitize } from './utils/utils';
export default class SearchForm extends React.Component {

	constructor(props){
		super(props);

		//otherwise the this value will be the form, not our class
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleGetMovies = this.handleGetMovies.bind(this);
	}

	componentWillMount() {
		this.setState({
			term: ''
		});
	}
	handleTermChange(e){
		let value = sanitize(e.target.value);
		this.setState({term: value});
	}

	handleGetMovies(e){
		e.preventDefault();

		let term = sanitize(this.state.term).trim();
		if(!term) {
			return;
		}

		this.props.onTermSubmit({text:term});

		this.setState({term: ''});

	}

	render(){
		const GIF_SRC = `http://create.mheducation.com/createonline/image/com/mhhe/createonline/loading.gif`;
		let button = this.props.loading ?
			<img className="loader" src={GIF_SRC}/> :
			<input type="submit" value="Search" />;
		return (
			<div className="searchform" onSubmit={this.handleGetMovies}>
				<form>
					<input type="text" placeholder="Search for a movie" autoFocus onChange={this.handleTermChange}/>
					{button}
				</form>
			</div>
		)
	}
}
