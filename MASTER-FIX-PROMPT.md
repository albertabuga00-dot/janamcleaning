# 🛠️ JANAM CLEANING WEBSITE — MASTER FIX PROMPT

**Generated:** May 8, 2026  
**Status:** Ready for Implementation  
**Total Issues:** 62  
**Estimated Fix Time:** 20-25 hours  

---

## 📌 HOW TO USE THIS PROMPT

This prompt provides a complete roadmap for fixing all identified issues on your website. Issues are organized by:
1. **Priority** (CRITICAL → LOW)
2. **Category** (HTML, CSS, JavaScript, SEO, Accessibility, Performance)
3. **Effort** (estimated time to fix)

**Recommendation:** Follow the priority order. Complete CRITICAL issues first, then HIGH, then MEDIUM/LOW.

---

## 🔴 PHASE 1: CRITICAL FIXES (2-3 hours)

These must be fixed immediately as they break functionality or cause security issues.

### FIX 1.1: Add Missing og:url Meta Tags to All Service Pages
**Files:** 15+ service, location, and blog pages  
**Effort:** 30 minutes  

**Pattern to apply to:**
- `services/home-cleaning-doha.html`
- `services/office-cleaning-doha.html`
- `services/deep-cleaning-doha.html`
- `services/sofa-carpet-cleaning-doha.html`
- `services/move-in-out-cleaning-doha.html`
- `locations/cleaning-services-west-bay.html`
- `locations/cleaning-services-lusail.html`
- `locations/cleaning-services-pearl-qatar.html`
- `locations/cleaning-services-al-wakrah.html`
- `locations/cleaning-services-al-khor.html`
- `cost-of-cleaning-services-doha.html`
- `how-to-choose-best-cleaning-company-doha.html`
- `deep-cleaning-qatar-climate.html`
- `villa-vs-apartment-cleaning-doha.html`
- `same-day-cleaning-doha.html`

**Action:**
In each file's `<head>` section, after the `og:image` meta tag, add:
```html
<meta property="og:url" content="https://www.janamcleaning.qa/[PATH_TO_FILE]">
```

Replace `[PATH_TO_FILE]` with:
- `/services/home-cleaning-doha.html`
- `/services/office-cleaning-doha.html`
- etc.

**Validation:** Use https://www.opengraph.xyz/ to verify og:url appears correctly

---

### FIX 1.2: Add Missing hreflang Tags to Blog Articles
**Files:** 5 blog article pages  
**Effort:** 20 minutes  

**Action:** Add to `<head>` section of each blog page:
```html
<link rel="canonical" href="https://www.janamcleaning.qa/[FILENAME].html">
<link rel="alternate" hreflang="en" href="https://www.janamcleaning.qa/[FILENAME].html">
<link rel="alternate" hreflang="ar" href="https://www.janamcleaning.qa/[FILENAME]-ar.html">
```

**Files to update:**
- cost-of-cleaning-services-doha.html
- how-to-choose-best-cleaning-company-doha.html
- deep-cleaning-qatar-climate.html
- villa-vs-apartment-cleaning-doha.html
- same-day-cleaning-doha.html

---

### FIX 1.3: Delete Deprecated test.html / trial.html
**Files:** `trial.html`  
**Effort:** 2 minutes  

**Action:** Delete the file `trial.html` (deprecated test page)

**Validation:** Confirm file is removed from workspace

---

### FIX 1.4: Fix SVG Closing Tags in Location Pages
**Files:** All location pages  
**Effort:** 15 minutes  

**Pattern:** Find SVG elements like:
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="2" y="3" width="20" height="14" rx="2">
</svg>
```

**Change to:**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="2" y="3" width="20" height="14" rx="2"/>
</svg>
```

**All self-closing SVG elements must have `/>` instead of `>`**

