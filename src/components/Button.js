import React, { useState } from 'react';

function Button() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <button className="button" onClick={handleSubmit}>
      <h4>BUTTON</h4>
    </button>
  );
}

export default Button;
