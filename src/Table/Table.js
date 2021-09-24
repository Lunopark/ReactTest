import React from 'react'
import './Table.css'

export default props => (
  <table className="table">
    <thead>
      <tr>
        <th onClick={props.sort.bind(null, 'id')}>
          id {props.sortField === 'id' ? <small>{props.sortDirection}</small> : null}
        </th>
        <th onClick={props.sort.bind(null, 'firstName')}>
          First name {props.sortField === 'firstName' ? <small>{props.sortDirection}</small> : null}
        </th>
        <th onClick={props.sort.bind(null, 'lastName')}>
          Last name {props.sortField === 'lastName' ? <small>{props.sortDirection}</small> : null}
        </th>
        <th onClick={props.sort.bind(null, 'email')}>
          Email {props.sortField === 'email' ? <small>{props.sortDirection}</small> : null}
        </th>
        <th onClick={props.sort.bind(null, 'phone')}>
          Phone {props.sortField === 'phone' ? <small>{props.sortDirection}</small> : null}
        </th>
        <th onClick={props.sort.bind(null, 'adress.state')}>
          State
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.adress.state}</td>
        </tr>
      ))}
    </tbody>
  </table>
)