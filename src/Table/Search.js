import Ract from 'react'

const search = () => {
  return (
    <div className="container">
      <ul className="header">
        <li className="header-item">
          <input type="text" placeholder="search by first name" />
        </li>
        <li className="header-item">
          <button className="btn">button</button>
        </li>
      </ul>
    </div>
  )
}

export default search