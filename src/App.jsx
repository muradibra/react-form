import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import DataList from './DataList';
function App() {
  const [data,setData]=useState([])
  return (

    <div>
      <RegistrationForm data={data} setData={setData} />  
      <DataList data={data}/>
    </div>
  );
}



export default App;
