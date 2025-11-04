import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">📊</span>
              <span className="logo-text">GWA Calculator</span>
            </div>
            <p className="footer-description">
              Your trusted companion for academic success. Calculate, track, and improve your grades.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button className="footer-link">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="footer-link">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <span className="social-icon">🐙</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <span className="social-icon">🐦</span>
              </a>
              <a
                href="mailto:contact@gwacalculator.com"
                className="social-link"
                aria-label="Email"
              >
                <span className="social-icon">📧</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {currentYear} GWA Calculator. Made for students, by students.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer