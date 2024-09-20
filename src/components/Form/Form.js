import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='login-container'>
            <form>
                <h1>Patient Details</h1>
                <label htmlFor='name'>Patient Name:</label>
                <input type='text' id='name' name='name' placeholder='John Smith' required />

                <label htmlFor='age'>Age:</label>
                <input type='number' id='age' name='age' placeholder='25' required />

                <label htmlFor='gender'>Gender:</label>
                <select type='text' id='gender' name='gender' placeholder='John Smith' required>
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select>

                <label htmlFor='address'>Address:</label>
                <input type='text' id='address' name='address' placeholder='Washington DC' required />

                <label htmlFor='bloodtype'>Blood type:</label>
                <input type='text' id='bloodtype' name='bloodtype' placeholder='B positive' required />

                <label htmlFor='allergies'>Allergies:</label>
                <input type='text' id='allergies' name='allergies' placeholder='Pollen allergy' required />

                <label htmlFor='diagnosis'>Diagnosis:</label>
                <input type='text' id='diagnosis' name='diagnosis' placeholder='Osteroporosis' required />

                <label htmlFor='treatment'>Treatment:</label>
                <input type='text' id='treatment' name='treatment' placeholder='Surgery' required />

                <input type='submit' value="Submit" />
            </form>

        </div>
    )
}

export default Form
