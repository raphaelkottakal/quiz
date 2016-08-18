import React from 'react';

import 'normalize.css/normalize.css';
import '../css/main.css';

import Ga from '../functions/Ga';

import _ from 'lodash';

import data from '../data';

import SplashScreen from './Splash';
import Question from './Question';
import Result from './Result';

export default class Quiz extends React.Component {
	constructor() {
		super()
		this.state = {
			points: 0,
			currentQuestion: 1,
		}
	}

	componentDidMount() {
		document.title = data.basic.title
	}

	componentDidUpdate() {
		// console.log(this.refs.container.scrollTop)
		this.refs.container.scrollTop = 0
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

	restartQuiz() {
		this.setState({
			currentQuestion: 1,
			points: 0,
		});
	}

	renderView() {
		// console.log(data.qNa.length)
		if (this.state.currentQuestion === 0) {
			return (
				<SplashScreen
					image={data.splash.image}
					text={data.splash.text}
					textStyle={data.splash.textStyle}
					startText={data.splash.startText}
					startStyle={data.splash.startStyle}
					nextQuestion={this.setNextQuestion.bind(this)}
				/>)
		} else if (this.state.currentQuestion <= data.qNa.length) {
			// console.log(this.state.currentQuestion)
			// console.log(this.state.points)
			return (
					<Question
						data={data.qNa[this.state.currentQuestion - 1]}
						questionStyle={data.basic.questionStyle}
						addPoints={this.addPoints.bind(this)}
						noPoints={this.noPoints.bind(this)}
					/>
				)
		} else {

			const finalResult = _.find(data.results.types, (o)=>{ return o.minPoints <= this.state.points && o.maxPoints >= this.state.points})

			Ga({action: 'points', label: '' + this.state.points})
			// console.log(finalResult);

			return (
				<Result
					titleStyle={data.results.titleStyle}
					points={this.state.points}
					total={data.qNa.length}
					result={finalResult}
					bgImage={data.results.bgImage}
					pointStyle={data.results.pointStyle}
					shop={data.results.link}
					restartQuiz={this.restartQuiz.bind(this)}
				/>
			)
			return 'Your score - ' + this.state.points
		}
	}

	render() {

		const css = {
			quizView : {
				// backgroundColor: data.basic.bgColor,
				position: 'absolute',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				overflowY: 'auto',
			}
		}

		return(
			<div ref="container" style={css.quizView}>
				{this.renderView()}
			</div>			
		);

	}

}