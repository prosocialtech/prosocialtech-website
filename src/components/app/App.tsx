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
          <div className="space-y-4">
            {copy.about.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>
          {copy.about.more && (
            <div className="space-y-6">
              <h2 className="section-heading-primary">{copy.about.more.title}</h2>
              <div className="space-y-4">
                {copy.about.more.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              {copy.about.more.image?.src && (
                <img
                  src={copy.about.more.image.src}
                  alt={copy.about.more.image.alt || ''}
                  className="w-full max-w-4xl rounded-md border border-neutral-800"
                />
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* Pillars Section */}
      <Section variant="gradient-2">
        <Container size="md">
          <h2 className="section-heading-secondary neutral">{copy.pillars.title}</h2>

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
      <Section variant="dark" id="engage">
        <Container size="none" className="text-left space-y-8 max-w-5xl">
          <h2 className="section-heading-primary">{copy.engage.title}</h2>
          <div className="space-y-4">
            {copy.engage.body.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-body"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl max-w-xs mx-auto mt-2xl">
            {copy.engage.actions.map((action, index) => {
              /* Specific button variants for each button */
              const variants: ButtonVariant[] = [
                'quaternary',
                'tertiary',
                'quinary',
                'primary',
                'secondary',
                'senary',
              ]
              const button = action.button
              const variant = variants[index]
              return (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <p className="text-body">{action.description}</p>
                  <Button
                    href={button.href}
                    ariaLabel={button.ariaLabel}
                    variant={variant}
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
          <h2 className="section-heading-secondary accent">{copy.channels.title}</h2>
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

      {/* Upcoming Events & Footer Section */}
      <Section variant="dark">
        <Container size="md" className="text-left space-y-10">
          <div className="space-y-6">
            <h2 className="section-heading-primary">{copy.upcoming.title}</h2>
            <p className="text-body">
              {copy.upcoming.body1.split('Community Calendar')[0]}
              <a
                href={copy.upcoming.links.calendar.href}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {copy.upcoming.links.calendar.label}
              </a>
              {copy.upcoming.body1.split('Community Calendar')[1]}
            </p>
            <p className="text-body">
              {copy.upcoming.body2.split('share')[0]}
              <a
                href={copy.upcoming.links.share.href}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {copy.upcoming.links.share.label}
              </a>
              {copy.upcoming.body2.split('share')[1].split('submit an idea for a gathering')[0]}
              <a
                href={copy.upcoming.links.gathering.href}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {copy.upcoming.links.gathering.label}
              </a>
              {copy.upcoming.body2.split('submit an idea for a gathering')[1]}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-heading-primary">{copy.footer.title}</h2>
            <p className="text-body">
              {copy.footer.contactPrefix}
              <a
                href={copy.footer.contactLink.href}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {copy.footer.contactLink.label}
              </a>
              .
            </p>
            <p className="text-body">{copy.footer.copyright}</p>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default App
