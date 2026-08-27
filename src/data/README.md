# Portfolio data

All copy lives in `portfolio.json`. Edit that file; the UI reads it directly.

## Personal
- `name`, `initials`, `title`, `tagline`, `description`
- `availability`, `location`, `email`, `phone`
- `resumeLink` — path under `public/` (current: `/files/Dixith_S_Naik_27_AUG_26.pdf`)

## Social
- `github`, `linkedin`, `twitter`

## Hero
- `eyebrow` — small caps line above the headline
- `headline` — one-sentence value proposition
- `description` — two facts, plain English
- `portraitCaption` — caption under the still
- `cta.primary` / `cta.secondary` — `{ text, link }`

## Projects
Each item:
- `id`, `title`, `context`, `category`, `featured`
- `problem`, `solution`, `outcome` — case-study fields (required)
- `description` — one-line fallback
- `technologies` — string array
- `image` — optional local path. If omitted, the UI typesets the title in a frame
- `link`, `github` — optional

## Tech stack
- `name` — label
- `icon` — Lucide export name mapped in `src/utils/data.js`

## Experience
- `role`, `company`, `location`
- `startDate`, `endDate` — `"MMM YYYY"` or `"Present"`
- `tag` — `"fulltime"` or `"internship"` (About page uses this for tenure)
- `description`

## About
- `title`, `description`, `story[]`
- `skills[]` — `{ title, description, icon }`
- `education` — `{ degree, institution, location, dates, cgpa }`
- `achievements[]`

## Contact / Footer / Navigation
- `contact.info[]` — `{ label, value, link, icon }`
- `footer.description`, `footer.copyright`
- `navigation[]` — `{ path, label }`

## Icons in `src/utils/data.js`
Code2, FileCode, Globe, Palette, Cpu, ImageIcon, Sparkles, Zap, GitBranch, Box, Code, Users, Mail, Phone, MapPin, Server, Database, Cloud, TestTube
