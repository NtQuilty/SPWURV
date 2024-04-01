import { useState } from 'react';
import './App.css';
import DifferencesSection from './components/DifferencesSection/DifferencesSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import TabsSection from './components/TabsSection/TabsSection';
import TeachingSection from './components/TeachingSection/TeachingSection';
import EffectSection from './components/EffectSection/EffectSection';



export default function App() {
	const [tab, setTab] = useState('effects');



	return (
		<>
			<Header/>
			<main>
				<IntroSection/>
				<TabsSection active={tab} onChange={(current) => setTab(current)} />
				{tab === 'main' && <><TeachingSection/><DifferencesSection/></>}
				{tab === 'feedback' && <FeedbackSection/>}
				{tab === 'effects' && <EffectSection/>}

			</main>
		</>
	);
}

