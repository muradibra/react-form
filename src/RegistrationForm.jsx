import { useState } from 'react';

function RegistrationForm({ data, setData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (name && email && password) {
      setData([...data, formData])
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } else alert("Xanaları doldurun");


    console.log(data);

  };

  return (
    <form className='flex flex-col m-4'>
      <div className='my-2'>
        <label className='pr-3'>Name:</label>
        <input className='border-2 border-black' type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div className='my-2'>
        <label className='pr-3'>Email:</label>
        <input className='border-2 border-black' type="email" name="email" value={email} onChange={handleChange} />
      </div>
      <div className='my-2'>
        <label className='pr-3'>Password:</label>
        <input className='border-2 border-black' type="password" name="password" value={password} onChange={handleChange} />
      </div>
      <button type="submit" className='w-20 border border-1 border-black' onClick={handleSubmit}>Register</button>

    </form>
  );
}

export default RegistrationForm;
