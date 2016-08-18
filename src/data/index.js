export default {
	basic: {
		questionStyle: {
			fontFamily: 'Bungee, cursive',
		},
		bgColor: '#fffad2',
	},

	splash: {
		image: 'http://mofidili.com/wp-content/uploads/2013/12/QUIZ-OF-THE-WEEK.png',
		text: 'Simple quiz title',
		textStyle: {
			fontFamily: 'Bungee, cursive',
		},
		startText: 'Find out',
		startStyle: {
			color: 'white',
			backgroundColor: 'slateblue'
		}
	},

	qNa: [

		{
			question: {
				image: 'http://wiki.dpconline.org/images/a/a4/Question_why.png',
				text: 'Question 1'
			},
			options: [
				{
					answer: true,
					text: 'Option one'
				},
				{
					answer: false,
					text: 'Option two'
				},
				{
					answer: false,
					text: 'Option three'

				}

			]
		},
		{
			question: {
				image: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
				text: 'Question 2'
			},
			options: [
				{
					answer: true,
					text: 'Option one'
				},
				{
					answer: false,
					text: 'Option two'
				},
				{
					answer: false,
					text: 'Option three'

				}

			]
		},
		{
			question: {
				image: 'http://www.newsread.in/wp-content/uploads/2016/06/Images-3.jpg',
				text: 'Question 3'
			},
			options: [
				{
					answer: true,
					text: 'Option one'
				},
				{
					answer: false,
					text: 'Option two'
				},
				{
					answer: false,
					text: 'Option three'

				}

			]
		},

	],
	results: {
		link: 'http://www.myntra.com/shoes',
		bgImage: 'http://www.amerikicksouthphilly.com/wp-content/uploads/2014/09/orange-paint-splash.png',
		pointStyle: {
			fontFamily: 'Bungee, cursive',
			fontSize: 64,
			color: 'white'
		},
		titleStyle: {
			fontFamily: 'Bungee, cursive',
		},
		types:[
			{
				minPoints: 0,
				maxPoints: 1,
				title: 'Never lose hope',
				content: "Cras gravida neque ut odio egestas ullamcorper. Pellentesque ut iaculis massa. Sed vulputate placerat dui consequat auctor. Proin lacinia tortor efficitur dolor dignissim dignissim. Vivamus orci elit, euismod et pharetra quis, ultricies et dui. Vivamus finibus justo vitae efficitur hendrerit."
			},
			{
				minPoints: 2,
				maxPoints: 2,
				title: 'Keep it up',
				content: "Cras gravida neque ut odio egestas ullamcorper. Pellentesque ut iaculis massa. Sed vulputate placerat dui consequat auctor. Proin lacinia tortor efficitur dolor dignissim dignissim. Vivamus orci elit, euismod et pharetra quis, ultricies et dui. Vivamus finibus justo vitae efficitur hendrerit."
			},
			{
				minPoints: 3,
				maxPoints: 5,
				title: 'Mr. Know it all',
				content: "Cras gravida neque ut odio egestas ullamcorper. Pellentesque ut iaculis massa. Sed vulputate placerat dui consequat auctor. Proin lacinia tortor efficitur dolor dignissim dignissim. Vivamus orci elit, euismod et pharetra quis, ultricies et dui. Vivamus finibus justo vitae efficitur hendrerit."
			},
		]
	}

}