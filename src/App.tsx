import React, { useState } from 'react';
import './App.css';

interface IFormProps {
	name: string;
	email: string;
	message: string;
}

const getFormValues = (): IFormProps => {
	const storedValues = localStorage.getItem('form');
	if (!storedValues) {
		return {
			name: '',
			email: '',
			message: '',
		};
	}
	return JSON.parse(storedValues);
};

function App() {
	const [values, setValues] = useState<IFormProps>(getFormValues);

	React.useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert('There is no backend to this form, so this is just a demo.');
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h2>Caching in react</h2>
			</header>
			<div className='myForm'>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>
						Name
						<input
							type='text'
							placeholder='eg. John Domeh'
							name='name'
							value={values.name}
							onChange={handleChange}
						/>
					</label>

					<label htmlFor='email'>
						Email
						<input
							type='email'
							name='email'
							id=''
							placeholder='johndoe@gmail.com'
							value={values.email}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor='message'>
						Message
						<textarea
							name='message'
							id=''
							value={values.message}
							cols={0}
							rows={10}
							onChange={handleChange}
						></textarea>
					</label>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default App;
