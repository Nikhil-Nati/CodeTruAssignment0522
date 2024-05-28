import React from 'react'

function ProgressBar1({ steps, currentStep }) {
    return (
        <div className="progress-container">
          {steps.map((step, index) => (
            <div key={index} className="step-container">
              <div
                className={`step ${index <= currentStep ? 'active' : ''}`}
              >
                {index + 1}
              </div>
              <div className="label">{step}</div>
            </div>
          ))}
          
        </div>
  )
}

export default ProgressBar1