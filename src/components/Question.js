import React from 'react';

import Img from './Img';

export default class Question extends React.Component {

	renderOption() {
		const css = {
			text: {
				textAlign: 'center',
				padding: 16
			}
		}
		const options = this.props.data.options.map((val,key) => {
			// console.log(val,key)
			let option

			if (val.answer) {
				option = <div key={key} onClick={this.props.addPoints} style={css.text}>
					{val.text}
				</div>
			} else {
				option = <div key={key} onClick={this.props.noPoints} style={css.text}>
					{val.text}
				</div>
			}

			return option
		})

		return options
	}

	render() {

		const css = {
			questionText: {
				textAlign: 'center'
			}
		}

		return(
			<div>
				<Img src={this.props.data.question.image} alt={this.props.data.question.text} />
				{/*<img src={this.props.data.question.image} alt={this.props.data.question.text} />*/}
				<div style={css.questionText}>{this.props.data.question.text}</div>
				<hr/>
				<div>
					{this.renderOption()}
				</div>
			</div>
		);

	}

}

Question.propTypes = {
	data: React.PropTypes.object.isRequired,
	addPoints: React.PropTypes.func.isRequired,
}