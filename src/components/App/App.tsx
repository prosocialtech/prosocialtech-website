import './App.css'
import copy from '../../content/copy.json'

function App() {
  return (
    <div className="bg-blue-900">
      <h1 className="section-heading-primary">{copy.hero.title}</h1>
    </div>
  )
}

export default App
