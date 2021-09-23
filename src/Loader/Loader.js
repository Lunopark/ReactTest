import React from 'react'
import './Loader.css'

const loader = () => (
<div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
  <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>)

export default loader