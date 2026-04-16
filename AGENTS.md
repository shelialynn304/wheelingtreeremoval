# AGENTS.md

## Project
This repository contains static marketing pages for a local tree service website.
Primary goals:
1. Generate phone calls and quote requests
2. Rank locally in Google for tree-service searches
3. Keep pages fast, readable, mobile-friendly, and easy to maintain

This is a simple static site.
Preferred stack:
- HTML
- CSS
- JavaScript in separate files when behavior is needed
- Shared `style.css`
- Shared JS files when possible instead of repeating inline scripts

## Business context
The site targets local service searches around:
- Wheeling, WV
- Triadelphia, WV
- Moundsville, WV
- McMechen, WV
- Nearby Ohio Valley locations

Core services include:
- Tree removal
- Emergency tree removal
- Stump grinding
- Storm cleanup
- Dangerous tree assessment
- Lot and property cleanup

The main conversion actions are:
- Click-to-call phone links
- Quote request/contact forms
- High-visibility calls to action above the fold and near the bottom of each page

## Required page standards
For every page Codex edits or creates, follow these rules unless explicitly told otherwise.

### 1) Reuse the site structure
- Keep the site visually consistent with the rest of the repo
- Reuse the same header, nav, footer, buttons, and general layout patterns
- Use `style.css` instead of adding large inline style blocks
- Use separate JS files for interactive features whenever practical
- Do not dump huge amounts of CSS or JS directly into HTML unless the task specifically requires it

### 2) Make pages conversion-focused
Every service/location page should usually include:
- Strong hero section
- Clear local headline with service + city
- Short trust-building intro
- Benefits or “why choose us” section
- Service details section
- FAQ section
- Final CTA section
- Visible phone call button
- Contact or quote form section when appropriate

Prefer practical, direct copy over fluff.

### 3) Make pages SEO-focused
Each new indexable page should usually include:
- Unique `<title>`
- Unique meta description
- Canonical URL
- One clear `<h1>`
- Logical heading structure (`h2`, `h3`)
- Localized copy tied to the actual service and city
- Internal links to related service pages and homepage when relevant
- Natural keyword usage, not spammy repetition

Do not stuff keywords unnaturally.
Write for humans first, local SEO second.

### 4) Local page strategy
For city/service pages:
- Change the page title, meta description, H1, intro, FAQs, and CTA so they are actually localized
- Mention nearby service context naturally
- Do not create near-duplicate doorway junk
- Each page should contain enough unique copy to stand on its own

### 5) Mobile-first behavior
- Design for mobile first
- Ensure buttons are large and easy to tap
- Avoid giant walls of text
- Keep important CTA content near the top
- Avoid broken layouts, overflow, or tiny text
- Images should scale cleanly and not break the page

### 6) Performance and simplicity
- Prefer simple, durable code
- Do not add heavy frameworks
- Do not add dependencies unless clearly necessary
- Avoid bloated animations, excessive scripts, or gimmicks that slow the page
- Keep JS minimal and focused

### 7) Accessibility and semantics
- Use semantic HTML
- Include descriptive alt text for meaningful images
- Use labels on form fields
- Maintain reasonable color contrast
- Do not use div soup when proper elements exist

## File conventions
When creating or editing files:
- Keep CSS in `style.css` or small shared CSS files
- Keep JS in separate files such as:
  - `main.js`
  - `tracking.js`
  - `cost-calculator.js`
  - other clearly named files
- Prefer reusable sections over page-specific hacks
- Keep filenames descriptive and SEO-friendly

## Tracking and lead generation
Preserve and support lead tracking where present.

Important:
- Do not remove existing analytics or tracking scripts unless explicitly asked
- If adding CTA buttons, preserve clean selectors/classes for tracking
- Prefer consistent classes/IDs for:
  - call buttons
  - contact forms
  - quote buttons
  - calculator buttons

If adding new tracked elements, use clear names such as:
- `.call-now-btn`
- `.quote-btn`
- `#quote-form`
- `#cost-calc`

## Content style
Write in a way that fits a local service business:
- Clear
- Direct
- Trustworthy
- Not overly corporate
- Not cringe
- Not generic AI sludge

Good copy should sound like a real local business trying to get the lead.

Avoid:
- exaggerated claims that cannot be supported
- fake certifications, fake review counts, fake awards, fake years in business
- city stuffing
- robotic repetition

## Images
When using images:
- Prefer relevant tree-service or local-feeling visuals
- Do not break layout with oversized images
- Use responsive sizing
- Preserve image performance
- If a decorative image is added, make sure it still supports conversion instead of distracting from it

## Forms
If forms are used:
- Keep them short
- Ask only for useful lead info
- Make the submit CTA obvious
- Preserve current form handler if one already exists unless explicitly asked to change it
- Do not silently swap providers or endpoints

## Links and navigation
- Keep nav clean and consistent
- Make sure internal links work
- Use relative links consistent with the existing repo
- Add new pages to navigation only when appropriate
- If a page should be indexed and part of the site structure, also consider whether sitemap updates are needed

## Schema
When appropriate, add valid schema markup such as:
- LocalBusiness
- Service
- FAQPage
- WebPage
- BreadcrumbList

Only add schema that actually matches the visible page content.
Do not fabricate business facts.

## Editing rules
When working on existing pages:
- Preserve anything already working unless there is a good reason to change it
- Fix broken structure, weak headings, weak CTAs, duplicated sections, and obvious SEO issues
- Avoid random redesigns that break the rest of the site
- Favor clean upgrades over dramatic rewrites unless asked for a full rebuild

## Output preferences
When completing a task:
- Prefer giving full replacement files for small pages
- For larger changes, clearly separate:
  - HTML changes
  - CSS changes
  - JS changes
- Keep code copy-paste ready
- Do not leave half-finished placeholders unless explicitly requested
- If something depends on an external asset, clearly note the filename/path

## What to optimize for
In order of priority:
1. Lead generation
2. Mobile usability
3. Local SEO
4. Consistent branding/layout
5. Fast load times
6. Easy maintenance

## Avoid
- giant inline CSS blocks
- giant inline JS blocks
- fake testimonials
- fake service areas not relevant to the business
- keyword stuffing
- doorway-page junk
- unnecessary frameworks
- breaking existing working tracking or forms
- changing phone numbers, form endpoints, analytics IDs, or canonical domains unless explicitly asked

## Default assumptions for tree-service city pages
Unless told otherwise, new location pages should:
- link to `style.css`
- use the standard site nav
- include a phone CTA near the hero
- include a quote/contact section
- include localized FAQ content
- include a strong final CTA
- be written to rank and convert, not just exist

## If unsure
If there is a conflict, choose:
- consistency over novelty
- clarity over cleverness
- conversion over decoration
- maintainability over complexity

## Required template usage
For all new tree-service city pages, start from `template-tree-page.html`.

Do not create a new page from scratch unless explicitly instructed.
Replace placeholders such as:
- CITY
- STATE
- PAGE-SLUG
- YOURDOMAIN
- YOURNUMBER
- YOUREMAIL@example.com
- BUSINESS NAME

Keep the overall section order and conversion structure unless explicitly told to change it.