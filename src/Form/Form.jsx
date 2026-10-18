import React, { useState } from 'react'
import './Form.css'
const Form = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username:'',
    })
    const formHandling = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const saveData=(e)=>{
        e.preventDefault();
        console.log(formData)
    }

    return (
        <>
            <center>
                <form onSubmit={saveData}>
                    <div className='LoginForm'>
                        <input
                            type='text'
                            placeholder='Enter your username'
                            name='username'
                            value={formData.username}
                            onChange={formHandling} />
                        <br />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            onChange={formHandling} />
                        <br />
                        <input
                            type='password'
                            placeholder='Enter your password'
                            name='password'
                            value={formData.password}
                            onChange={formHandling} />
                        <br />
                        <button type='submit'>Login</button>
                    </div>
                </form>
                <div>
                    <h1>Name:{formData.username}</h1>
                    <h1>Email:{formData.email}</h1>
                    <h1>Password:{formData.password}</h1>
                </div>
            </center>
        </>
    );
};
export default Form;