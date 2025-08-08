import './App.css'
import copy from '../../content/copy.json'
import Container from '../layout/container/Container'

function App() {
  return (
    <Container>
      <div className="bg-blue-900">
        <h1 className="section-heading-primary">{copy.hero.title}</h1>
      </div>
    </Container>
  )
}

export default App
