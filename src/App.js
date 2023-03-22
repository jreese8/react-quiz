import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What are the advantages of React.JS?',
			answerOptions: [
				{ answerText: 'Easy to learn, usage of TypeScript, Virtual DOM, and two-way data binding', isCorrect: false },
				{ answerText: 'Being maintained by Google, two-way data binding, and usage of TypeScript', isCorrect: false },
				{ answerText: 'SEO-friendly, Virtual DOM, reusable components, and one-way data flow', isCorrect: true },
				{ answerText: 'Being maintained by Amazon, Two-way data binding, and easy to learn', isCorrect: false },
			],
		},
		{
			questionText: 'What are the main features of React.JS you would like to list?',
			answerOptions: [
				{ answerText: 'JSX, Event Handling, Virtual DOM, Computed Properties, Template', isCorrect: false },
				{ answerText: 'JSX, Declarative UI, Virtual DOM, Component-based architecture, React Native', isCorrect: true },
				{ answerText: 'MVC Architecture, JSX, HTML, CSS, Template, Directives', isCorrect: false },
				{ answerText: 'MVC Architecture, Less Code Framework, Dependency Injection, Directives', isCorrect: false },
			],
		},
		{
			questionText: 'What are the major disadvantages and limitations of React.JS?',
			answerOptions: [
				{ answerText: 'JSX, Poor Documentation, View Part(UI)', isCorrect: true },
				{ answerText: 'Steep learning curve, Zero SEO options, Slow development', isCorrect: false },
				{ answerText: 'No learning curve, Fast development, Too Much Documentation ', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What are the differences between React.JS and other Java scripts?',
			answerOptions: [
				{ answerText: 'React.JS is backed by Google, has JSX, uses TypeScript', isCorrect: false },
				{ answerText: 'React.JS uses MVC framework, has the greatest amount of open-source libraries', isCorrect: false },
				{ answerText: 'React.JS uses TypeScript, has Built-in support for AJAX/HTTP/ Observables', isCorrect: false },
				{ answerText: 'React.JS is backed by Facebook, uses MobX, has JSX, uses Virtual DOM', isCorrect: true },
			],
		},
		{
			questionText: 'What are the major two types of components that can be declared in React, and when should you use one over the other?',
			answerOptions: [
				{ answerText: 'Functional Component and Class Component. You should choose Class Components when you need the data to be transferable from one component to the other and Functional Component for JavaScript functions.', isCorrect: true },
				{ answerText: 'Functional Components and High-Order Components. You choose HOC when you take a component as input and need it to return the component as output but with extended functionalities and Functional Component for JavaScript functions.', isCorrect: false },
				{ answerText: 'Functional Components and Smart Components. You choose Smart Components when you need a component that is able to manage its own state and Functional component for JavaScript functions.', isCorrect: false },
				{ answerText: 'Smart Components and Dumb Components. You choose Smart Components when you need a component that is able to manage its own state and Dumb component when there is no need for state managing and/or the component is stateless.', isCorrect: false },
			],
		},
		{
			questionText: 'What types of programming paradigms are in in React.JS?',
			answerOptions: [
				{ answerText: 'Declarative programming paradigms, such as Logic Programming Paradigm, Functional Programming and Database Processing Approach', isCorrect: false },
				{ answerText: 'Imperative programming paradigms, such as Procedural and Object-Oriented Programming; Parallel Processing Approach', isCorrect: false },
				{ answerText: 'Both Imperative and Declarative Programming Paradigms', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is the lifecycle of a React component and what are its stages?',
			answerOptions: [
				{ answerText: 'A React component’s lifecycle is all the time the component is used in the code. Its stages are: start, run, build, deploy', isCorrect: false },
				{ answerText: 'A React component’s lifecycle is all the stages it goes through while in usage. Its stages are: initialization, mounting, updating, unmounting', isCorrect: true },
				{ answerText: 'A React component’s lifecycle is all the stages it goes through while in usage. Its stages are: get, add, update, destroy', isCorrect: false },
				{ answerText: 'A React component’s lifecycle is all the time the component is used in the code. Its stages are: introduction, usage, debugging, deletion', isCorrect: false },
			],
		},
	];

	const [score, setScore] = useState(0); //State value

	const [showScore, setShowScore] = useState(false);

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='border border-info rounded bg-info p-5'>
			{/* HINT: replace "false" with logic to display the 
      		score when the user has answered all the questions */}
			{showScore ? (
				<div className='d-flex align-items-center'>
				You scored {score} out of {questions.length}
			</div>
			) : (
				<>
					<div style={{ width: "100%" }} className='position-relative'>
						
						<div className='mb-6'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>

						<div className='mb-4'>{questions[currentQuestion].questionText}</div> {/* Retrieving first question in the array */}

					</div>

					<div style={{ width: "100%" }} className='d-flex flex-column justify-content-between'>
						{questions[currentQuestion].answerOptions.map((answerOption) => ( /* answerOptions is an array that is mapped*/
						<button style={{ width: "100%" }} className="btn btn-secondary rounded d-flex p-3 my-2 justify-content-center align-items-center" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}