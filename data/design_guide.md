## 1. Site Info

SITE_TYPE: Agency / Law Firm Digital Marketing
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
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
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100% (max-w-[1440px] mx-auto px-6 py-4)
NAV_BACKGROUND: rgb(255, 255, 255) / `bg-white`
NAV_BORDER_RADIUS: 0px
NAV_POSITION: relative
NAV_SHADOW: none
SCROLL_BEHAVIOR: none
NAV_DIVIDERS: none

Link style:
- fontSize: text-[18px]
- fontWeight: font-normal (400)
- fontFamily: Rubik, sans-serif
- textTransform: normal-case, do NOT use uppercase
- letterSpacing: tracking-normal, do NOT use tracking-wide
- color: text-[rgb(34,34,34)] hover:text-[rgb(34,66,125)]
- link row layout: distribution is right, flex items-center gap-8
- SINGLE LINE: whitespace-nowrap flex-nowrap
- menu vertical placement: middle

Logo:
- Presence: true
- Source: `https://cdn.prod.website-files.com/68e9ad149fb2838ec812418c/68e9ad149fb2838ec8124209_LOGO-v6-final.png` (match in `index.images.json`)
- Size: h-[48px] w-auto
- Position: inline left

CTA button(s):
1. Phone link/button: `(727) 603-3334` -> `href="tel:+17276033334"` — Solid cyan background `bg-[rgb(58,166,196)] text-white px-5 py-2.5 rounded-[4px] text-[16px] font-normal whitespace-nowrap`
2. Schedule a Call button: `Schedule a Call` -> `href="/contact"` — Solid navy background `bg-[rgb(34,66,125)] text-white px-5 py-2.5 rounded-[4px] text-[16px] font-normal whitespace-nowrap`

Dropdowns: None

## 4. Section Plan

### Section 1: Hero `Hero.astro` id="hero"
- theme: DARK
- background: bg-dark-background (`rgb(9, 19, 37)`)
- text: text-white
- heading color: text-white
- heading size: text-[44px] leading-[61.6px] font-bold font-serif (`Bitter`)
- heading transform/tracking: normal-case, tracking-normal; do NOT use uppercase
- body size: text-[18px] leading-[28.8px] font-normal font-sans (`Rubik`) text-white/90
- text alignment/placement: left-aligned (`text-left items-start`)
- layout: flex flex-col justify-center items-start min-h-[580px] max-w-[1440px] mx-auto px-6 py-20 relative z-10
- padding: py-20 md:py-28
- content:
  - Heading: "Scale Your Law Firms Growth with Bright Ideas"
  - Subtitle / paragraph: "Stay Ahead Of Your Competitors! Most small to mid-size law firms are fed strategies that don't work for them. We can help forge a path to bright ideas that are unique to you, work for you & drive results for you." (max-w-[700px])
  - Action buttons (flex flex-wrap gap-4 mt-8):
    - Button 1: "Explore Our Services" (Navy fill `bg-[rgb(34,66,125)] text-white rounded-[4px] px-6 py-3 text-[18px] font-normal hover:bg-[rgb(26,51,97)] transition-colors`, `href="/services"`)
    - Button 2: "Schedule a Consultation" (Cyan fill `bg-[rgb(58,166,196)] text-white rounded-[4px] px-6 py-3 text-[18px] font-normal hover:bg-[rgb(46,140,166)] transition-colors`, `href="/contact"`)
- backgroundImage: `https://cdn.prod.website-files.com/68d2e55f019cfd81ac194694%2F68d34b329e7d930b90697226_a-lot-of-edison-old-fashion-bulbs-or-lamps-hanged-2025-08-28-14-45-38-utc%20%281440p%29-poster-00001.jpg`
- videoBackground: `https://cdn.prod.website-files.com/68e9ad149fb2838ec812418c/68e9ad149fb2838ec81241e0_a-lot-of-edison-old-fashion-bulbs-or-lamps-hanged-2025-08-28-14-45-38-utc%20(1440p)-transcode.mp4` (autoplay, muted, loop, playsinline, absolute inset-0 object-cover w-full h-full z-0)
- overlay: `linear-gradient(rgba(0, 19, 53, 0.75), rgba(0, 19, 53, 0.75))` (placed absolutely over the video/image)
- transition to next: Straight edge