**Validation:** W3C Validator (https://validator.w3.org/)

---

## 🟠 PHASE 2: HIGH-PRIORITY FIXES (4-6 hours)

Fix these to improve SEO, accessibility, and functionality.

### FIX 2.1: Add Missing alt Text to All Images
**Category:** Accessibility (WCAG 2.1)  
**Effort:** 1-2 hours  

**Pattern to search for:** `<img` without `alt=` or with empty `alt=""`

**Examples of fixes:**

In blog pages:
```html
<!-- Before -->
<img src="images/blog/cleaning-pricing.jpg" style="width: 100%; height: 100%; object-fit: cover;" />

<!-- After -->
<img src="images/blog/cleaning-pricing.jpg" alt="Cleaning services pricing guide for Doha — hourly rates and package costs" style="width: 100%; height: 100%; object-fit: cover;" />
```

In location pages:
```html
<!-- Before -->
<img src="images/lusail.jfif" style="width:100%;height:100%;object-fit:cover">

<!-- After -->
<img src="images/lusail.jfif" alt="Cleaning services available in Lusail, Doha" style="width:100%;height:100%;object-fit:cover">
```

In service pages:
```html
<!-- Before -->
<img src="images/cleaning-service.jpg" />

<!-- After -->
<img src="images/cleaning-service.jpg" alt="Professional deep cleaning service in Doha" />
```

**Validation:** 
- Use WAVE tool: https://wave.webaim.org/
- Check console for alt text warnings

---

### FIX 2.2: Fix Color Contrast Issues (WCAG AA)
**Category:** Accessibility  
**Effort:** 45 minutes  

**Issue:** Footer links have insufficient contrast against navy background.

**In `style.css`, Update:**

```css
/* BEFORE - Line 304 */
.footer-links a{color:rgba(255,255,255,.5);font-size:.72rem;transition:color .2s}

/* AFTER */
.footer-links a{color:rgba(255,255,255,.7);font-size:.72rem;transition:color .2s}
```

```css
/* BEFORE - Line 299 */
.footer-contact-item{display:flex;align-items:flex-start;gap:8px;color:rgba(255,255,255,.6);font-size:.8rem}

/* AFTER (already fixed but verify) */
.footer-contact-item{display:flex;align-items:flex-start;gap:8px;color:rgba(255,255,255,.6);font-size:.8rem}
```

**Validation:** 
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- WAVE: https://wave.webaim.org/

---

### FIX 2.3: Add Focus Styles for Keyboard Navigation
**Category:** Accessibility  
**Effort:** 45 minutes  

**In `style.css`, add after button styles:**

```css
/* Keyboard Navigation Focus Styles */
a:focus-visible, 
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}

.nav a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

**Validation:**
- Tab through page with keyboard
- Should see clear focus indicator on all interactive elements

---

### FIX 2.4: Add Schema.org Structured Data to Service Pages
**Category:** SEO  
**Effort:** 1.5 hours  

**Pattern to add to `<head>` of each service page:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Home Cleaning in Doha",
  "description": "Professional home cleaning services in Doha, Qatar. We provide deep cleaning, regular maintenance cleaning, and specialized services.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Janam Cleaning & Hospitality Services",
    "image": "https://www.janamcleaning.qa/images/logo.jpg",
    "telephone": "+974 3133 4328",
    "email": "info@janamcleaning.qa",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "QA",
      "addressLocality": "Doha"
    },
    "url": "https://www.janamcleaning.qa",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Doha"
  },
  "priceRange": "QAR 150-500"
}
</script>
```

**Apply to:**
- services/home-cleaning-doha.html
- services/office-cleaning-doha.html
- services/deep-cleaning-doha.html
- services/sofa-carpet-cleaning-doha.html
- services/move-in-out-cleaning-doha.html

**Validation:** Google Rich Results Test: https://search.google.com/test/rich-results

---

### FIX 2.5: Add Schema to Location Pages
**Category:** SEO  
**Effort:** 1 hour  

**Pattern to add to `<head>` of each location page:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "Cleaning Services in [LOCATION]",
  "description": "Professional cleaning services available in [LOCATION], Doha, Qatar. Same-day availability, fully licensed and insured.",
  "telephone": "+974 3133 4328",
  "email": "info@janamcleaning.qa",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "QA",
    "addressLocality": "[LOCATION]",
    "addressRegion": "Doha"
  },
  "url": "https://www.janamcleaning.qa",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "200"
  }
}
</script>
```

Replace `[LOCATION]` with: Al Khor, Al Wakrah, Lusail, Pearl Qatar, West Bay

---

## 🟡 PHASE 3: MEDIUM-PRIORITY FIXES (6-8 hours)

### FIX 3.1: Create Missing Arabic Blog Versions
**Files:** 5 new files to create  
**Effort:** 2-3 hours  

**Missing Arabic versions:**
- cost-of-cleaning-services-doha-ar.html
- how-to-choose-best-cleaning-company-doha-ar.html
- deep-cleaning-qatar-climate-ar.html
- villa-vs-apartment-cleaning-doha-ar.html
- same-day-cleaning-doha-ar.html

**Template structure for each:**
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>[Arabic Title]</title>
  <meta name="description" content="[Arabic Description]">
  <link rel="canonical" href="https://www.janamcleaning.qa/[FILENAME]-ar.html">
  <link rel="alternate" hreflang="en" href="https://www.janamcleaning.qa/[FILENAME].html">
  <link rel="alternate" hreflang="ar" href="https://www.janamcleaning.qa/[FILENAME]-ar.html">
  <link rel="stylesheet" href="style.css">
  <meta property="og:url" content="https://www.janamcleaning.qa/[FILENAME]-ar.html">
  <meta property="og:image" content="https://www.janamcleaning.qa/images/hero-villa.jpg">
</head>
<body>
  <div id="nav-placeholder"></div>
  <!-- Page content in Arabic -->
  <div id="footer-placeholder"></div>
  <script src="components.js"></script>
  <script src="main.js"></script>
  <script>
    renderNav('blog');
    renderFooter();
  </script>
</body>
</html>
```

