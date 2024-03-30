import './App.css';
import Header from './components/Header/Header';
import LearnReact from './components/LearnReact/LearnReact';
import { learn, differences } from './data';
import Button from './components/Button/Button';
import { useState } from 'react';



export default function App() {
	const [contentType, setContentType ] = useState();
  
	function handleClick(type) {
		setContentType(type);
	}

	return (
		<div>
			<Header></Header>
			<main>
				<section>
					<h3>Что нужно знать перед тем как учить react JS:</h3>
					<ul>
						{learn.map((learn) => (<LearnReact key={learn.title} {...learn}></LearnReact>))}
					</ul>
				</section>
				<section>
					<h3>Что нам надо знать?</h3>
					<Button isActive={contentType === 'html'} onClick={() => handleClick('html')}>HTML</Button>
					<Button isActive={contentType === 'css'} onClick={() => handleClick('css')}>CSS</Button>
					<Button isActive={contentType === 'javascript'} onClick={() => handleClick('javascript')}>JavaScript</Button>
					{contentType ? <p>{differences[contentType]}</p> : <p>Click on the button</p> }
				</section>
			</main>
		</div>
	);
}

