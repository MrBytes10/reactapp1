/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
//App.js 
import React, { useState } from 'react'; 
import './App.css'; 

function BmiCalculator() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = () => { 
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 

			let message = ''; 
			if (bmi < 18.5) { 
				message = 'You are Underweight'; 
			} else if (bmi >= 18.5 && bmi < 25) { 
				message = 'You are Normal weight'; 
			} else if (bmi >= 25 && bmi < 30) { 
				message = 'You are Overweight'; 
			} else { 
				message = 'You are Obese'; 
			} 
			setBmiMessage(message); 
		} else { 
			setBmiValue(''); 
			setBmiMessage(''); 
		} 
	}; 

	return ( 
		<div className="container"> 
			<h1>Your BMI Calculator</h1> 
			<div className="input-container"> 
				<label htmlFor="height">Enter Your Height (cm):</label> 
				<input 
					type="number"
					id="height"
					value={heightValue} 
					onChange={(e) => setHeightValue(e.target.value)} 
				/> 
			</div> 
			<div className="input-container"> 
				<label htmlFor="weight">Enter Your Weight (kg):</label> 
				<input 
					type="number"
					id="weight"
					value={weightValue} 
					onChange={(e) => setWeightValue(e.target.value)} 
				/> 
			</div> 
			<button className="calculate-btn" onClick={calculateBmi}> 
				Click to Calculate BMI 
			</button> 
			{bmiValue && bmiMessage && ( 
				<div className="result"> 
					<p> 
						Your BMI: <span className="bmi-value">{bmiValue}</span> 
					</p> 
					<p> 
						Result: <span className="bmi-message">{bmiMessage}</span> 
					</p>
          <div className='explanation'>
          <p>
          Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.
          <ul> The formula to calculate BMI is: 
            <li>BMI = Weight(kg)/(Height(m))^2 </li>
                The category of BMI is as follows:
            <li>Underweight: BMI less than 18.5 </li>
            <li>Normal Weight: BMI between 18.5 and 25 </li>
            <li>Overweight: BMI between 25 and 29.9 </li>
            <li>Obese: BMI greater than  30 </li> 
            </ul>
          </p>
          </div>
				</div> 
			)} 
		</div> 
	); 
} 

export default BmiCalculator;
