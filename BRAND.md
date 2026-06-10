# McCaulley Deck Co. - Brand Identity

Single source of truth for the McCaulley Deck Co. brand. The original design
package assets live in `public/brand/` (also downloadable from the live site,
e.g. `mccaulleydeck.co/brand/Business%20Card%20Front.png`).

## The Mark

A square of five wood boards rotated 45° - a deck board pattern read as a
diamond. Always rendered in Timber (#D29A55), on Charcoal, Paper, or photos.

Vector versions:
- `public/images/logo-mark.svg` - mark only, transparent
- `public/images/logo-lockup-light.svg` - full lockup for light backgrounds
- `public/images/logo-lockup-dark.svg` - full lockup for dark backgrounds
- In-site React component: `src/components/Logo.tsx` (`Logo`, `BrandMark`)

Geometry (for reproduction): 320-unit rounded square (corner radius 16),
five horizontal boards 52 units tall on a 72-unit pitch starting flush at the
top edge (bottom board clips to 32), rotated −45° so boards run "/" and the
thin board lands on the lower-right corner.

## Colors

| Name      | Hex       | Use |
|-----------|-----------|-----|
| Charcoal  | `#20211F` | Dark backgrounds, headline text on light |
| Paper     | `#F3F1EA` | Light backgrounds, text on charcoal |
| Timber    | `#D29A55` | The mark, accents & "DECK CO." on dark backgrounds, CTA buttons on dark |
| Bronze    | `#B0763B` | "DECK CO." and accents on light backgrounds (better contrast than Timber) |

Supporting tints (site only): Charcoal-light `#33342F` (hover), Paper-dark
`#E5E1D6` (borders), Timber-light `#DDAF74` (hover).

Rule of thumb: Timber for amber on dark, Bronze for amber on light.

## Typography

- Wordmark "McCaulley": heavy grotesque, tight tracking. Print = Helvetica
  Neue Bold; web = Inter Bold (`font-bold tracking-tight`).
- Sub-brand "DECK CO.": all caps, wide letterspacing (~0.34em), semibold,
  Bronze on light / Timber on dark.
- Body: Inter. No serifs anywhere - the serif/navy identity is retired.
- Eyebrow labels (site): `.eyebrow` class - Bronze, caps, 0.25em tracking.

## Voice

- Tagline: **"Designed & built by hand"**
- Yard sign eyebrow: "THIS DECK BY"
- Title on card: "Designer & Builder"

## Contact block (canonical)

- McCaulley Deck Co.
- (224) 655-9041
- max@mccaulleydeck.co
- mccaulleydeck.co
- Serving the Greater Chicagoland Area

## Print / collateral package (`public/brand/`)

Business Card Front/Back, Email Signature, Yard Sign 24x18, Vehicle Decal,
Lockup + Logo + Mark on Paper/Charcoal/Transparent. The transparent mark PNG
here is a cleaned version (the original export had ~500 stray yellow pixels
along one board edge).

## Site usage

- Favicon / app icon: charcoal rounded square + timber mark
  (`src/app/icon.png`, `src/app/apple-icon.png`)
- Social share: lockup on charcoal, 1200×630 (`src/app/opengraph-image.png`)
- Tailwind tokens: `charcoal`, `paper`, `timber`, `bronze` (+ tints) in
  `tailwind.config.ts`
