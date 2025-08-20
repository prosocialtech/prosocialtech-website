import React from 'react'

type Variant = 'mint' | 'butter' | 'ice' | 'lilac' | 'sand' | 'apricot' | 'sky' | 'grass' | 'coral'

const THEME: Record<Variant, { body: string; bar: string; dots: string[] }> = {
  mint: {
    body: 'var(--card-mint-body)',
    bar: 'var(--card-mint-bar)',
    dots: [
      'var(--dot-pillars-collaborators-1)',
      'var(--dot-pillars-collaborators-2)',
      'var(--dot-pillars-collaborators-3)',
    ],
  },
  butter: {
    body: 'var(--card-butter-body)',
    bar: 'var(--card-butter-bar)',
    dots: [
      'var(--dot-pillars-community-1)',
      'var(--dot-pillars-community-2)',
      'var(--dot-pillars-community-3)',
    ],
  },
  ice: {
    body: 'var(--card-ice-body)',
    bar: 'var(--card-ice-bar)',
    dots: [
      'var(--dot-pillars-resource-sharing-1)',
      'var(--dot-pillars-resource-sharing-2)',
      'var(--dot-pillars-resource-sharing-3)',
    ],
  },
  lilac: {
    body: 'var(--card-lilac-body)',
    bar: 'var(--card-lilac-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
  sand: {
    body: 'var(--card-sand-body)',
    bar: 'var(--card-sand-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
  apricot: {
    body: 'var(--card-apricot-body)',
    bar: 'var(--card-apricot-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
  sky: {
    body: 'var(--card-sky-body)',
    bar: 'var(--card-sky-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
  grass: {
    body: 'var(--card-grass-body)',
    bar: 'var(--card-grass-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
  coral: {
    body: 'var(--card-coral-body)',
    bar: 'var(--card-coral-bar)',
    dots: ['var(--dot-channels-1)', 'var(--dot-channels-2)', 'var(--dot-channels-3)'],
  },
}

// const BORDER_RADIUS = 28
// const TOP_BAR_BORDER_RADIUS = 24

/**
 * Card component with themed styling and customizable layout options
 * @param title - The card title displayed in the header
 * @param children - The card content
 * @param className - Additional CSS classes to apply
 * @param variant - Theme variant for colors
 * @param barStyle - Style of the top bar ('full' with controls or 'dotsRight' with only dots)
 * @param align - Text alignment for content ('left' or 'center')
 */
type Props = {
  title: string
  children: React.ReactNode
  className?: string
  variant?: Variant
  barStyle?: 'full' | 'dotsRight'
  align?: 'left' | 'center'
}

// Helper component for rendering dots
const Dots = ({ dots }: { dots: string[] }) => (
  <div className="flex gap-2">
    {dots.map((dot, i) => (
      <span
        key={i}
        className="w-4 h-4 rounded-full border-2 border-black/70"
        style={{ backgroundColor: dot }}
      />
    ))}
  </div>
)

// Helper component for window controls
const WindowControls = ({ bodyColor }: { bodyColor: string }) => (
  <div className="flex items-center gap-4 opacity-80">
    {/* minus */}
    <div className="w-5 h-[3px] bg-black" />

    {/* stacked windows */}
    <div className="relative w-6 h-5">
      {/* back box */}
      <div
        className="absolute border-[3px] border-black"
        style={{
          backgroundColor: bodyColor,
          width: '23.27px',
          height: '18.18px',
          left: '5.82px',
          top: '0px',
        }}
      />
      {/* front box */}
      <div
        className="absolute border-[3px] border-black"
        style={{
          backgroundColor: bodyColor,
          width: '23.27px',
          height: '18.18px',
          left: '0px',
          top: '5.82px',
        }}
      />
    </div>

    {/* x */}
    <div className="relative w-4 h-4">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[3px] bg-black rotate-45" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[3px] bg-black -rotate-45" />
    </div>
  </div>
)

export default function Card({
  title,
  children,
  className = '',
  variant = 'mint',
  barStyle = 'full',
  align = 'center',
}: Props) {
  const v = THEME[variant]

  return (
    <div
      style={{ backgroundColor: v.body }}
      className={`relative rounded-2xl border-3 border-black/65 card-shadow ${className}`}
    >
      {/* Top bar */}
      <div
        style={{ backgroundColor: v.bar }}
        className={`h-10 rounded-t-xl border-b-2 border-black/65 ${
          barStyle === 'dotsRight'
            ? 'flex items-center justify-end px-4'
            : 'flex items-center justify-between px-4'
        }`}
      >
        {barStyle === 'full' ? (
          <>
            <Dots dots={v.dots} />
            <WindowControls bodyColor={v.body} />
          </>
        ) : (
          <Dots dots={v.dots} />
        )}
      </div>

      {/* Content */}
      <div className={`p-6 md:p-8 ${align === 'left' ? 'text-left' : 'text-center'}`}>
        <h3 className="text-card-header mb-3 uppercase">{title}</h3>
        <div className="text-card">{children}</div>
      </div>

      {/* outer ring */}
      {/* <div
        className={`pointer-events-none absolute inset-0 rounded-[${BORDER_RADIUS}px] shadow-[0_0_0_4px_rgba(0,0,0,0.25)]`}
      /> */}
    </div>
  )
}
