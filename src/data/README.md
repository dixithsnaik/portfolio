# Portfolio Data Guide

All portfolio content is managed through `portfolio.json`. Edit this file to update your portfolio without touching the code.

## Structure

### Personal Information
- `personal.name` - Your name (appears in header and footer)
- `personal.initials` - Logo initials (e.g., "AD")
- `personal.title` - Your job title
- `personal.description` - Short bio/description
- `personal.email` - Contact email
- `personal.phone` - Contact phone
- `personal.location` - Your location

### Social Links
- `social.github` - GitHub profile URL
- `social.linkedin` - LinkedIn profile URL
- `social.twitter` - Twitter profile URL

### Hero Section
- `hero.badge` - Availability badge text
- `hero.headline.line1` - First line of headline
- `hero.headline.line2` - Second line of headline (with gradient)
- `hero.description` - Hero description text
- `hero.cta.primary` - Primary button (View Work)
- `hero.cta.secondary` - Secondary button (Contact Me)

### Projects
- `projects.title` - Section title
- `projects.subtitle` - Section description
- `projects.items[]` - Array of project objects:
  - `id` - Unique identifier
  - `title` - Project name
  - `description` - Project description
  - `technologies` - Array of tech names
  - `image` - Image URL
  - `link` - Project URL
  - `github` - GitHub repository URL
  - `featured` - Boolean (true shows on home page)
  - `category` - Project category

### Tech Stack
- `techStack.title` - Section title
- `techStack.subtitle` - Section description
- `techStack.items[]` - Array of technology objects:
  - `name` - Technology name
  - `icon` - Icon name (must match lucide-react icon names)
  - `color` - Tailwind color class

### Experience
- `experience.title` - Section title
- `experience.subtitle` - Section description
- `experience.items[]` - Array of experience objects:
  - `year` - Date range
  - `role` - Job title
  - `company` - Company name
  - `description` - Job description

### About Page
- `about.title` - Page title
- `about.description` - Main description
- `about.stats[]` - Statistics array:
  - `label` - Stat label
  - `value` - Stat value
- `about.skills[]` - Skills array:
  - `title` - Skill title
  - `description` - Skill description
  - `icon` - Icon name
- `about.story[]` - Array of story paragraphs

### Contact
- `contact.title` - Section title
- `contact.subtitle` - Section description
- `contact.info[]` - Contact information array:
  - `label` - Info label
  - `value` - Info value
  - `link` - Link URL
  - `icon` - Icon name

### Navigation
- `navigation[]` - Array of navigation items:
  - `path` - Route path
  - `label` - Link label

## Adding New Projects

To add a new project, simply add a new object to `projects.items[]`:

```json
{
  "id": 7,
  "title": "My New Project",
  "description": "Project description here",
  "technologies": ["React", "TypeScript"],
  "image": "https://example.com/image.jpg",
  "link": "https://example.com",
  "github": "https://github.com/username/repo",
  "featured": false,
  "category": "Web App"
}
```

## Available Icons

Icons use Lucide React. Common icons:
- Code2, FileCode, Globe, Palette, Cpu, ImageIcon, Sparkles, Zap, GitBranch, Box, Code, Users, Mail, Phone, MapPin

Check [Lucide Icons](https://lucide.dev/icons/) for more options.

## Notes

- Images can be URLs or local paths (place in `public/` folder)
- All text fields support HTML (be careful with quotes)
- Featured projects appear on the home page (max 4 recommended)
- The portfolio automatically updates when you save the JSON file

