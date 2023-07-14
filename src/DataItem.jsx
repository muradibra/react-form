import React from 'react'

function DataItem(props) {
    console.log(props);
  return (
    <li className='border border-1 border-black flex flex-wrap flex-col w-[25%]'>
        <p>Name: {props.name}</p>
        <p>Password: {props.password}</p>
        <p>Email: {props.email}</p>
    </li>
  )
}

export default DataItem