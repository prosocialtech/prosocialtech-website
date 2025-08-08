import './App.css'
import copy from '../../content/copy.json'
import Container from '../layout/container/Container'
import Section from '../layout/section/Section'
import Layout from '../../layouts/Layout'

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="gradient-1">
        <Container>
          <h1 className="section-heading-primary">{copy.hero.title}</h1>
        </Container>
      </Section>

      {/* About Section */}
      <Section variant="dark">
        <Container className="text-left space-y-8">
          <h1 className="section-heading-primary">{copy.about.title}</h1>
          <p className="text-body">{copy.about.body}</p>
        </Container>
      </Section>

      {/* Pillars Section */}
      <Section variant="gradient-2">
        <Container>
          <h1 className="section-heading-secondary">{copy.pillars.title}</h1>
        </Container>
      </Section>

      {/* Engage Section */}
      <Section variant="dark">
        <Container className="text-left space-y-8">
          <h1 className="section-heading-primary">{copy.engage.title}</h1>
          <p className="text-body">{copy.engage.body}</p>
        </Container>
      </Section>

      {/* Channels Section */}
      <Section variant="gradient-3">
        <Container>
          <h1 className="section-heading-secondary">{copy.channels.title}</h1>
          <p className="text-body">{copy.channels.body}</p>
        </Container>
      </Section>

      {/* Footer Section */}
      <Section variant="dark">
        <Container className="text-left space-y-8">
          <h1 className="section-heading-primary">{copy.footer.title}</h1>
          <p className="text-body">{copy.footer.contact}</p>
          <p className="text-body">{copy.footer.copyright}</p>
        </Container>
      </Section>
    </Layout>
  )
}

export default App
