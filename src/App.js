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
		{
			questionText: 'Name 5 ways to implement Style React components into your work.',
			answerOptions: [
				{ answerText: 'Inline CSS, sass & SCSS, styled components, CSS modules, global styles to single file components', isCorrect: false },
				{ answerText: 'Inline CSS, CSS in JS, styled components, CSS modules, stylable', isCorrect: true }, // Also, normal CSS, sass & SCSS , less
				{ answerText: 'Scoped styles, inline CSS, bulma, less, global styles to single file components', isCorrect: false },
				{ answerText: 'Scoped styles, less, normal CSS, stylable, global styles to single file components', isCorrect: false },
			],
		},
		{
			questionText: 'What is Flux and how does it correlate with React.JS?',
			answerOptions: [
				{ answerText: 'Flux is the name of the framework Amazon uses internally when working with React.', isCorrect: false },
				{ answerText: 'Flux is the name of the framework React uses to interact with non-iOS apps.', isCorrect: false }, 
				{ answerText: 'Flux is a tool that helps React implement Unidirectional Data Flow.', isCorrect: false },
				{ answerText: 'Flux is an architecture that Facebook uses internally when working with React.', isCorrect: true },
			],
		},
		{
			questionText: 'Can you describe how a chain of events is handled in React.JS?',
			answerOptions: [
				{ answerText: 'A standard chain of events in React.JS is handled with the help of event binding, during which information flows from elements in a component template to the corresponding component’s class', isCorrect: false },
				{ answerText: 'Using Virtual DOM, React.JS fixes each event in the chain as a component, thus simplifying the process of handling events and making it quicker', isCorrect: false }, 
				{ answerText: 'A chain of events in React.JS is similar to one in DOM-elements, but the events in React.JS are named in the camelCase style and you pass the function as an event handler instead of a string with JSX', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What are some of the ways to optimize an application on React.JS?',
			answerOptions: [
				{ answerText: 'All of these answers are correct', isCorrect: true },
				{ answerText: 'Avoiding Inline Function Definition in the Render Function, Throttling and Debouncing Event Action in JavaScript', isCorrect: false }, 
				{ answerText: 'Function/Stateless Components and React.PureComponent, Multiple Chunk Files, using Production Mode Flag in Webpack', isCorrect: false },
				{ answerText: 'Using immutable data structures, dependency optimization, spreading props on DOM elements, using React Fragments to avoid additional HTML Element Wrappers', isCorrect: false },
			],
		},
		{
			questionText: 'What is “a hook” in React.JS and what tasks does it solve?',
			answerOptions: [
				{ answerText: 'A hook in React.JS is a function that allows you to interconnect two or more stylings to one element of the code.', isCorrect: false },
				{ answerText: 'A hook in React.JS is a function that allows you to use state and other lifecycle features from function components without writing classes.', isCorrect: true }, 
				{ answerText: 'A hook in React.JS is a function that allows you to use state and other lifecycle features from function components by also writing classes', isCorrect: false },
				{ answerText: 'A hook in React.JS is a function that allows you to interconnect two or more components to one element of the code.', isCorrect: false },
			],
		},
		{
			questionText: 'What purpose do stateless components serve in React.JS?',
			answerOptions: [
				{ answerText: 'A stateless component’s main goal is to take props as an argument and return a react element', isCorrect: true },
				{ answerText: 'A stateless component’s main goal is to take a component and return a new component', isCorrect: false }, 
				{ answerText: 'A stateless component’s main goal is to take props as an argument and return an HTML element', isCorrect: false },
				{ answerText: 'A stateless component’s main goal is to present something to the DOM without keeping tabs on it or checking to control the process.', isCorrect: false },
			],
		},
		{
			questionText: 'What is JSX?',
			answerOptions: [
				{ answerText: 'JSX is an architecture that aids React to implement Unidirectional Data Flow.', isCorrect: false },
				{ answerText: 'JSX is a framework that help React to implement stylings.', isCorrect: false }, 
				{ answerText: 'JSX is an inner React tool that unmounts the component during its lifecycle.', isCorrect: false },
				{ answerText: 'JSX is React.JS’ own markup syntax that eases the process of writing the React.JS’ building blocks.', isCorrect: true },
			],
		},

		{
			questionText: 'What advantages does Virtual DOM provide when you work with React.JS?',
			answerOptions: [
				{ answerText: 'The advantages of Virtual DOM: easy to integrate, simple API that makes it powerful for targeting template engines, suitable for mobile device-based applications.', isCorrect: false }, //Incremental DOM
				{ answerText: 'The advantages of Virtual DOM: allows building applications without thinking about state transitions; powerful due to simple API; simple and helps to boost performance.', isCorrect: false }, 
				{ answerText: 'The advantages of Virtual DOM: efficient “diffing” algorithm, simple and help to boost performance; it can be used without React; lightweight; allows building applications without thinking about state transitions.', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is the significance of keys in React?',
			answerOptions: [
				{ answerText: 'Keys are significant in React as they help it identify which items have changed and what the changes are. This way they help the elements to “have a stable identity”', isCorrect: true }, //Incremental DOM
				{ answerText: 'Keys in React are useful navigation-wise', isCorrect: false }, 
				{ answerText: 'Keys are useful for styling multiple elements in React', isCorrect: false },
				{ answerText: 'Keys are significant in React as they allow the usage of React features without writing classes', isCorrect: false },
			],
		},
		{
			questionText: 'What is prop drilling in React.JS and should you avoid it?',
			answerOptions: [
				{ answerText: 'Prop drilling in React is a process of props passing from one part of a tree to another by going through other parts that do not need the data. It should not be avoided, as it does not affect the outcome and work of the app.', isCorrect: false }, //Incremental DOM
				{ answerText: 'Prop drilling in React is the process of props passing from one part of a tree to another by going through other parts that do not need the data. Such a process should be avoided and can be avoided by using the Context API.', isCorrect: true }, 
				{ answerText: 'Prop drilling in React is a normal process of props passing from one part of a tree to another to redistribute the data to other props. It should not be avoided.', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'How can you be certain that the data is not re-fetched when the component is remounted?',
			answerOptions: [
				{ answerText: 'It is not possible', isCorrect: false },
				{ answerText: 'Only not coupling the UI and other layers of the app', isCorrect: false }, 
				{ answerText: 'Only by using APIs that are external to React', isCorrect: false },
				{ answerText: 'To not couple the UI and other layers of the app. It is also possible to use external APIs to solve this problem.', isCorrect: true},
			],
		},
		{
			questionText: 'How would you debug a React.JS code?',
			answerOptions: [
				{ answerText: 'The most efficient way is to operate on the application manually and search for the bugs to debug.', isCorrect: false }, //Incremental DOM
				{ answerText: 'Console statements, browser inspector, react dev tools', isCorrect: true }, 
				{ answerText: 'All of the above', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false},
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