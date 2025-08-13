import Container from '../../layout/container/Container'
import Section from '../../layout/section/Section'
import Button from '../../ui/button/Button'
import type { ButtonVariant } from '../../ui/button/Button'

interface HeroProps {
  data: {
    title: {
      label: string
      image: {
        src: string
        alt: string
      }
    }
    buttons: Array<{
      label: string
      href: string
      ariaLabel: string
    }>
  }
}

const Hero = ({ data }: HeroProps) => {
  /* Limit the hero CTAS to specific variants and order*/
  const HERO_BUTTON_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'tertiary']

  return (
    <Section variant="gradient-1">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="section-heading-primary">{data.title.label}</h1>
          <div className="flex gap-lg">
            {data.buttons.map((button, index) => {
              return (
                //   Using index as key for now since buttons list is stable
                <Button
                  key={index}
                  href={button.href}
                  variant={HERO_BUTTON_VARIANTS[index]}
                  ariaLabel={button.ariaLabel}
                >
                  {button.label}
                </Button>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
