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

	componentWillReceiveProps(nextProps) {
		this.setState({
			loaded: false
		});

		const image = new Image()

		image.src = nextProps.src

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
				color: 'whitesmoke',
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