import './App.css'
import copy from '../../content/copy.json'
import Container from '../layout/container/Container'
import Section from '../layout/section/Section'
import Layout from '../../layouts/Layout'
import Card from '../ui/card/Card'
import Hero from '../sections/hero/Hero'
import Button from '../ui/button/Button'
import type { ButtonVariant } from '../ui/button/Button'

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
      <Hero data={copy.hero} />

      {/* About Section */}
      <Section variant="dark">
        <Container size="sm" className="text-left space-y-8">
          <h2 className="section-heading-primary">{copy.about.title}</h2>
          <p className="text-body">{copy.about.body}</p>
        </Container>
      </Section>

      {/* Pillars Section */}
      <Section variant="gradient-2">
        <Container size="md">
          <h2 className="section-heading-secondary">{copy.pillars.title}</h2>

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
        <Container size="none" className="text-left space-y-8 max-w-5xl">
          <h2 className="section-heading-primary">{copy.engage.title}</h2>
          <p className="text-body">{copy.engage.body}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl max-w-xs mx-auto mt-2xl">
            {copy.engage.actions.map((action, index) => {
              /* Enforcing that this component will always have 1 of each variant in this order
              but will likely eventually extend so that the variants and order are customizable*/
              const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'quaternary']
              const button = action.button
              return (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <p className="text-body">{action.description}</p>
                  <Button
                    href={button.href}
                    ariaLabel={button.ariaLabel}
                    variant={variants[index]}
                    target="_blank"
                  >
                    {button.label}
                  </Button>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Channels Section */}
      <Section variant="gradient-3">
        <Container size="md">
          <h2 className="section-heading-secondary">{copy.channels.title}</h2>
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
        <Container size="md" className="text-left space-y-8">
          <h2 className="section-heading-primary">{copy.footer.title}</h2>
          <p className="text-body">{copy.footer.contact}</p>
          <p className="text-body">{copy.footer.copyright}</p>
        </Container>
      </Section>
    </Layout>
  )
}

export default App
