export default function Header() {
	const now = new Date();

	return (
		<header>
			<h3>Im teaching react</h3>

			<span>The time is now: {now.toLocaleString()} </span>
		</header>
	);
}