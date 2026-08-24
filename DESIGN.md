## Visual Theme
Modern, authoritative agency aesthetic for legal practices featuring deep midnight navy, rich slate accents, cyan highlights, crisp white cards, and refined serif typography with Edison bulb background imagery.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(0 0% 13%)
- muted-foreground: hsl(220 7% 45%)
- border: hsl(193 54% 50%)
- surface: hsl(206 20% 92%)
- primary: hsl(219 57% 31%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(219 57% 25%)
- secondary: hsl(193 54% 50%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(193 54% 42%)
- dark-background: hsl(219 61% 9%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted-foreground: hsl(210 20% 80%)
- dark-border: hsl(219 45% 20%)
- accent: hsl(193 54% 50%)

## Page Background
solid hsl(0 0% 100%)

## Typography
- Heading font: REQUIRED slug `bitter` (source: "Bitter", weights: 400, 700)
- Body font: REQUIRED slug `rubik` (source: "Rubik", weights: 300, 400, 500, 700)

Typography size fidelity:
- h1: text-[44px] leading-[61.6px] font-bold font-serif
- h2: text-[36px] leading-[50.4px] font-bold font-serif
- h3: text-[24px] leading-[33.6px] font-bold font-serif
- body: text-[18px] leading-[28.8px] font-normal font-sans
- nav-link: text-[18px] font-normal font-sans

## Components
- Primary Buttons: Solid navy fill `bg-[hsl(219_57%_31%)] text-white px-6 py-3 rounded-[4px] text-[18px] font-normal inline-flex items-center justify-center transition-colors hover:bg-[hsl(219_57%_25%)]`
- Secondary / Cyan Buttons: Solid cyan fill `bg-[hsl(193_54%_50%)] text-white px-6 py-3 rounded-[4px] text-[18px] font-normal inline-flex items-center justify-center transition-colors hover:bg-[hsl(193_54%_42%)]`
- Service Cards: Horizontal 2-column card layout (`grid grid-cols-1 md:grid-cols-2 bg-white rounded-none overflow-hidden shadow-sm`). Left side is 16:9 or bounded photo with cover fit; right side is padded content box (`p-8 bg-white flex flex-col justify-between`).
- Form Inputs: `bg-white border border-[hsl(193_54%_50%)] rounded-[4px] px-4 py-3 text-[18px] text-[hsl(0_0%_13%)] focus:outline-none focus:ring-2 focus:ring-[hsl(193_54%_50%)]`