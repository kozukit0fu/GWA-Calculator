import React from 'react'

const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <h1 className="hero-title">
            Calculate Your GWA Instantly
          </h1>
          <p className="hero-subtitle">
            Accurate, fast, and free Grade Weighted Average calculator for students.
            Track your academic performance with ease.
          </p>
          <button
            className="hero-cta fade-in fade-in-delay-1"
            onClick={scrollToCalculator}
          >
            Start Calculating
            <span className="cta-arrow">→</span>
          </button>
        </div>

        <div className="hero-visual fade-in fade-in-delay-2">
          <div className="calculator-preview-mini">
            <div className="mini-calc-header">
              <span className="mini-calc-title">GWA Calculator</span>
            </div>
            <div className="mini-calc-content">
              <div className="mini-subject">
                <span>Mathematics</span>
                <span>92 (3 units)</span>
              </div>
              <div className="mini-subject">
                <span>English</span>
                <span>88 (3 units)</span>
              </div>
              <div className="mini-subject">
                <span>Science</span>
                <span>90 (4 units)</span>
              </div>
              <div className="mini-gwa-result">
                <span>Your GWA:</span>
                <span className="mini-gwa-value">90.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero