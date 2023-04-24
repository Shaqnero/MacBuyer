import React from 'react'
import { Link } from 'react-router-dom'

const BuyButton = (props) => {
  return (
    <Link 
    style={{
        backgroundColor: `${props.backgroundColor}`,
        padding: '4px 12px',
        width: '120px',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        color: `${props.color}`
    }}
    to={``}>{props.name}</Link>
  )
}

export default BuyButton