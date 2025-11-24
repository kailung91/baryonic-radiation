# Changelog

All notable changes to the IAT Digital Platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.1] - 2025-11-24

### 🔴 Critical Fixes
- **Enabled ESLint checks in production builds** - `next.config.ts` now enforces code quality
- **Enabled TypeScript type checking in builds** - All type errors must be resolved before deployment

### ✅ Fixed
- Fixed 6 `react/no-unescaped-entities` ESLint errors:
  - `src/app/[locale]/contact/page.tsx` (1 error)
  - `src/app/[locale]/design-system/page.tsx` (2 errors)
  - `src/app/[locale]/partners/page.tsx` (2 errors)
  - `src/app/[locale]/privacy/page.tsx` (1 error)
  - `src/app/[locale]/terms/page.tsx` (2 errors)
  - `src/components/contact-form.tsx` (1 error)
- Replaced all unescaped quotes with HTML entities (`&apos;`, `&quot;`)

### 🏗️ Changed
- **Refactored homepage to Server Component** - Improved initial load performance
- **Updated React version in documentation** - Clarified use of stable 18.3.1 vs planned 19.0.0-rc
- **Build time improved** - Successful builds complete in ~6.7 seconds

### 📚 Documentation
- Created `docs/rate-limiting-migration.md` - Complete migration plan for v1.1 Vercel KV upgrade
- Created `docs/eslint_fixes_report.md` - Detailed report of all code quality fixes
- Updated architecture documentation to reflect v1.0.1 changes
- Added version history section to technical docs

### ⚠️ Known Issues
- In-memory rate limiting resets on serverless cold starts (migration to Vercel KV planned for v1.1)
- `legacy-peer-deps` flag required due to Next.js 15 ecosystem maturity

---

## [1.0.0] - 2025-11-24

### 🎉 Initial Release

#### Added
- **Next.js 15 App Router** - Modern React Server Components architecture
- **Internationalization** - Full Ukrainian/English support via next-intl
- **Contact Form** - Integration with Resend email service and Zod validation
- **Interactive Map** - MapLibre GL JS with custom Ukrainian tile server
- **Design System** - "Quiet Tech" aesthetic with glassmorphism and dark mode
- **SEO Optimization** - Automated sitemap generation and robots.txt
- **Accessibility** - WCAG 2.1 AA compliant with semantic HTML and keyboard navigation

#### Components
- Responsive header with language switcher
- Footer with company information
- Product catalog pages (Atlases, Maps, Globes, Digital)
- About/Partners/Contact pages
- Interactive map component with lazy loading

#### Technical
- TypeScript 5.x with strict mode
- Tailwind CSS 3.4.1 with custom design tokens
- Framer Motion animations
- React Hook Form + Zod validation
- next-themes for dark/light mode
- Radix UI primitives

#### Infrastructure
- Optimized for Vercel deployment
- Static generation where possible
- Image optimization with next/image
- Font optimization with next/font

### ⚠️ Critical Issues (Fixed in v1.0.1)
- ESLint checks disabled in production builds
- TypeScript type checking disabled in production builds

---

## [Unreleased]

### Planned for v1.1 (December 2025)
- **Rate Limiting Upgrade** - Migrate to Vercel KV (Redis) for persistent rate limiting
- **Performance Audit** - Complete Lighthouse audit and optimization
- **Accessibility Testing** - Manual screen reader and keyboard navigation testing
- **Monitoring** - Integrate Sentry for error tracking
- **Analytics** - Add Vercel Analytics or Google Analytics 4

### Under Consideration for v1.2+
- **B2B Portal** - Authentication with NextAuth.js
- **User Dashboard** - Download system for registered users
- **PWA Features** - Offline support and app manifest
- **A/B Testing** - Feature flags and variant testing
- **Advanced SEO** - Structured data (JSON-LD)

---

## Version Naming Convention

- **Major (X.0.0)** - Breaking changes, architectural shifts
- **Minor (1.X.0)** - New features, non-breaking changes
- **Patch (1.0.X)** - Bug fixes, documentation, minor improvements

---

## Links

- [Technical Documentation](./docs/architecture.md)
- [Rate Limiting Migration Plan](./docs/rate-limiting-migration.md)
- [ESLint Fixes Report](./docs/eslint_fixes_report.md)
- [GitHub Repository](https://github.com/your-org/iat-digital-platform)
- [Production Site](https://iat.ua)

---

**Maintained by:** IAT Development Team  
**Last Updated:** November 24, 2025
