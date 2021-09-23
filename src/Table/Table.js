import React from 'react'
import './Table.css'

export default props => (
  <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
)