---

### FIX 3.2: Update Sitemap.xml with All Pages
**File:** sitemap.xml  
**Effort:** 30 minutes  

**Add missing entries:**
- All 5 blog pages (English)
- All 5 blog pages (Arabic) - when created
- All service pages (Arabic)
- All location pages (Arabic)

**Pattern:**
```xml
<url>
  <loc>https://www.janamcleaning.qa/cost-of-cleaning-services-doha.html</loc>
  <lastmod>2026-05-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Validation:** Submit to Google Search Console

---

### FIX 3.3: Fix Twitter Card Tags
**Files:** All pages  
**Effort:** 45 minutes  

**Pattern to add/verify in all `<head>` sections:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Meta Description]">
<meta name="twitter:image" content="https://www.janamcleaning.qa/images/[HERO_IMAGE]">
<meta name="twitter:url" content="https://www.janamcleaning.qa/[PAGE_URL]">
```

**Validation:** Twitter Card Validator: https://cards-dev.twitter.com/validator

---

### FIX 3.4: Add robots.txt Directives
**File:** robots.txt  
**Effort:** 20 minutes  

**Update current robots.txt to include:**
```
User-agent: *
Allow: /
Disallow: /trial.html
Disallow: /test/
Disallow: /staging/

Sitemap: https://www.janamcleaning.qa/sitemap.xml

User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1
```

---

### FIX 3.5: Fix Form Accessibility
**Files:** contact.html, contact-ar.html  
**Effort:** 45 minutes  

**Pattern to apply to contact form:**
```html
<!-- Before -->
<input type="text" placeholder="Your Name" name="name">

<!-- After -->
<label for="name" class="sr-only">Your Name</label>
<input type="text" id="name" placeholder="Your Name" name="name" required aria-label="Your name">
```