---

### Section 2: Services / Who We Are `Services.astro` id="services"
- theme: LIGHT
- background: `bg-[rgba(201,210,217,0.45)]` (soft slate tint)
- text: text-[rgb(34,34,34)]
- heading color: text-[rgb(34,34,34)]
- heading size: text-[36px] leading-[50.4px] font-bold font-serif (`Bitter`)
- heading transform/tracking: normal-case, tracking-normal
- body size: text-[18px] leading-[28.8px] font-normal font-sans (`Rubik`)
- text alignment/placement: start / left-aligned
- layout:
  - Header row: 2-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14 max-w-[1440px] mx-auto px-6`)
    - Left column: H2 "Who is Bright Idea Group and what can we do for your law firm?"
    - Right column: Body paragraph "Our team is made up of agency owners with more than 20 years experience each. Each member of Bright Idea Group is an expert in their individual service areas and has been vetted extensively before joining our group."
  - Cards grid: 2-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto px-6`)
- padding: py-20
- content: 8 service cards:
  1. Card 1:
     - Title: "AI Search Optimization"
     - Excerpt: "AI SEO uses artificial intelligence to optimize website content, improve search rankings, and boost online visibility. It automates keyword research, content optimization, and performance tracking--helping businesses achieve better results faster..."
     - Link: "Learn more" (`href="/service/artificial-intelligence-search-optimization"`)
     - Image: AI search interface with hand touching digital button
  2. Card 2:
     - Title: "Digital Marketing (SEO)"
     - Excerpt: "Traditional SEO is evolving rapidly. In 2025, 60% of searches end without a click [SparkToro, 2024], and AI Overviews now appear in 13.14% of all queries [Semrush, March 2025]. Your business needs a forward-thinking SEO strategy that optimizes for AI search..."
     - Link: "Learn more" (`href="/service/digital-marketng"`)
     - Image: Tablet with Ads & digital marketing icons
  3. Card 3:
     - Title: "Webflow / WP Web Design"
     - Excerpt: "Built on Webflow or WordPress our sites are designed specifically for your firm's practice areas and branding. We focus each site on showcasing your firm's expertise while optimizing for increased conversions. Our sites provide a solid background to your firm's..."
     - Link: "Learn more" (`href="/service/webflow-or-wp-web-design"`)
     - Image: Laptop screen displaying UI/UX web layout analytics
  4. Card 4:
     - Title: "Review Management"
     - Excerpt: "Provided by reviewdriver.com - Protect and enhance your online reputation with automated review management that drives more positive client feedback. Our proven system helps you consistently generate authentic reviews while addressing..."
     - Link: "Learn more" (`href="/service/review-management"`)
     - Image: Smartphone showing 5.0 star reviews and profile cards
  5. Card 5:
     - Title: "Law Marketing Directory"
     - Excerpt: "Access our exclusive membership directory featuring vetted marketing vendors we've personally worked with and trust for law firm growth. Members receive detailed vendor insights, performance data, and exclusive discounts on select services, helping..."
     - Link: "Learn more" (`href="/service/law-marketing-directory"`)
     - Image: Lawyer with scales of justice and legal icons
  6. Card 6:
     - Title: "TV / OTT Marketing"
     - Excerpt: "Reach your ideal clients through targeted television and streaming platform advertising campaigns. We leverage advanced audience targeting to ensure your message connects with potential clients across traditional TV and modern OTT platforms like Hulu, Netflix, and..."
     - Link: "Learn more" (`href="/service/tv-ott-marketing"`)
     - Image: Tablet showing TV / broadcast communication icons
  7. Card 7:
     - Title: "Podcast Advertising"
     - Excerpt: "In a world flooded with ads, few channels let you speak directly into the listener's ear -- literally. Podcasts provide a unique, trusted environment where attorneys can build authority, educate potential clients, and stay top-of-mind...."
     - Link: "Learn more" (`href="/service/podcast-advertising-for-law-firms"`)
     - Image: Man with headphones and microphone/audio graphic overlay
  8. Card 8:
     - Title: "Accident Reporting / Leads"
     - Excerpt: "Capture potential clients immediately after local incidents with our automated accident reporting system that monitors news feeds and publishes relevant content within minutes. This rapid-response content strategy ensures your firm appears prominently when..."
     - Link: "Learn more" (`href="/service/accident-reporting"`)
     - Image: Man pointing to warning sign, document, and process gear icons
