import React from 'react';

import { assignIn } from 'lodash';

import Img from './Img';

export default class Splash extends React.Component {

	render() {

		const css = {
			table: {
				display: 'table',
				width: '100%',
				height: '100%',
			},
			splashImageWrapper: {
				display: 'table-cell',
				verticalAlign: 'middle',
				textAlign: 'center',	
			},
			text:{
				margin: 16,
			},
			splashImage : {
				display: 'block',
				width: '50%',
				margin: '16px auto',
			},
			start: {
				display: 'inline-block',
				marginTop: 32,
				padding: '4px 8px',
			}
		}

		assignIn(css.start, this.props.startStyle)
		assignIn(css.text, this.props.textStyle)



		return(
			<div style={css.table}>
				<div style={css.splashImageWrapper}>
					<Img initHeight={70} style={css.splashImage} src="http://mofidili.com/wp-content/uploads/2013/12/QUIZ-OF-THE-WEEK.png" alt="Quiz" />
					<div style={css.text}>{this.props.text}</div>
					<div onClick={this.props.nextQuestion} style={css.start}>{this.props.startText}</div>
				</div>
			</div>		
		);

	}

}

Splash.propTypes = {
	image: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	textStyle: React.PropTypes.object.isRequired,
	startText: React.PropTypes.string,
	startStyle: React.PropTypes.object.isRequired,
	nextQuestion: React.PropTypes.func.isRequired,
}

Splash.defaultProps = {
	startText: 'Start',
}