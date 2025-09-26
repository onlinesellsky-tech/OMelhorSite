# Design Guidelines: Livroteca Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from successful conversion-focused landing pages like Shopify and modern SaaS platforms, emphasizing clean design with strategic color usage for maximum mobile conversion.

## Core Design Elements

### A. Color Palette
**Light Mode Primary:**
- Background: 248 10% 97% (very light gray)
- Text Primary: 0 0% 20% (dark gray)
- Text Secondary: 0 0% 40% (medium gray)

**Accent Colors:**
- Primary CTA: 30 100% 50% (vibrant orange #FF8C00)
- Success/Check: 120 60% 40% (subtle green)
- Borders: 0 0% 90% (light gray borders)

### B. Typography
- **Headers**: Montserrat or Poppins (bold, clean)
- **Body**: Open Sans or Roboto (readable, professional)
- **Hierarchy**: Large H1 (32px), H2 (24px), H3 (20px), body (16px)

### C. Layout System
**Spacing**: Tailwind units of 2, 4, 6, 8, 12, 16
- **Container**: max-w-sm for mobile optimization
- **Padding**: p-4 for sections, p-6 for highlighted areas
- **Margins**: mb-6 between sections, mb-4 between elements

### D. Component Library

**Buttons:**
- Primary CTA: Orange background, white text, rounded-lg, shadow-md
- Secondary: Outline variant with blurred background when over images
- Size: py-3 px-6 for mobile touch targets

**Cards:**
- Standard: White background, subtle border, rounded-lg, shadow-sm
- VIP Section: Light orange background (30 100% 95%), orange border, shadow-lg
- Guarantee: Border with shield icon, subtle shadow

**Typography Components:**
- Headlines: Bold, dark gray, generous line spacing
- Price Display: Large orange text with strikethrough for original price
- Check Lists: Green checkmarks with clean spacing

### E. Mobile-First Layout

**Hero Section:**
- Single column layout
- Headline + subheadline + CTA + trust indicators
- Mockup images below content (stacked vertically)

**Content Sections:**
- Full-width cards with internal padding
- Single column for easy scanning
- Clear visual hierarchy with generous whitespace

**VIP Upsell:**
- Prominently highlighted with orange accent border
- Larger card design with flame emoji
- Clear price comparison layout

## Images
**Hero Mockups:**
- 3D ebook stack mockup showing recognizable covers
- Two smartphones displaying ebook interfaces
- All with subtle drop shadows (shadow-md)
- Positioned below content on mobile

**VIP Section Visual:**
- Tablet showing planner interface
- Smartphone with audiobook interface
- Headphones graphic
- All elements with consistent shadow treatment

**Icons:**
- Heroicons or Font Awesome for check marks, shield, search
- Orange color for CTAs, green for confirmations
- 20px size for mobile readability

## Mobile Optimization
- Touch-friendly button sizes (minimum 44px height)
- Single column layout throughout
- Accordion FAQ for space efficiency
- Side-by-side comparison only for final CTA section
- Generous tap targets and spacing
- Fast-loading optimized images

## Key Conversion Elements
- Orange CTAs create strong visual hierarchy
- VIP section uses color psychology (orange warmth + exclusivity)
- Clean typography maintains professional credibility
- Strategic use of shadows adds depth without distraction
- Mobile-optimized spacing prevents accidental taps