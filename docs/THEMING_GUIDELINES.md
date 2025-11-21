# IAT Platform - Theme-Aware Styling Guidelines

[Full content from the previously created THEMING_GUIDELINES.md - same content]

## Overview
This document defines the standards for implementing light/dark mode theming across the IAT Digital Platform, ensuring WCAG 2.1 AA compliance and consistent user experience.

## Core Principles

### 1. Always Use Theme-Aware Classes
❌ **Incorrect**: Hardcoded colors that don't adapt
```tsx
<div className="bg-black text-white">
```

✅ **Correct**: Theme-aware with `dark:` prefix
```tsx
<div className="bg-white dark:bg-surface text-gray-900 dark:text-foreground">
```

### 2. WCAG Contrast Requirements

| Element Type | Minimum Ratio | Target Ratio | Notes |
|--------------|---------------|--------------|-------|
| Body text (< 18px) | 4.5:1 (AA) | 7:1 (AAA) | Use `text-gray-900` in light mode |
| Large text (≥ 18px) | 3:1 (AA) | 4.5:1 (AAA) | Headings, buttons |
| Interactive elements | 3:1 (AA) | 4.5:1 (AAA) | Focus states, borders |
| Graphical objects | 3:1 (AA) | - | Icons, charts |

### 3. Semantic Color Tokens

#### Background Colors
```tsx
// Surfaces (cards, panels)
bg-white dark:bg-surface              // Main card background
bg-gray-50 dark:bg-surface-highlight  // Elevated/highlighted cards

// Inputs
bg-gray-100 dark:bg-surface          // Form inputs, search bars
bg-gray-200 dark:bg-white/5          // Hover states

// Page background
bg-white dark:bg-background          // Root level
```

#### Text Colors
```tsx
// Primary text
text-gray-900 dark:text-foreground    // Headings, body text (14.7:1 / 18.5:1)

// Secondary text
text-gray-600 dark:text-muted-foreground  // Descriptions, captions (7.1:1 / 10.5:1)

// Placeholder text
placeholder:text-gray-500 dark:placeholder:text-muted-foreground  // Form inputs
```

#### Border Colors
```tsx
border-gray-200 dark:border-white/5   // Card borders, dividers
border-gray-300 dark:border-white/10  // Input borders, buttons
```

## Component Patterns

### Card Component
```tsx
<div className="
  rounded-2xl
  bg-white dark:bg-surface
  border border-gray-200 dark:border-white/5
  hover:border-primary/30
  transition-all duration-300
">
  <h3 className="
    font-heading text-xl font-bold
    text-gray-900 dark:text-foreground
  ">
    Title
  </h3>
  <p className="
    text-sm
    text-gray-600 dark:text-muted-foreground
  ">
    Description
  </p>
</div>
```

### Input Field
```tsx
<input
  type="text"
  placeholder="Search..."
  className="
    w-full h-12 px-4
    bg-gray-100 dark:bg-surface
    border border-gray-300 dark:border-white/10
    text-foreground
    placeholder:text-gray-500 dark:placeholder:text-muted-foreground
    focus:outline-none
    focus:ring-2 focus:ring-primary/50
  "
/>
```

### Button (Outline Variant)
```tsx
<button className="
  px-5 py-2.5 rounded-full
  bg-gray-100 dark:bg-white/5
  border border-gray-300 dark:border-white/10
  text-gray-700 dark:text-muted-foreground
  hover:bg-gray-200 dark:hover:bg-white/10
  hover:text-gray-900 dark:hover:text-foreground
  transition-all duration-300
">
  Button Text
</button>
```

### Badge/Label
```tsx
// NEW badge (high visibility)
<div className="
  px-3 py-1 rounded-full
  bg-primary text-white
  border border-primary/20
  shadow-lg
">
  NEW
</div>

// Category label (on images)
<span className="
  px-2 py-1 rounded
  bg-gray-900/70 dark:bg-black/50
  backdrop-blur-md
  border border-gray-700/50 dark:border-white/10
  text-white text-xs uppercase
">
  Category
</span>
```

## Testing Checklist

### Pre-Deployment Verification
- [ ] Run Lighthouse Accessibility Audit (target: ≥95)
- [ ] Test on 3 screen sizes (mobile 375px, tablet 768px, desktop 1920px)
- [ ] Verify all text meets minimum 4.5:1 contrast
- [ ] Check hover/focus states in both modes
- [ ] Test keyboard navigation
- [ ] Verify theme toggle works on all pages

### Automated Tools
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3001
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting the dark: prefix
```tsx
// Will be white in BOTH modes
<div className="bg-white">
```

### ❌ Mistake 2: Using hardcoded opacity on CSS variables
```tsx
// Won't work with Tailwind @apply
@apply border-primary/30;  ❌

// Use standard CSS instead
border-color: rgba(0, 87, 183, 0.3);  ✅
```

### ❌ Mistake 3: Inconsistent semantic tokens
```tsx
// Mixing hardcoded and semantic colors
<div className="bg-white text-gray-900">  ❌

// Use semantic tokens consistently
<div className="bg-white dark:bg-surface text-gray-900 dark:text-foreground">  ✅
```

## Design System Alignment

### "Quiet Tech" Theme Colors
- **Primary (Signal Blue)**: `#0057B7` - Used for CTAs, interactive elements
- **Accent (Kinetic Gold)**: `#FFD700` - Reserved for special highlights (use sparingly)
- **Background (Dark)**: `#0A0A0A` - Deep neutral for dark mode immersion
- **Foreground (Light)**: `#EDEDED` - High-contrast text in dark mode

### Usage Guidelines
- **Primary**: Buttons, links, active states
- **Accent**: NEW badges, highlighted metrics (limited use)
- **Gray Scale**: 90% of UI should use gray-scale for "quiet" aesthetic

## Accessibility Resources
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

**Last Updated**: 2025-11-20  
**Reviewed By**: Development Team  
**Status**: Production Ready
