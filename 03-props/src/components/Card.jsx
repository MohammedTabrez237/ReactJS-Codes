import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1665142726875-f931a29dcee3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964" alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card