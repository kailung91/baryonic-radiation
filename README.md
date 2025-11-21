# IAT Digital Platform

> Modern digital platform for the Institute of Advanced Technologies featuring cartographic products, GIS tools, and educational resources.

## 🎨 Design Philosophy

**"Quiet Tech / Restrained Future"** - A minimalist, high-contrast interface that prioritizes content over decoration.

- **Signal Blue** (#0057B7): Primary interactions
- **Kinetic Gold** (#FFD700): Accent highlights (limited use)
- **Deep Neutral** (#0A0A0A): Dark mode background
- **Clean Typography**: Kyiv Type Sans + Inter

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

**Development server**: http://localhost:3001

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── products/           # Product catalog
│   ├── gis/                # Interactive GIS tools
│   ├── privacy/            # Legal pages
│   └── terms/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   └── map/                # MapLibre integration
├── lib/
│   ├── data.ts             # Mock data (CMS pending)
│   └── utils.ts            # Utility functions
docs/
├── THEMING_GUIDELINES.md   # Theme-aware styling standards
├── COMPONENT_EXAMPLES.md   # Copy-paste component library
├── AUDIT_RESULTS.md        # Code audit findings
└── THEME_TOGGLE_TEST.md    # Testing checklist
```

## 🎨 Development Standards

### Theme-Aware Styling
All components must support light/dark mode with WCAG 2.1 AA compliance.

**Required reading**: [`docs/THEMING_GUIDELINES.md`](./docs/THEMING_GUIDELINES.md)

**Quick reference**:
```tsx
// ✅ Correct
<div className="bg-white dark:bg-surface text-gray-900 dark:text-foreground">

// ❌ Incorrect
<div className="bg-white text-black">
```

### Component Examples
See [`docs/COMPONENT_EXAMPLES.md`](./docs/COMPONENT_EXAMPLES.md) for production-ready patterns.

### Code Quality
- **ESLint**: Enforces Tailwind class ordering and prevents hardcoded colors
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (run on save)

## 🧪 Testing & QA

### Accessibility Audit
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3001
```

**Target**: Accessibility score ≥ 95/100

### Manual Testing Checklist
- [ ] Theme toggle works on all pages
- [ ] All text meets 4.5:1 contrast minimum
- [ ] Keyboard navigation functional
- [ ] Mobile responsive (375px, 768px, 1920px)
- [ ] No console errors

See [`docs/THEME_TOGGLE_TEST.md`](./docs/THEME_TOGGLE_TEST.md) for full checklist.

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15.0.3 |
| React | React 19 RC | 19.0.0-rc |
| Styling | Tailwind CSS | 3.4.1 |
| Maps | MapLibre GL JS | 5.0.0 |
| Animations | Framer Motion | 12.23.24 |
| State | Zustand | - |
| Theme | next-themes | - |
| Icons | Lucide React | - |

## 🌍 Pages Overview

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage with hero & features | ✅ Complete |
| `/products` | Product catalog with filters | ✅ Theme-aware |
| `/products/[slug]` | Product detail pages | ⚠️ Needs theme update |
| `/gis` | Interactive GIS demo | ✅ Theme-aware |
| `/privacy` | Privacy Policy | ✅ Theme-aware |
| `/terms` | Terms of Service | ✅ Theme-aware |

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Create `.env.local`:
```env
# Future CMS integration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Analytics (future)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### CI/CD
GitHub Actions automatically:
- Runs `npm run lint`
- Builds the project
- Runs Lighthouse accessibility audit
- Uploads results as artifacts

See [`.github/workflows/ci.yml`](./.github/workflows/ci.yml)

## 🔧 Known Issues & Roadmap

### Active Issues
- [ ] Framer Motion peer dependency warning with React 19 RC
- [ ] next-auth integration blocked (B2B Portal)
- [ ] CMS (Sanity.io) not yet integrated

### Roadmap
- [ ] Internationalization (i18n) - Ukrainian/English
- [ ] CMS integration for dynamic content
- [ ] B2B Portal with authentication
- [ ] Enhanced homepage hero animations
- [ ] Performance optimization (target: LCP < 1.5s)

## 📚 Documentation

- **Theming Guidelines**: [`docs/THEMING_GUIDELINES.md`](./docs/THEMING_GUIDELINES.md)
- **Component Library**: [`docs/COMPONENT_EXAMPLES.md`](./docs/COMPONENT_EXAMPLES.md)
- **Code Audit**: [`docs/AUDIT_RESULTS.md`](./docs/AUDIT_RESULTS.md)
- **Testing Checklist**: [`docs/THEME_TOGGLE_TEST.md`](./docs/THEME_TOGGLE_TEST.md)

## 🤝 Contributing

1. **Follow theming guidelines** - All new components must be theme-aware
2. **Run linter before commit** - `npm run lint`
3. **Test both light/dark modes** - Toggle and verify
4. **Maintain accessibility** - Minimum 4.5:1 contrast
5. **Document patterns** - Add to `COMPONENT_EXAMPLES.md` if reusable

## 📄 License

[License Type] - Institute of Advanced Technologies

---

**Version**: 1.0.0-beta  
**Last Updated**: 2025-11-20  
**Maintained By**: IAT Development Team
