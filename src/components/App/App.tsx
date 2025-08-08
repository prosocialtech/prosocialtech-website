import './App.css'
import copy from '../../content/copy.json'
import Container from '../layout/container/Container'
import Section from '../layout/section/Section'
import Layout from '../../layouts/Layout'

function App() {
  return (
    <Layout>
      <Section variant="dark">
        <Container>
          <h1 className="section-heading-primary">{copy.hero.title}</h1>
        </Container>
      </Section>
    </Layout>
  )
}

export default App
