import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import data from '../data';

import SplashScreen from './Splash';
import Question from './Question';

export default class Quiz extends React.Component {
	constructor() {
		super()
		this.state = {
			imagesLoaded: false,
			points: 0,
			currentQuestion: 0,
		}
	}

	setNextQuestion() {
		// console.log(this.state.currentQuestion)
		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		});
	}

	addPoints() {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
			points: this.state.points + 1
		});
	}

	noPoints() {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		});
	}

	renderView() {
		// console.log(data.qNa.length)
		if (this.state.currentQuestion === 0) {
			return (
				<SplashScreen
					image={data.splash.image}
					text={data.splash.text}
					startText={data.splash.startText}
					startColor={data.splash.startColor}
					startTextColor={data.splash.startTextColor}
					nextQuestion={this.setNextQuestion.bind(this)}
				/>)
		} else if (this.state.currentQuestion <= data.qNa.length) {
			// console.log(this.state.currentQuestion)
			// console.log(this.state.points)
			return (
					<Question
						data={data.qNa[this.state.currentQuestion - 1]}
						addPoints={this.addPoints.bind(this)}
						noPoints={this.noPoints.bind(this)}
					/>
				)
			return 'Question ' + this.state.currentQuestion
		} else {
			return 'Your score - ' + this.state.points
		}
	}

	render() {

		const css = {
			quizView : {
				backgroundColor: (data.basic.bgColor) ? data.basic.bgColor : '#fff',
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				overflowY: 'auto',
			}
		}

		return(
			<div style={css.quizView}>
				{this.renderView()}
			</div>			
		);

	}

}