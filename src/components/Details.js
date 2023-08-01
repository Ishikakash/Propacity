import React from 'react'

const Details = ({resource}) => {
  return (
    <div><h2>Details</h2>
    <p>Name: {resource.name}</p>
    {/* Add other resource details here based on the category */}</div>
  )
}

export default Details