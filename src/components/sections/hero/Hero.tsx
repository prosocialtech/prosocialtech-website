import Container from '../../layout/container/Container'
import Section from '../../layout/section/Section'
import Button from '../../ui/button/Button'
import type { ButtonVariant } from '../../ui/button/Button'

interface HeroProps {
  data: {
    title: {
      label: string
      image?: {
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
  if (data.buttons.length === 0) {
    throw new Error('Hero requires at least 1 button')
  }

  /* Limit the hero CTAS to specific variants and order*/
  const HERO_BUTTON_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'tertiary']

  return (
    <Section variant="gradient-1">
      <Container size="xs" className="pt-10">
        <div className="flex flex-col items-center">
          {data.title.image ? (
            <>
              <h1 className="sr-only">{data.title.label}</h1>
              <img
                src={data.title.image.src}
                alt=""
                aria-hidden="true"
                className="w-full h-auto max-w-full mb-2xl"
              />
            </>
          ) : (
            <h1 className="section-heading-primary">{data.title.label}</h1>
          )}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-lg sm:justify-center w-full">
            {data.buttons.map((button, index) => {
              return (
                //   Using index as key for now since buttons list is stable
                <Button
                  key={index}
                  href={button.href}
                  variant={HERO_BUTTON_VARIANTS[index]}
                  ariaLabel={button.ariaLabel}
                  target="_blank"
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
