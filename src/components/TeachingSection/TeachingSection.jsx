import { learn } from '../../data';
import LearnReact from '../LearnReact/LearnReact';
import './TeachingSection.css';



export default function TeachingSection() {
	return (
		<section>
			<h3>Что нужно знать перед тем как учить react JS:</h3>
			<ul>
				{learn.map((learn) => (<LearnReact key={learn.title} {...learn}></LearnReact>))}
			</ul>
		</section>
	);
}