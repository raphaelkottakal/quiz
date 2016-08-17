import React from 'react';

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
			splashImage : {
				display: 'block',
				width: '50%',
				margin: '16px auto',
			},
			start: {
				display: 'inline-block',
				backgroundColor: this.props.startColor,
				color: this.props.startTextColor,
				marginTop: 32,
				padding: '4px 8px',
			}
		}



		return(
			<div style={css.table}>
				<div style={css.splashImageWrapper}>
					<Img initHeight={70} style={css.splashImage} src="http://mofidili.com/wp-content/uploads/2013/12/QUIZ-OF-THE-WEEK.png" alt="Quiz" />
					<div>This is a simple quiz</div>
					<div onClick={this.props.nextQuestion} style={css.start}>{this.props.startText}</div>
				</div>
			</div>		
		);

	}

}

Splash.propTypes = {
	image: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	startText: React.PropTypes.string,
	startColor: React.PropTypes.string.isRequired,
	startTextColor: React.PropTypes.string.isRequired,
	nextQuestion: React.PropTypes.func.isRequired,
}

Splash.defaultProps = {
	startText: 'Start',
}