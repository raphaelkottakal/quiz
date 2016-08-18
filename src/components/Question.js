import React from 'react';

import { assignIn } from 'lodash';

import Img from './Img';

export default class Question extends React.Component {

	renderOption() {
		const css = {
			text: {
				textAlign: 'center',
				padding: 8,
				margin: 16,
				border: '1px solid #000'
			},
			span: {
				// padding: 8,
				// border: '1px solid #000'
			}
		}
		const options = this.props.data.options.map((val,key) => {
			// console.log(val,key)
			let option

			if (val.answer) {
				option = <div key={key} onClick={this.props.addPoints} style={css.text}>
					<span style={css.span}>{val.text}</span>
				</div>
			} else {
				option = <div key={key} onClick={this.props.noPoints} style={css.text}>
					<span style={css.span}>{val.text}</span>
				</div>
			}

			return option
		})

		return options
	}

	render() {

		const css = {
			questionText: {
				textAlign: 'center',
				margin: 16,
				marginTop: 0,
			}
		}

		assignIn(css.questionText, this.props.questionStyle)


		return(
			<div>
				<Img src={this.props.data.question.image} alt={this.props.data.question.text} />
				{/*<img src={this.props.data.question.image} alt={this.props.data.question.text} />*/}
				<div style={css.questionText}>{this.props.data.question.text}</div>
				<div>
					{this.renderOption()}
				</div>
			</div>
		);

	}

}

Question.propTypes = {
	questionStyle: React.PropTypes.object.isRequired,
	data: React.PropTypes.object.isRequired,
	addPoints: React.PropTypes.func.isRequired,
}