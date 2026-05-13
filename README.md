# Janam Cleaning & Hospitality Services — Website
## SEO-Dominant Multi-Page Site | Doha, Qatar

---

## PROJECT STRUCTURE

```
janam-seo/
├── index.html                          ← Homepage (primary SEO target)
├── about.html                          ← About Us
├── contact.html                        ← Contact / Booking Form
├── blog.html                           ← Blog Index
├── sitemap.xml                         ← Submit to Google Search Console
├── robots.txt
│
├── css/
│   └── style.css                       ← Full design system
│
├── js/
│   ├── main.js                         ← Interactions, animations, FAQ
│   └── components.js                   ← Shared nav + footer renderer
│
├── services/
│   ├── home-cleaning-doha.html
│   ├── office-cleaning-doha.html
│   ├── deep-cleaning-doha.html
│   ├── sofa-carpet-cleaning-doha.html
│   └── move-in-out-cleaning-doha.html
│
├── locations/
│   ├── cleaning-services-west-bay.html
│   ├── cleaning-services-lusail.html
│   ├── cleaning-services-pearl-qatar.html
│   ├── cleaning-services-al-wakrah.html
│   └── cleaning-services-al-khor.html
│
└── blog/
    ├── cost-of-cleaning-services-doha.html
    ├── how-to-choose-best-cleaning-company-doha.html
    ├── deep-cleaning-qatar-climate.html
    ├── villa-vs-apartment-cleaning-doha.html
    └── same-day-cleaning-doha.html
```

---

## QUICK CUSTOMIZATION GUIDE

### 1. Replace Phone Number
Search & replace `+974 1234 5678` everywhere with your real number.
Also update `https://wa.me/97412345678` → `https://wa.me/974XXXXXXXX`

### 2. Replace Email
Search & replace `info@janamcleaning.qa` with your real email.

### 3. Update Domain
Search & replace `https://www.janamcleaning.qa` with your real domain.
This appears in canonical tags, schema markup, and sitemap.

### 4. Add Google Maps Embed (contact.html)
Find the comment `<!-- REPLACE THIS with your actual Google Maps embed -->` and paste in your iframe from Google Maps → Share → Embed a map.

### 5. Replace Placeholder Images
The `about-img-placeholder` divs are CSS placeholders.
Replace with: `<img src="../images/your-photo.jpg" alt="Janam Cleaning Team Doha" style="width:100%;border-radius:24px"/>`

### 6. Update Prices
All prices are realistic Doha market rates but adjust to match your actual pricing throughout service pages and blog posts.

### 7. Update MOI License Number
Search for `QA-2024-CLEAN-0847` and replace with your actual registration number.

---

## DEPLOYMENT CHECKLIST

### Before Going Live
- [ ] Replace all phone numbers
- [ ] Replace all email addresses
- [ ] Update domain in all canonical tags + sitemap
- [ ] Add real Google Maps embed on contact.html
- [ ] Add real team/before-after photos
- [ ] Connect contact form to real backend (or Formspree/EmailJS)
- [ ] Test all pages on mobile
- [ ] Run through Google PageSpeed Insights

### After Going Live — SEO Actions
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Submit sitemap.xml to Bing Webmaster Tools
- [ ] Create Google Business Profile listing for "Janam Cleaning Doha"
- [ ] Ensure NAP (Name, Address, Phone) is consistent everywhere
- [ ] Build citations on local Qatar directories
- [ ] Request Google reviews from early customers

---

## SEO FEATURES BUILT IN

Every page includes:
- Optimised `<title>` with primary keyword
- Meta description with CTA
- `<link rel="canonical">` tag
- Keyword in H1, first paragraph, H2s
- Internal links to 3–5 related pages
- JSON-LD schema markup (LocalBusiness, Service, Article, FAQ)
- Breadcrumb navigation (also structured data)
- Mobile-first responsive layout
- Fast-loading (no heavy frameworks, no JS libraries)

### Schema Types Used
- `LocalBusiness` — on homepage
- `Service` — on each service page
- `FAQPage` — on homepage and service pages
- `Article` — on all blog posts
- `ContactPage` — on contact page

---

## CONNECTING YOUR CONTACT FORM

The form uses `data-form` attribute and is handled by `js/main.js`.
For real email delivery, replace the JS submit handler with one of:

**Option A — Formspree (free, no backend needed):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B — EmailJS (send directly to your email):**
```javascript
emailjs.sendForm('YOUR_SERVICE', 'YOUR_TEMPLATE', form);
```

**Option C — WhatsApp redirect (simplest):**
Replace form submit with a WhatsApp link builder using the form values.

---

## ADDING MORE CONTENT

### Add a New Location Page
1. Copy an existing location file from `/locations/`
2. Update: title, meta, canonical, H1, breadcrumb, and all body content
3. Add the new URL to `sitemap.xml`
4. Add links to it from `index.html` areas section and `js/components.js` nav

### Add a New Blog Post
1. Copy an existing blog post from `/blog/`
2. Update all meta, title, content
3. Add to `sitemap.xml`
4. Add a card to `blog.html`

---

## COLORS (edit in css/style.css :root)

```css
--blue:    #1356BE   /* Primary brand blue */
--blue-dk: #0D3F8F   /* Dark blue (hero, CTA) */
--sky:     #4A9EE8   /* Light accent */
--teal:    #0EA5A5   /* Secondary accent */
```

To change the color scheme, update these 4 values and everything adapts automatically.
