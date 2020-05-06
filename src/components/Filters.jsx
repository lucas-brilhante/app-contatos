import React, { Component } from 'react';
import { sort, search } from '../utils';

class Filters extends Component {

	constructor(props) {
		super(props);
		this.search_tags = [
			'Nome',
			'País',
			'Empresa',
			'Departamento',
			'Data de admissão'
		];
	}

	handleClick = (index) => () => {
		this.props.setState({ tag: index, searched_contacts: sort(this.props.searched_contacts, index) })
	}

	handleChange = (e) => {
		this.props.setState({ searched_contacts: search(this.props.contacts, e.target.value) })
	}

	render() {
		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input"
							placeholder="Pesquisar"
							onChange={this.handleChange} />

						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					{this.search_tags.map((tag, index) =>
						<button
							key={tag}
							className={
								(this.props.tag === index)
									? "filters__item is-selected"
									: "filters__item"}
							onClick={this.handleClick(index)}>
							{tag}
						</button>
					)}
				</section>
			</div>
		);
	}
}

export default Filters;
