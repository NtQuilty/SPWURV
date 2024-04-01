import { useState } from 'react';
import { differences } from '../../data';
import Button from '../Button/Button';
import './DifferencesSection.css';



export default function DifferencesSection() {
	const [contentType, setContentType ] = useState();
  
	function handleClick(type) {
		setContentType(type);
	}
    
	return (
		<section>
			<h3>Что нам надо знать?</h3>
			<Button isActive={contentType === 'html'} onClick={() => setContentType('html')}>HTML</Button>
			<Button isActive={contentType === 'css'} onClick={() => handleClick('css')}>CSS</Button>
			<Button isActive={contentType === 'javascript'} onClick={() => handleClick('javascript')}>JavaScript</Button>
			{contentType ? <p>{differences[contentType]}</p> : <p>Click on the button</p> }
		</section>
	);
}