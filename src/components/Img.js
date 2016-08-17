import React from 'react';

export default class Img extends React.Component {

	constructor() {
		super()
		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		const image = new Image()

		image.src = this.props.src

		image.onload = () => {
			this.setState({
				loaded: true
			});
		}
	}

	render() {

		const css = {
			loading: {
				width: '100%',
				height: this.props.initHeight,
				backgroundColor: 'lightgray',
				textAlign: 'center',
			},
			table: {
				display: 'table',
				width: '100%',
				height: '100%',
			},
			tableCell: {
				display: 'table-cell',
				verticalAlign: 'middle',
			}
		}


		if (this.state.loaded) {
			return(
				<img style={this.props.style} src={this.props.src} alt={this.props.alt} />	
			);
		} else {
			return(
				<div style={css.loading}>
					<div style={css.table}>
						<div style={css.tableCell}>Image loading&hellip;</div>
					</div>
				</div>	
			);
		}

	}

}

Img.propTypes = {
	src: React.PropTypes.string.isRequired,
	alt: React.PropTypes.string.isRequired,
}

Img.defaultProps = {
	initHeight: window.innerWidth
}