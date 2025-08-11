import './App.css'
import copy from '../../content/copy.json'
import Container from '../layout/container/Container'
import Section from '../layout/section/Section'
import Layout from '../../layouts/Layout'
import Card from '../layout/card/Card'

function App() {
  // Common props for pillar cards to reduce repetition
  const pillarCardProps = {
    className: 'w-72 h-112',
    barStyle: 'dotsRight' as const,
    align: 'left' as const,
  }

  // Configuration for pillar cards
  const pillarCards = [
    { variant: 'mint' as const, key: 'findingCollaborators' as const },
    { variant: 'butter' as const, key: 'buildingCommunity' as const },
    { variant: 'ice' as const, key: 'fosteringResourceSharing' as const },
  ]

  // Configuration for channel cards
  const channelCards = [
    { variant: 'lilac' as const, key: 'appliedSocialMedia' as const },
    { variant: 'sand' as const, key: 'artsAndCulture' as const },
    { variant: 'apricot' as const, key: 'civicTech' as const },
    { variant: 'sky' as const, key: 'journalism' as const },
    { variant: 'grass' as const, key: 'research' as const },
    { variant: 'coral' as const, key: 'responsibleAI' as const },
  ]

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

          <div className="mt-16 grid gap-20 md:grid-cols-3 justify-center">
            {pillarCards.map(({ variant, key }) => (
              <Card
                key={key}
                {...pillarCardProps}
                variant={variant}
                title={copy.pillars.cards[key].title}
              >
                {copy.pillars.cards[key].description}
              </Card>
            ))}
          </div>
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
          <p className="text-body text-black mt-16">{copy.channels.body}</p>

          <div className="mt-16 grid md:grid-cols-2 gap-x-20 gap-y-16">
            {channelCards.map(({ variant, key }) => (
              <Card key={key} variant={variant} title={copy.channels.list[key].title}>
                {copy.channels.list[key].description}
              </Card>
            ))}
          </div>
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
