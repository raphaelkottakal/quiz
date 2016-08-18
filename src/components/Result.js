import React from 'react';

import { assignIn } from 'lodash';

import Img from './Img';

import Ga from '../functions/Ga';

export default class Result extends React.Component {

	handelShopLink(e) {
		Ga({action: 'shop', label: e.target.href})

	}

	handelPlayAgain() {
		Ga({action: 'replay', label: '' + this.props.points})
		this.props.restartQuiz()
	}

	render() {

		const css = {
			resultWrapper: {
				position: 'relative'
			},
			questionText: {
				textAlign: 'center',
				margin: 16
			},
			points: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				fontSize: 32,
			},
			table: {
				display: 'table',
				width: '100%',
				height: '100%',
			},
			tableCell: {
				display: 'table-cell',
				verticalAlign: 'middle',
				textAlign: 'center',
			},
			title: {
				margin: 16,
				fontSize: 20,
				textAlign: 'center'
			},
			content: {
				margin: 16,
				textAlign: 'center',
				lineHeight: '1.4em'
			},
			playAgain: {
				backgroundColor: 'tomato',
				color: 'white',
				textAlign: 'center',
				padding: 8,
			},
			shopWrapper: {
				textAlign: 'center',
				marginTop: 16,
				marginBottom: 32,
			},
			shop: {
				border: '1px solid #000',
				textDecoration: 'none',
				color: '#000',
				padding: '4px 18px',
				textTransform: 'uppercase'
			}
		}

		assignIn(css.points, this.props.pointStyle)
		assignIn(css.title, this.props.titleStyle)


		return(
			<div>
				<div style={css.resultWrapper}>
					<Img src={this.props.bgImage} alt="result background" />
					<div style={css.points}>
						<div style={css.table}>
							<div style={css.tableCell}>{this.props.points}<span style={{fontFamily: 'Roboto'}}>/</span>{this.props.total}</div>
						</div>
					</div>
				</div>
				<div>
					<div style={css.title}>{this.props.result.title}</div>
					<div style={css.content}>{this.props.result.content}</div>
				</div>
				<div style={css.shopWrapper}>
					<a onClick={this.handelShopLink} style={css.shop} href={this.props.shop} target="_blank">Shop Collection</a>
				</div>
				<div onClick={this.handelPlayAgain.bind(this)} style={css.playAgain}>Play again</div>
			</div>
		);

	}

}

Result.propTypes = {
	titleStyle: React.PropTypes.object.isRequired,
	bgImage: React.PropTypes.string.isRequired,
	points: React.PropTypes.number.isRequired,
	total: React.PropTypes.number.isRequired,
	pointStyle: React.PropTypes.object.isRequired,
	result: React.PropTypes.object.isRequired,
	// data: React.PropTypes.object.isRequired,
	restartQuiz: React.PropTypes.func.isRequired,
}