import React, { useState, useEffect } from 'react'

const CalculatorPreview = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, grade: 92, units: 3 },
    { id: 2, grade: 88, units: 3 },
    { id: 3, grade: 90, units: 4 }
  ])
  const [currentSubject, setCurrentSubject] = useState({
    grade: '',
    units: ''
  })
  const [errors, setErrors] = useState({})
  const [gwa, setGwa] = useState(0)

  useEffect(() => {
    calculateGWA()
  }, [subjects])

  const calculateGWA = () => {
    if (subjects.length === 0) {
      setGwa(0)
      return
    }

    const totalWeighted = subjects.reduce((sum, subject) => {
      return sum + (subject.grade * subject.units)
    }, 0)

    const totalUnits = subjects.reduce((sum, subject) => {
      return sum + subject.units
    }, 0)

    const calculatedGWA = totalUnits > 0 ? totalWeighted / totalUnits : 0
    setGwa(Math.round(calculatedGWA * 100) / 100)
  }

  const validateInputs = () => {
    const newErrors = {}

    if (!currentSubject.grade || currentSubject.grade === '') {
      newErrors.grade = 'Grade is required'
    } else {
      const grade = parseFloat(currentSubject.grade)
      if (isNaN(grade) || grade < 0 || grade > 100) {
        newErrors.grade = 'Grade must be between 0 and 100'
      }
    }

    if (!currentSubject.units || currentSubject.units === '') {
      newErrors.units = 'Units are required'
    } else {
      const units = parseFloat(currentSubject.units)
      if (isNaN(units) || units < 1 || units > 5) {
        newErrors.units = 'Units must be between 1 and 5'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setCurrentSubject(prev => ({
      ...prev,
      [field]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const addSubject = () => {
    if (!validateInputs()) {
      return
    }

    const newSubject = {
      id: Date.now(),
      grade: parseFloat(currentSubject.grade),
      units: parseFloat(currentSubject.units)
    }

    setSubjects(prev => [...prev, newSubject])
    setCurrentSubject({ grade: '', units: '' })
  }

  const removeSubject = (id) => {
    setSubjects(prev => prev.filter(subject => subject.id !== id))
  }

  const clearAll = () => {
    setSubjects([])
    setCurrentSubject({ grade: '', units: '' })
    setErrors({})
  }

  const resetToSample = () => {
    setSubjects([
      { id: 1, grade: 92, units: 3 },
      { id: 2, grade: 88, units: 3 },
      { id: 3, grade: 90, units: 4 }
    ])
    setCurrentSubject({ grade: '', units: '' })
    setErrors({})
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addSubject()
    }
  }

  return (
    <section id="calculator" className="calculator-preview">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2 className="section-title">See It In Action</h2>
          <p className="section-subtitle">
            Try our fully functional GWA calculator right now
          </p>
        </div>

        <div className="calculator-container fade-in">
          <div className="calculator-card">
            <div className="calculator-header">
              <h3 className="calculator-title">GWA Calculator</h3>
              <div className="gwa-display">
                <span className="gwa-label">Your GWA:</span>
                <span className="gwa-value">{gwa.toFixed(2)}</span>
              </div>
            </div>

            <div className="calculator-content">
              {/* Add Subject Form */}
              <div className="add-subject-form">
                <h4 className="form-title">Add Subject</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="grade-input">Grade (0-100)</label>
                    <input
                      id="grade-input"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      placeholder="Enter grade"
                      value={currentSubject.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                      onKeyPress={handleKeyPress}
                      className={`form-input ${errors.grade ? 'input-error' : ''}`}
                    />
                    {errors.grade && (
                      <span className="error-message">{errors.grade}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="units-input">Units (1-5)</label>
                    <input
                      id="units-input"
                      type="number"
                      min="1"
                      max="5"
                      step="1"
                      placeholder="Enter units"
                      value={currentSubject.units}
                      onChange={(e) => handleInputChange('units', e.target.value)}
                      onKeyPress={handleKeyPress}
                      className={`form-input ${errors.units ? 'input-error' : ''}`}
                    />
                    {errors.units && (
                      <span className="error-message">{errors.units}</span>
                    )}
                  </div>

                  <div className="form-group form-group-button">
                    <button
                      type="button"
                      onClick={addSubject}
                      className="btn btn-primary"
                    >
                      Add Subject
                    </button>
                  </div>
                </div>
              </div>

              {/* Subjects List */}
              <div className="subjects-section">
                <div className="subjects-header">
                  <h4 className="subjects-title">Subjects ({subjects.length})</h4>
                  <div className="subjects-actions">
                    <button
                      onClick={resetToSample}
                      className="btn btn-secondary btn-sm"
                      disabled={subjects.length > 0}
                    >
                      Load Sample
                    </button>
                    <button
                      onClick={clearAll}
                      className="btn btn-danger btn-sm"
                      disabled={subjects.length === 0}
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {subjects.length === 0 ? (
                  <div className="empty-state">
                    <p>No subjects added yet. Add your first subject above!</p>
                  </div>
                ) : (
                  <div className="subjects-list">
                    {subjects.map((subject, index) => (
                      <div key={subject.id} className="subject-item">
                        <div className="subject-info">
                          <span className="subject-number">#{index + 1}</span>
                          <span className="subject-grade">{subject.grade}</span>
                          <span className="subject-units">{subject.units} unit{subject.units !== 1 ? 's' : ''}</span>
                        </div>
                        <button
                          onClick={() => removeSubject(subject.id)}
                          className="btn btn-icon btn-danger"
                          aria-label="Remove subject"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Calculation Summary */}
              {subjects.length > 0 && (
                <div className="calculation-summary">
                  <div className="summary-row">
                    <span>Total Weighted Grade:</span>
                    <span>
                      {subjects.reduce((sum, s) => sum + (s.grade * s.units), 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span>Total Units:</span>
                    <span>{subjects.reduce((sum, s) => sum + s.units, 0)}</span>
                  </div>
                  <div className="summary-row summary-row-total">
                    <span>Final GWA:</span>
                    <span className="gwa-final">{gwa.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalculatorPreview