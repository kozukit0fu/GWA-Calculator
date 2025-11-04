
const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Accurate Results',
      description: 'Precise GWA calculations following standard grading systems'
    },
    {
      icon: '⚡',
      title: 'Instant Results',
      description: 'Get your GWA immediately as you type your grades'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - calculate on the go'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2 className="section-title">Why Choose Our Calculator?</h2>
          <p className="section-subtitle">
            Experience the best GWA calculation tool designed specifically for students
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 grid-cols-2-md grid-cols-3-lg">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card fade-in fade-in-delay-${index + 1}`}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features