**Add to style.css:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 🔵 PHASE 4: LOW-PRIORITY IMPROVEMENTS (Ongoing)

### FIX 4.1: Add Security Headers Documentation
**Files:** All pages  
**Effort:** 30 minutes  

Add to your hosting configuration (nginx/Apache):
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

### FIX 4.2: Minify CSS and JavaScript
**Files:** style.css, components.js, main.js  
**Effort:** 20 minutes  

Use tools like:
- CSS Minifier: https://cssminifier.com/
- JS Minifier: https://www.minifier.org/

Or use build tools like:
```bash
npm install -g csso-cli terser
csso style.css -o style.min.css
terser components.js -o components.min.js
```

Then update HTML to reference minified versions in production.

---

### FIX 4.3: Add Image Optimization
**Files:** images/ directory  
**Effort:** 1 hour  

**Tools:**
- TinyPNG/TinyJPG: https://tinypng.com/ (batch upload)
- ImageMagick (command line):
```bash
convert image.jpg -quality 85 image-optimized.jpg
```

**Target:** Reduce image file sizes by 30-50% without visible quality loss

---

### FIX 4.4: Add Performance Monitoring
**Files:** All pages  
**Effort:** 30 minutes  

Add to `main.js`:
```javascript
// Performance monitoring
window.addEventListener('load', function() {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
  console.log('First Paint:', performance.getEntriesByName('first-paint')[0]);
  console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]);
});
```

Monitor with:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Google Lighthouse (DevTools)
- WebPageTest: https://www.webpagetest.org/

---

## 📊 IMPLEMENTATION CHECKLIST

### Phase 1: Critical (Week 1)
- [ ] Add og:url to all service/location/blog pages
- [ ] Add hreflang tags to blog articles
- [ ] Delete trial.html
- [ ] Fix SVG closing tags

### Phase 2: High Priority (Week 2-3)
- [ ] Add alt text to all images
- [ ] Fix color contrast issues
- [ ] Add focus styles for keyboard navigation
- [ ] Add Schema.org structured data

### Phase 3: Medium Priority (Week 3-4)
- [ ] Create Arabic blog versions
- [ ] Update sitemap.xml
- [ ] Fix Twitter Card tags
- [ ] Add robots.txt directives
- [ ] Fix form accessibility

### Phase 4: Low Priority (Ongoing)
- [ ] Add security headers
- [ ] Minify CSS/JS
- [ ] Optimize images
- [ ] Add performance monitoring

---

## 🧪 TESTING & VALIDATION TOOLS

**Recommended Tools:**
1. **W3C Validator**: https://validator.w3.org/ — Validate HTML
2. **WAVE**: https://wave.webaim.org/ — Accessibility audit
3. **Google Lighthouse**: Built into Chrome DevTools
4. **Google Rich Results**: https://search.google.com/test/rich-results
5. **Contrast Checker**: https://webaim.org/resources/contrastchecker/
6. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
7. **SEMrush**: Free site audit tool
8. **Screaming Frog**: SEO crawler

---

## 📈 SUCCESS METRICS

After implementing all fixes, you should see:
- ✅ 0 console errors
- ✅ Google Lighthouse score: 90+
- ✅ WebAIM WAVE: 0 errors
- ✅ W3C Validator: Valid HTML
- ✅ Mobile-friendly: Passed
- ✅ 0 broken links
- ✅ All pages crawlable (robots.txt/sitemap)
- ✅ All images have alt text
- ✅ Color contrast: WCAG AA minimum

---

## 💾 NEXT STEPS

1. **Choose a phase** above to start with
2. **Work systematically** through each fix
3. **Test after each major change** using the validation tools
4. **Update Git** with commit messages for each phase
5. **Deploy to staging first** before production

---

**Questions?** Refer to TECHNICAL-AUDIT-REPORT.md for detailed issue breakdown.

Good luck! 🚀
