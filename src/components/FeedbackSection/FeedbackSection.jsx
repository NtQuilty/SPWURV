import { useState } from 'react';
import Button from '../Button/Button';
import './FeedbackSection.css';



export default function FeedbackSection() {
	const [form, setForm] = useState({
		name: '',
		hasError: false,
		reason: 'help'
	});
	

	function handleNameChange(event) {
		setForm((prev) => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0
		}));
	}

	return (
		<section>
			<h3>Обраятная связь</h3>
			<form>
				<label htmlFor="name">Ваше имя</label>
				<input type="text" id='name' className='control' value={form.name} style={{border: !form.hasError ? null : '1px solid red'}} onChange={handleNameChange}/>

				<label htmlFor="reason">Причина обращения</label>
				<select id="reason" className='contol' value={form.reason} onChange={event => setForm(prev => ({...prev, reason:event.target.value}))}>
					<option value="error">Ошибка</option>
					<option value="help">Нужна помощь</option>
					<option value="suggest">Предложение</option>
				</select>
				<br></br>
				<Button disabled={form.hasError}>Отправить</Button>
			</form>
			
		</section>
	);
}