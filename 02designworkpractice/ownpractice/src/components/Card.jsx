import React from 'react'

const Card = ({ plansData }) => {
  return (
    <div className="card-container">
      {plansData.map((plan) => (
        <div className="card" key={plan.id}>
          
          <img src={plan.image} alt={plan.title} className="card-img" />

          <h2>{plan.title}</h2>

          <p>{plan.description}</p>

          <button className="buy-btn">Buy Now</button>
        </div>
      ))}
    </div>
  )
}

export default Card