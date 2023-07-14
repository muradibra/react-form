import React from 'react'
import DataItem from './DataItem'

function DataList({data}) {
  return (
    <ul>
        {
            data.map((item,index)=><DataItem key={index} {...item}/>)
        }
    </ul>
  )
}

export default DataList