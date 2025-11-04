import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CalculatorPreview from './components/CalculatorPreview'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
          <CalculatorPreview />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App