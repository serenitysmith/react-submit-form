import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true,
        employment: "",
        favColor: ""
    }
)
console.log(formData.favColor)

function handleChange(event) {
    console.log(event)
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}
// we alredy have the data we want to submit so we would call formData inside out submit action. we have to do a prevent default liek in vanilla js so page wont refrsh 
function handleSubmit(event) {
  event.preventDefault()
  /// below would be if we were submitting to an API but in this example we are doing a console log statement 
  // submitToApi(formData)
  console.log(formData)
}

return (
  // using react, we make a function for submit below 
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
        <textarea 
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
        />
        <input 
            type="checkbox" 
            id="isFriendly" 
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />
        
        <fieldset>
            <legend>Current employment status</legend>
            <input 
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />
            
            <input 
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />
            
            <input 
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
        </fieldset>
        <br />
        
        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select 
            id="favColor" 
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
        >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <input type="submit" />
    </form>
)
}

export default App;
