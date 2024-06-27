import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // You can add more logic here like form validation, API calls, etc.
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h1>ADITYA WEBSITE</h1>
        
        <input 
          className='input'
          type='text'
          name='firstName'
          placeholder='FIRST NAME'
          value={formData.firstName}
          onChange={handleChange}
          autoComplete='given-name'
        />
        
        <input 
          className='input'
          type='text'
          name='lastName'
          placeholder='LAST NAME'
          value={formData.lastName}
          onChange={handleChange}
          autoComplete='family-name'
        />
        
        <input 
          className='input'
          type='email'
          name='email'
          placeholder='EMAIL'
          value={formData.email}
          onChange={handleChange}
          autoComplete='email'
        />
        
        <input 
          className='input'
          type='password'
          name='password'
          placeholder='PASSWORD'
          value={formData.password}
          onChange={handleChange}
          autoComplete='new-password'
        />

    
      </form>
      <button 
        type='submit'
         className='button'
         >Submit</button>
    </div>
  );
}

export default Form;