- Card Structure:
  - Outer: `<div class="bg-white grid grid-cols-1 sm:grid-cols-2 rounded-none overflow-hidden shadow-sm group">`
  - Left: `<div class="relative h-[220px] sm:h-auto"><img ... class="w-full h-full object-cover" /></div>`
  - Right: `<div class="p-6 flex flex-col justify-between"><h3 class="text-[24px] font-bold font-serif text-[rgb(34,34,34)] mb-3">...</h3><p class="text-[16px] leading-[26px] text-[rgb(34,34,34)] mb-4">...</p><a class="text-[rgb(34,66,125)] font-normal text-[16px] hover:underline self-end">Learn more</a></div>`
- Bottom Button:
  - "View all" (`href="/services"`, Solid Navy `bg-[rgb(34,66,125)] text-white border border-black/20 rounded-[4px] px-8 py-3 text-[18px] mx-auto block mt-12 w-fit`)
- transition to next: Straight edge

---

### Section 3: Mid-page CTA Banner `CtaBanner.astro` id="cta-banner"
- theme: DARK
- background: bg-dark-background (`rgb(9, 19, 37)`)
- text: text-white
- heading color: text-white
- heading size: text-[36px] leading-[50.4px] font-bold font-serif (`Bitter`)
- heading transform/tracking: normal-case, tracking-normal
- text alignment/placement: text-center items-center
- layout: flex flex-col items-center justify-center text-center max-w-[1440px] mx-auto px-6 py-24 relative z-10 gap-8
- padding: py-24
- content:
  - H2: "Contact us today and we will illuminate the path to growth!"
  - Button: "Schedule a Consultation" (`href="/contact"`, Cyan fill `bg-[rgb(58,166,196)] text-white rounded-[4px] px-6 py-3 text-[18px] font-normal hover:bg-[rgb(46,140,166)] transition-colors`)
- backgroundImage: `https://cdn.prod.website-files.com/68d2e55f019cfd81ac194694%2F68d34b329e7d930b90697226_a-lot-of-edison-old-fashion-bulbs-or-lamps-hanged-2025-08-28-14-45-38-utc%20%281440p%29-poster-00001.jpg`
- videoBackground: `https://cdn.prod.website-files.com/68e9ad149fb2838ec812418c/68e9ad149fb2838ec81241e0_a-lot-of-edison-old-fashion-bulbs-or-lamps-hanged-2025-08-28-14-45-38-utc%20(1440p)-transcode.mp4` (autoplay, muted, loop, playsinline, absolute inset-0 object-cover w-full h-full z-0)
- overlay: `linear-gradient(rgba(0, 19, 53, 0.75), rgba(0, 19, 53, 0.75))`
- transition to next: Straight edge

---

