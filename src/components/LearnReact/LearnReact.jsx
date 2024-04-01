export default function LearnReact({ title, description}) {
	return (
		<li>
			<p>
				<strong>{title}</strong> 
				<br />
				{description}
			</p>
		</li>
	);
}