---
name: talbri-brand
description: >
    Brand system reference for building TalBri web pages and landing pages.
    Use this skill whenever working on any TalBri HTML/CSS/Tailwind project —
    including new pages, components, sections, social post templates, or UI
    elements. Covers colors, typography, spacing, logo rules, figure/character
    usage, CTA styling, and layout conventions extracted from the official
    TalBri brand guidelines. Always consult this skill before writing any
    TalBri-related markup or CSS.
---

# TalBri Brand System — Landing Page Reference

TalBri is a Slovak talent-matching platform connecting top young talent (top 2–20 %) with companies and organisations. The brand is young, energetic, direct, and people-first.

---

## 1. Colors

### Primary Palette

| Token name         | Hex       | Usage                                    |
| ------------------ | --------- | ---------------------------------------- |
| `brand-dark`       | `#0C0E1B` | Primary dark background, dominant text   |
| `brand-light-blue` | `#ACDEEA` | Background (companies segment), sections |
| `brand-light-pink` | `#FBE8E1` | Background (talent segment), sections    |
| `brand-orange`     | `#CE4614` | **CTA only** — buttons, calls to action  |
| `brand-white`      | `#FFFFFF` | Text on dark, backgrounds                |

### Secondary Palette

| Token name          | Hex       | Usage                                        |
| ------------------- | --------- | -------------------------------------------- |
| `brand-purple-dark` | `#522DCB` | Organisation segment colour, figures         |
| `brand-purple-mid`  | `#872DCB` | Secondary purple accent, figures             |
| `brand-dark-alt`    | `#1F212D` | Secondary dark surface                       |
| `brand-sky`         | `#C0E6EF` | Lighter blue tint, supplementary backgrounds |
| `brand-cyan`        | `#268EC1` | Company segment accent, figures              |
| `brand-cream`       | `#FDF1ED` | Very light warm background                   |

### Segment colour mapping

Each segment has a dedicated colour used on figures and accents:

- **Young talent** → `#268EC1` (cyan/blue)
- **Company** → `#872DCB` (purple-mid)
- **Organisation** → `#522DCB` (purple-dark)

Figures without a segment use a tonal colour matching the background (same hue, lower opacity).

### CTA rule

**`#CE4614` orange is reserved exclusively for CTA elements.** Never use it for decorative purposes or backgrounds. It must always be clearly associated with an action (button, link).

### Tailwind config — extend colors

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'tb-dark':        '#0C0E1B',
      'tb-dark-alt':    '#1F212D',
      'tb-light-blue':  '#ACDEEA',
      'tb-sky':         '#C0E6EF',
      'tb-light-pink':  '#FBE8E1',
      'tb-cream':       '#FDF1ED',
      'tb-orange':      '#CE4614',
      'tb-purple-dark': '#522DCB',
      'tb-purple-mid':  '#872DCB',
      'tb-cyan':        '#268EC1',
    },
  },
},
```

---

## 2. Typography

**Font:** [Outfit](https://fonts.google.com/specimen/Outfit) — clean geometric sans-serif. Load via Google Fonts.

```html
<link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
    rel="stylesheet" />
```

```css
body {
    font-family: "Outfit", sans-serif;
}
```

**Letter spacing:** Always `-2%` (`letter-spacing: -0.02em`) across all styles.

### Web typographic scale

| Level  | Size | Line-height | Weight         | Tailwind approx.                       |
| ------ | ---- | ----------- | -------------- | -------------------------------------- |
| H1     | 56px | 64px        | Bold (700)     | `text-5xl leading-[64px] font-bold`    |
| H2     | 40px | 48px        | SemiBold (600) | `text-[40px] leading-12 font-semibold` |
| H3     | 32px | 40px        | Medium (500)   | `text-[32px] leading-10 font-medium`   |
| Body 1 | 24px | 28px        | Regular (400)  | `text-2xl leading-7 font-normal`       |
| Body 2 | 16px | 20px        | Regular (400)  | `text-base leading-5 font-normal`      |

Always add `tracking-[-0.02em]` to every text element.

---

## 3. Spacing & Grid

All spacing is based on an **8px grid**. Use multiples of 8 (or 4 for fine-grained steps).

### Key spacing values for landing page sections

| Purpose                   | Value | Tailwind class |
| ------------------------- | ----- | -------------- |
| Section vertical padding  | 120px | `py-[120px]`   |
| Container horizontal pad  | 80px  | `px-20`        |
| Between heading and body  | 16px  | `gap-4`        |
| Between heading and CTA   | 64px  | `mt-16`        |
| Between sections/elements | 40px  | `mt-10`        |
| Nav items gap             | 16px  | `gap-4`        |

Canvas width target: **1440px** (`max-w-[1440px] mx-auto`).

---

## 4. Logo

### Rules

- Always use the official logo asset (SVG/PNG). **Never recreate or approximate it.**
- Maintain the protective zone: minimum clearance on all sides equal to the height of the "T" letterform in the logo.
- On dark backgrounds: use the full-colour logo with white wordmark.
- On light backgrounds: use the full-colour variant.
- Black & white variant only when no colour is possible.

### Logo misuse — never do this:

- Change any colour in the logo
- Apply shadows, gradients, or outlines
- Rotate or skew
- Place on a clashing/low-contrast background
- Fill the icon with a flat single colour
- Rearrange the icon and wordmark

### In HTML

```html
<!-- Always wrap in a clearance container -->
<div class="p-[1em]">
    <!-- 1em = approx one "T" height -->
    <img
        src="/assets/logo/talbri-logo.svg"
        alt="TalBri"
        class="h-10" />
