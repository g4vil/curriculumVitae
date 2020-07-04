import React from 'react'

const Certificate = props => (
  <div className="Certificate">
    <div className="Certificate-container">
        {props.data.map((cert, index) => (
          <div className="Certificate-item" key={`Cert-${index}`}>
            <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
            <p>{cert.description}</p>
          </div>
        ))}
    </div>
  </div>
)

export default Certificate