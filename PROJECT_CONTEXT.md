# Bret Kiefer Website Project Context

## Project Summary

This project is a static personal website draft for Bret Kiefer, intended to feel like a polished `bretkiefer.com` personal brand / resume site.

The site is built with plain HTML, CSS, and JavaScript. It does not require a build step, package install, or dev server. Open `index.html` directly in a browser to view it.

## Current Files

- `index.html` - main website markup and content
- `styles.css` - full responsive visual styling
- `script.js` - mobile navigation toggle and active navigation highlighting
- `assets/` - image assets used by the site
- `handoff/` - a copied snapshot of the current website files and assets

## Handoff Copy

A copy of the current website has been placed in:

```text
handoff/
```

That folder contains:

- `handoff/index.html`
- `handoff/styles.css`
- `handoff/script.js`
- `handoff/assets/`

## Design Direction

The visual style was inspired by:

```text
https://about.richielokay.com/
```

The site was not copied directly. It uses a similar personal-brand language:

- oversized editorial serif typography
- fixed pill-style navigation
- bold first-screen hero
- numbered focus sections
- case-study-style content cards
- large experience rows
- dark About and Contact sections
- marquee-style skills and contact bands

## Website Sections

The current homepage includes:

- Hero section with the Dubrovnik/RIT Croatia photo as the main visual
- Three focus panels: Learn, Build, Lead
- Selected Work / Projects section
- Experience section with company logos
- About section with studio headshot
- Leadership / Garden of Hope section
- Education section
- Skills marquee
- Contact form using `mailto:bretmkiefer@gmail.com`
- Footer

## Personal Content Used

The content was drafted from:

- Bret Kiefer LinkedIn profile screenshots
- Exported LinkedIn profile PDF
- CSJB newsletter feature about the Eagle Scout Garden of Hope project
- User-provided image assets and logos

Important public links:

- LinkedIn: `https://www.linkedin.com/in/bretkiefer/`
- CSJB Garden of Hope feature: `https://www.csjb.org/newsletter/updates-from-the-sisters-march-2022`

## Core Profile Details

Name:

```text
Bret Kiefer
```

Location:

```text
Chester, New Jersey
```

Email:

```text
bretmkiefer@gmail.com
```

Current headline:

```text
Agentic Intern @ Queen One | Management Information Systems Student at RIT Saunders College of Business
```

Positioning:

```text
Leadership-minded MIS student exploring AI, VR, business systems, service, and emerging technology.
```

## Experience Content

### Queen One

Role:

```text
Agentic Intern
```

Dates:

```text
May 2026 - Present
```

Location:

```text
Brooklyn, NY
```

Current site copy:

```text
Supporting database design, collaborative workflows, and agentic business systems in an on-site Brooklyn technology environment.
```

Logo asset:

```text
assets/queen-one-logo.png
```

### Nitroflex Gym

Role:

```text
Sales Representative
```

Dates:

```text
Sep 2022 - Present
```

Current site copy:

```text
Engaged prospective and current members, promoted membership options, supported front office operations, handled inquiries, and contributed to retention.
```

Logo asset:

```text
assets/nitroflex-logo.png
```

### Primo Fare LTD

Role:

```text
AI Optimization / Software Configuration Intern
```

Dates:

```text
Mar 2025 - Aug 2025
```

Current site copy:

```text
Collaborated on ecommerce system integration, software configuration, and Amazon optimization to support a smoother customer and operations experience.
```

Logo asset:

```text
assets/primo-fare-logo.png
```

### Aura

Role:

```text
Game Alpha/Beta Tester
```

Dates:

```text
May 2021 - Dec 2022
```

Current site copy:

```text
Tested Zenith: The Last City across VR gameplay, user experience, performance, and feature functionality, providing feedback on bugs, usability, and balance.
```

Logo asset:

```text
assets/aura-logo.png
```

## Education Content

### Rochester Institute of Technology - Saunders College of Business

```text
Bachelor of Science, Management Information Systems
Aug 2024 - May 2027
GPA 3.43
Dean's List
```

### RIT Croatia

```text
Bachelor of Science, Management Information Systems, General
Jan 2026 - May 2026
Dubrovnik campus semester abroad
```

### West Morris Mendham High School

```text
College preparatory and advanced high school diploma program
2019 - 2024
```

## Leadership Content

The leadership section highlights Bret's Eagle Scout project, featured by the Community of St. John Baptist.

Key idea:

```text
Garden of Hope Eagle Scout work at St. Marguerite's Retreat House, including team mobilization, greenhouse framing, compost bin construction, bed preparation, hedge trimming, cleanup, and restoration work.
```

Current link:

```text
https://www.csjb.org/newsletter/updates-from-the-sisters-march-2022
```

## Honors And Awards Mentioned

- Eagle Scout
- Foundational Leadership for Career Success Certificate
- Dean's List

## Skills Mentioned

The site includes or references:

- Database Design
- AI Optimization
- Virtual Reality
- Customer Service
- Customer Support
- Teaching
- Collaborative Work
- User Interaction
- Front Office Operations
- Software Configuration
- Trello
- QuickBooks

## Image Assets

### Hero Image

```text
assets/rit-saunders-banner.png
```

Despite the filename, this is currently the Dubrovnik/RIT Croatia photo. It is used as the main full-color hero image and in the Selected Work section.

### About Portrait

```text
assets/bret-kiefer-profile.png
```

This is the studio headshot. It is currently shown in the About section with a grayscale editorial treatment.

### Logos

```text
assets/queen-one-logo.png
assets/nitroflex-logo.png
assets/primo-fare-logo.png
assets/aura-logo.png
```

The logo badges are styled in `styles.css` under `.company-logo`.

Current intended behavior:

- Queen One: circular logo badge, edge-to-edge fill
- Nitroflex: circular logo badge, edge-to-edge fill
- Primo Fare: circular logo badge with slight padding
- Aura: dark circular badge with centered white mark

## Styling Notes

Important CSS areas:

- `.hero-image` controls the main Dubrovnik hero photo.
- `.about-media img` controls the black-and-white headshot.
- `.experience-row` controls the work timeline rows.
- `.company-logo` and related logo-specific classes control the logo badges.
- `.skill-marquee` and `.talk-marquee` control scrolling text bands.
- mobile responsiveness starts around the `1020px` and `720px` media queries.

## Recent User Preferences

The latest user preferences were:

- make the Dubrovnik image the main hero photo
- make the hero photo full color, not black and white
- make the hero photo larger
- add company logos to the Experience section
- make Queen One and Nitroflex circular logos fill their circular badges
- keep the personal headshot available in the About section

## Known Caveats

- The project is currently uncommitted in git.
- The logo image filenames are final from the website's perspective, but the original source images came from Downloads/Temp paths and are not required for the site to run.
- `assets/rit-saunders-banner.png` is a legacy filename and now represents the Dubrovnik image. It could be renamed later for clarity, but references would need to be updated in `index.html`.
- The contact form uses `mailto:` and will open the visitor's email client. It is not connected to a backend form service.

## How To Preview

Open this file in a browser:

```text
index.html
```

Or open the copied handoff version:

```text
handoff/index.html
```

No install command is required.