</div>
```

---

## 5. CTA Button

Orange (#CE4614) is the **only** colour for primary CTA buttons.

```html
<button
    class="
  bg-[#CE4614] text-white
  font-['Outfit'] font-semibold
  text-base tracking-[-0.02em]
  px-6 py-3 rounded
  hover:bg-[#b33d11]
  transition-colors
">
    Ako to funguje
</button>
```

Secondary/ghost actions use no fill; the orange is never diluted with outlines or tints.

---

## 6. Figures (Illustrated Characters)

Figures are the primary visual element of TalBri. They represent the three communities: talent, companies, organisations.

### Key rules

- Figures must **always** relate to the background colour they sit on — matching tone/segment.
- In multi-figure graphics with 3 or fewer figures, colour indicates segment (talent = cyan, company = purple-mid, org = purple-dark).
- With **4+ figures**, all must share one colour — no mixed colours.
- Figures are content, not decoration — they must support the message.
- Figures may bleed to edges or be partially cropped for dynamism.
- Always preserve breathing room around figures using the 8px grid.
- Never overlap figures with text or CTA zones.

### Usage count guide

| Count | Use case                               |
| ----- | -------------------------------------- |
| 1     | Hero / strong single statement         |
| 2–3   | Interaction, relationship, partnership |
| 4+    | Community; only with uniform colour    |

### Dark background variant

On `#0C0E1B` dark, figures appear as a darker tonal overlay (`#1F212D`/`#252736`) — ghost-like, subtle. This is the background decorative use. Coloured figures (segment colours) appear on top of or beside content.

---

## 7. Section Background Combinations

Follow these proven combinations from the guidelines:

| Background      | Text colour | Figure colour      | CTA       |
| --------------- | ----------- | ------------------ | --------- |
| `#0C0E1B` dark  | White       | Dark tonal ghost   | `#CE4614` |
| `#ACDEEA` blue  | `#0C0E1B`   | Lighter blue tonal | `#CE4614` |
| `#FBE8E1` pink  | `#0C0E1B`   | Lighter pink tonal | `#CE4614` |
| `#FFFFFF` white | `#0C0E1B`   | Segment colour     | `#CE4614` |

---

## 8. Navigation

```html
<nav class="flex items-center justify-between px-20 py-5 max-w-[1440px] mx-auto">
    <img
        src="/assets/logo/talbri-logo.svg"
        alt="TalBri"
        class="h-8" />
    <ul class="flex gap-4 items-center text-base tracking-[-0.02em] font-medium">
        <li><a href="#">Ako to funguje?</a></li>
        <li><a href="#">Registrácia</a></li>
        <li><a href="#">Tím</a></li>
        <li><a href="#">Kontakt</a></li>
    </ul>
</nav>
```

---

## 9. Icon Set

Use **Remix Icon** — filled variant with square/angular character.

```html
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet" />

<i class="ri-arrow-right-line"></i>
```

Icons must visually match the Outfit typeface character — no rounded or organic icon sets.

---

## 10. Golden Rules Checklist

Before shipping any component or page, verify:

- [ ] Only Outfit font used
- [ ] Letter spacing `-0.02em` on all text
- [ ] All spacing in multiples of 8px (or 4px)
- [ ] Orange (`#CE4614`) used **only** on CTAs
- [ ] Logo has protective clearance
- [ ] Figures match their background segment colour
- [ ] 4+ figures = single uniform colour
- [ ] No shadows, gradients, or outlines on the logo
- [ ] Sufficient air around figures — they don't crowd text
- [ ] Hierarchy is immediately clear at first glance
- [ ] Only Remix Icon (filled) used for iconography
