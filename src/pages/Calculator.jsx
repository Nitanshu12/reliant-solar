import React from 'react'
import './Calculator.css'
import Seo from '../components/Seo';

function Calculator() {
  return (
    <>
      <Seo
        title="Savings Calculator | Reliant Renewables"
        description="Estimate how much you can save with Reliant's zero-investment solar plans using our real-time calculator."
        keywords="Solar Savings, Solar ROI, Zero Capex Savings, Calculator"
        canonical="https://reliantrenewables.in/calculator"
      />
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="coming-soon-text">Coming Soon</div>
          <p className="description">We're working on something amazing!</p>
        </div>
      </div>
    </>
  )
}

export default Calculator