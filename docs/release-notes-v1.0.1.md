# Release Notes: v1.0.1

**Release Date:** November 24, 2025  
**Type:** Patch Release (Critical Bug Fixes)  
**Status:** 🟢 Production Ready

---

## 🎯 Release Highlights

This patch release focuses on **production safety and code quality**. All critical build configuration issues from v1.0.0 have been resolved.

---

## 🔴 Critical Fixes

### 1. Build Quality Gates Enabled
**Problem:** v1.0.0 had build checks disabled, allowing bad code to reach production.

**Solution:**
```typescript
// next.config.ts (BEFORE - DANGEROUS)
eslint: { ignoreDuringBuilds: true }
typescript: { ignoreBuildErrors: true }

// next.config.ts (AFTER - SAFE)
eslint: { ignoreDuringBuilds: false }
typescript: { ignoreBuildErrors: false }
```

**Impact:** All future deployments now require passing ESLint and TypeScript checks.

---

### 2. Code Quality Fixes
**Fixed 6 ESLint errors** across the codebase:
- `react/no-unescaped-entities` violations in pages and components
- Unescaped quotes replaced with HTML entities

**Files affected:**
- Contact page (1 fix)
- Design system page (2 fixes)
- Partners page (2 fixes)
- Privacy page (1 fix)
- Terms page (2 fixes)
- Contact form component (1 fix)

**Build status:** ✅ All checks now pass (`npm run build` successful in 6.7s)

---

## ✅ Improvements

### Homepage Performance
- **Refactored to Server Component** - Homepage now uses `getTranslations` (async) instead of `useTranslations` hook
- **Benefits:** Better initial page load, SEO-friendly rendering

---

## 📚 Documentation

### New Documents
1. **Rate Limiting Migration Plan** (`docs/rate-limiting-migration.md`)
   - Complete guide for v1.1 upgrade to Vercel KV
   - Includes code samples, testing strategy, rollback plan
   - Cost analysis (free tier coverage confirmed)

2. **ESLint Fixes Report** (`docs/eslint_fixes_report.md`)
   - Detailed breakdown of all fixes applied
   - Line-by-line changes documented

3. **CHANGELOG.md**
   - Industry-standard changelog format
   - Complete version history

### Updated Documents
- `docs/architecture.md` - Corrected React version (18.3.1), added v1.0.1 changes
- `package.json` - Version bumped to 1.0.1

---

## ⚠️ Known Limitations

### 1. Rate Limiting (Non-Critical)
**Current:** In-memory Map implementation  
**Issue:** Resets on serverless cold starts  
**Impact:** Low - Temporary bypass possible, but rare  
**Mitigation:** Scheduled upgrade to Vercel KV in v1.1 (December 2025)

### 2. Dependency Warnings
**Status:** `legacy-peer-deps` flag required  
**Cause:** Next.js 15 ecosystem still maturing  
**Impact:** None on functionality  
**Action:** Monitoring for upstream fixes

---

## 🚀 Deployment Instructions

### For Production Deployment:

1. **Pull latest code:**
```bash
   git pull origin main
```

2. **Verify build:**
```bash
   npm run build
   # Should complete successfully in ~6-7 seconds
```

3. **Deploy to Vercel:**
```bash
   vercel --prod
```

4. **Post-deployment verification:**
   - [ ] Homepage loads correctly
   - [ ] Contact form submits successfully
   - [ ] Language switcher works (UK/EN)
   - [ ] Dark/light mode toggles
   - [ ] Map component loads

---

## 📊 Comparison: v1.0.0 → v1.0.1

| Metric | v1.0.0 | v1.0.1 | Change |
|--------|--------|--------|--------|
| ESLint Checks | ❌ Disabled | ✅ Enabled | 🟢 Fixed |
| TypeScript Checks | ❌ Disabled | ✅ Enabled | 🟢 Fixed |
| ESLint Errors | 6 | 0 | 🟢 -6 |
| TypeScript Errors | 0 | 0 | ✅ Clean |
| Build Time | ~7s | ~6.7s | 🟢 Faster |
| Homepage | Client Component | Server Component | 🟢 Better |
| Documentation | Partial | Complete | 🟢 Improved |

---

## 🎯 Next Steps (v1.1 Roadmap)

### Scheduled for December 2025:
1. **Rate Limiting Upgrade** - Migrate to Vercel KV (priority: high)
2. **Performance Audit** - Lighthouse testing and optimization
3. **Monitoring** - Sentry integration for error tracking
4. **Analytics** - Vercel Analytics or GA4 setup

### Under Consideration:
- Accessibility audit (manual testing)
- Load testing
- Security penetration testing

---

## 📞 Support

**Questions or Issues?**
- Technical: Review `docs/architecture.md`
- Rate Limiting: See `docs/rate-limiting-migration.md`
- Deployment: Check Vercel dashboard logs

**Emergency Rollback:**
```bash
# If v1.0.1 has critical issues
vercel rollback
# Or redeploy v1.0.0
git checkout v1.0.0
vercel --prod --force
```

---

## ✅ Approval Status

**Code Review:** ✅ Passed  
**Build Verification:** ✅ Passed  
**Documentation:** ✅ Complete  
**Production Ready:** ✅ Yes

**Approved by:** Lead Architect  
**Date:** November 24, 2025

---

**Thank you for using IAT Digital Platform v1.0.1!**