### Section 4: Contact Form `Contact.astro` id="contact"
- theme: LIGHT
- background: `bg-[rgba(201,210,217,0.45)]`
- text: text-[rgb(34,34,34)]
- heading color: text-[rgb(34,34,34)]
- heading size: text-[36px] leading-[50.4px] font-bold font-serif (`Bitter`)
- heading transform/tracking: normal-case, tracking-normal
- body size: text-[18px] leading-[28.8px] font-normal font-sans (`Rubik`)
- text alignment/placement: start / left-aligned
- layout: 2-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-[1440px] mx-auto px-6`)
- padding: py-20
- content:
  - Left column:
    - H2: "Contact us"
    - Body text: "We are available most days during normal business hours to consult with you and determine how we might best help your firm. Reach out to us using the form or the contact information below."
    - Contact list:
      - Email: `shaun@brightideagroup.com` (with envelope icon in navy `rgb(34,66,125)`)
      - Phone: `+1 (727) 603-3334` (with phone icon in navy `rgb(34,66,125)`)
  - Right column:
    - Form fields:
      - Name: text input (`label: "Name"`, `class: "w-full bg-white border border-[rgb(58,166,196)] rounded-[4px] px-4 py-3"`)
      - Email: email input (`label: "Email"`, `class: "w-full bg-white border border-[rgb(58,166,196)] rounded-[4px] px-4 py-3"`)
      - Best Contact Phone: tel input (`label: "Best Contact Phone"`, `class: "w-full bg-white border border-[rgb(58,166,196)] rounded-[4px] px-4 py-3"`)
      - Message: textarea (`label: "Message"`, `placeholder: "Type your message..."`, `rows: 6`, `class: "w-full bg-white border border-[rgb(58,166,196)] rounded-[4px] px-4 py-3"`)
      - Submit button: `Submit` (`class: "bg-[rgb(34,66,125)] text-white border border-black/20 rounded-[4px] px-8 py-3 text-[18px] font-normal hover:bg-[rgb(26,51,97)] transition-colors mt-2"`)
    - Success message container: "Thank you! Your submission has been received!" (hidden / alert style)
    - Error message container: "Oops! Something went wrong while submitting the form." (hidden / alert style)
- transition to next: Straight edge

## 5. Favicon

The branding provides `faviconCdn`: `https://pagesmith-cdn.com/06cfb84b/images/68ee560202ec3f84e6e7c7f5_bright-idea-group-favicon-32.webp`.
Instruct the builder to call `process_favicon_image({ imageUrl: "https://pagesmith-cdn.com/06cfb84b/images/68ee560202ec3f84e6e7c7f5_bright-idea-group-favicon-32.webp" })`.

## 6. Footer

Style: `bg-[rgb(9,19,37)]` (deep navy)
Text color: text-white
Columns: 2 rows layout (top brand & nav row, bottom copyright row)
Content alignment:
- Top row: `max-w-[1440px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6`
  - Logo: `https://cdn.prod.website-files.com/68e9ad149fb2838ec812418c/68e9ad149fb2838ec812420a_LOGO-v6-final-LIGHT.png` (light version with white typography & yellow bulb)
  - Navigation Links (horizontal flex row, gap-8):
    - `Home` (`href="/"`)
    - `Services` (`href="/services"`)
    - `Team` (`href="/team"`)
    - `Contact` (`href="/contact"`)
    - `Schedule a Call` (`href="/contact"`)
    - Style: `text-white text-[16px] font-light hover:text-[rgb(58,166,196)] transition-colors`
- Bottom row: `border-t border-white/10 max-w-[1440px] mx-auto px-6 py-6 text-center text-white/70 text-[14px]`
  - Text: "© 2025 Bright Idea Group. All rights reserved."
Social Icons: None

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/site.ts`
- `src/styles/global.css`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/Services.astro`
- `src/components/home/CtaBanner.astro`
- `src/components/home/Contact.astro`
## Element inventory (extracted — reproduce ALL of these)

Machine-generated from the capture, not prose. Every icon listed below is
present in the source and in that section's ported `html` in
`index.sections.json`. Render each one: copy its `<svg>` from the ported
markup verbatim (keeping its `viewBox` and path data), size it to the
measured box, and paint it with the captured fill — `fill="none"` on an
icon that has a fill leaves it invisible. If a section below lists icons
and your component has none, the component is incomplete.

### Contact us
- `viewBox="0 0 24 24"` — 24x24px, fill `rgb(34, 66, 125)` — inline affordance (arrow/chevron)
