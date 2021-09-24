import React from 'react'
import './Information.css'

export default ({person}) => (
  <div className="container">
    <div className="info">
      <p>Profile info:</p>
      <p>Selected profile: {person.firstName + ' ' + person.lastName}</p>
      <p>Description: {person.description}</p>
      <p>Adress: {person.adress.streetAddress}</p>
      <p>City: {person.adress.city}</p>
      <p>State: {person.adress.state}</p>
      <p>Index: {person.adress.zip}</p>
    </div>
  </div>
)