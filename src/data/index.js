export default {
	basic: {
		title: 'True Blue',
		questionStyle: {
			fontFamily: 'Bungee, cursive',
		},
		bgColor: '#fffad2',
	},

	splash: {
		image: 'http://assets.myntassets.com/v1471521147/radium/quiz/image1.png',
		text: 'How well do you know Sachin Tendulkar?',
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
				image: 'http://assets.myntassets.com/v1471521147/radium/quiz/image1.png',
				text: 'What is the total number of centuries Sachin scored in ODI and tests?'
			},
			options: [
				{
					answer: true,
					text: '100'
				},
				{
					answer: false,
					text: '110'
				},
				{
					answer: false,
					text: '99'

				}

			]
		},
		{
			question: {
				image: 'http://assets.myntassets.com/v1471521147/radium/quiz/image2.png',
				text: 'Pick Sachin\'s favourite colour from below'
			},
			options: [
				{
					answer: false,
					text: 'Black'
				},
				{
					answer: false,
					text: 'Maroon'
				},
				{
					answer: true,
					text: 'Blue'

				}

			]
		},
		{
			question: {
				image: 'http://assets.myntassets.com/v1471521147/radium/quiz/image3.png',
				text: 'Pick the right name of Sachin\'s autobiography'
			},
			options: [
				{
					answer: false,
					text: 'My Playing Style'
				},
				{
					answer: true,
					text: 'Playing It My Way'
				},
				{
					answer: false,
					text: 'The Way I Played'

				}

			]
		},
		{
			question: {
				image: 'http://assets.myntassets.com/v1471521149/radium/quiz/image_4.png',
				text: 'Sachin always wears his-'
			},
			options: [
				{
					answer: false,
					text: 'Right pad first'
				},
				{
					answer: true,
					text: 'Left pad first'
				},
				{
					answer: false,
					text: 'Never bothered to notice which one'

				}

			]
		},
		{
			question: {
				image: 'http://assets.myntassets.com/v1471521147/radium/quiz/image_5.png',
				text: 'Sachin holds the world record for the highest partnership in ODI matches with-'
			},
			options: [
				{
					answer: false,
					text: 'Sourav Ganguly'
				},
				{
					answer: false,
					text: 'Vinod Kambli'
				},
				{
					answer: true,
					text: 'Rahul Dravid'

				}

			]
		},

	],
	results: {
		link: 'http://www.myntra.com/true-blue',
		bgImage: 'http://assets.myntassets.com//v1471521147/radium/quiz/image_7.png',
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
				content: "Oh! Looks like facts and numbers are not your strong points. But hey, does that matter? We bet, no one cheered more than you when Sachin played for India. Get into that crazy mode once again. Because the little master brings you True Blue, a men's fashion line inspired by Indian culture and heritage that you and Sachin are equally part of."
			},
			{
				minPoints: 2,
				maxPoints: 3,
				title: 'Keep it up',
				content: "Well done! You got some of them right if not all. These weren't the easiest questions to start with. We know that the wrinkled photograph of Sachin that you held tightly in your hand when he used to play is priceless and no number can match that. So is True Blue, the unparalleled menswear that reflects Indian motifs and embroideries. Feel that pride once again, this time for his fashion line."
			},
			{
				minPoints: 4,
				maxPoints: 5,
				title: 'Mr. Know it all',
				content: "Congratulations! All those hours you skipped study to follow Sachin’s game closely have now come in handy! You nailed it like a pro. Now nail the global traditional look which is a representation of Sachin's personality. Cheer for True Blue, like you did when the true blue man lead your country from the front."
			},
		]
	}

}