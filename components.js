/* ============================================================
   JANAM CLEANING — components.js v2.0
   Fixes: consistent hero-trust markup, WA AR text,
   removed setTimeout(initializeNavigation), improved lang toggle
   ============================================================ */

/* ── Global favicon injection ── */
(function() {
  var path = window.location.pathname;
  var prefix = (path.includes("/services/") || path.includes("/locations/")) ? "../" : "";
  var link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/jpeg";
  link.href = prefix + "images/logo.jpg";
  document.head.appendChild(link);
})();

function getPathPrefix() {
  var path = window.location.pathname;
  if (
    path.includes("/services/") ||
    path.includes("/locations/") ||
    path.includes("/blog/")
  ) {
    return "../";
  }
  return "";
}

function isArabicPage() {
  return (
    document.documentElement.lang === "ar" ||
    window.location.pathname.includes("-ar")
  );
}

function toArabicUrl(url) {
  if (!url) return url;
  if (url.includes("-ar.html")) return url;
  return url.replace(".html", "-ar.html");
}

function toEnglishUrl(url) {
  if (!url) return url;
  return url.replace("-ar.html", ".html");
}

function renderNav(active) {
  active = active || "";
  var prefix = getPathPrefix();
  var isArabic = isArabicPage();
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  function link(en) {
    return isArabic ? toArabicUrl(prefix + en) : prefix + en;
  }

  var t = isArabic
    ? {
        home: "الرئيسية",
        services: "الخدمات",
        locations: "المناطق",
        about: "من نحن",
        blog: "المدونة",
        contact: "اتصل بنا",
        bookNow: "احجز الآن",
        langToggle: "EN",
        homeClean: "تنظيف منازل",
        officeClean: "تنظيف مكاتب",
        deepClean: "تنظيف عميق",
        sofaClean: "تنظيف سجاد وكنب",
        moveClean: "تنظيف عند الانتقال",
        westBay: "الخليج الغربي",
        lusail: "لوسيل",
        pearl: "اللؤلؤة",
        wakrah: "الوكرة",
        khor: "الخور",
        wa: "واتساب",
        logoName: "جنم للتنظيف",
        logoSub: "الدوحة، قطر",
        waMsg: "مرحباً! هل تحتاج عرض سعر للتنظيف؟ نرد في دقائق.",
      }
    : {
        home: "Home",
        services: "Services",
        locations: "Locations",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        bookNow: "Book Now",
        langToggle: "AR",
        homeClean: "Home Cleaning",
        officeClean: "Office Cleaning",
        deepClean: "Deep Cleaning",
        sofaClean: "Sofa & Carpet",
        moveClean: "Move In/Out",
        westBay: "West Bay",
        lusail: "Lusail",
        pearl: "The Pearl",
        wakrah: "Al Wakrah",
        khor: "Al Khor",
        wa: "WhatsApp",
        logoName: "Janam Cleaning",
        logoSub: "Doha, Qatar",
        waMsg: "Need a cleaning quote? We reply within minutes!",
      };

  var waHref = isArabic
    ? "https://wa.me/97431334328?text=" +
      encodeURIComponent("مرحباً جنم، أحتاج عرض سعر للتنظيف")
    : "https://wa.me/97431334328?text=Hi%20Janam%2C%20I%20need%20a%20cleaning%20quote";

  /* Compute language toggle target */
  var langTarget = isArabic
    ? toEnglishUrl(currentPage)
    : toArabicUrl(currentPage);
  /* Fallback: if we can't compute, link to root */
  if (!langTarget || langTarget === currentPage) {
    langTarget = isArabic ? prefix + "index.html" : prefix + "index-ar.html";
  }

  var navHtml =
    '<div id="progress" aria-hidden="true"></div>' +
    '<header id="header" role="banner">' +
    '<div class="container" style="padding-inline:0">' +
    '<div class="header-inner">' +
    /* Logo */
    '<a href="' +
    link("index.html") +
    '" class="logo" aria-label="Janam Cleaning — Home">' +
    '<div class="logo-mark">' +
    '<img src="' +
    prefix +
    'images/logo.jpg" alt="Janam Cleaning logo" width="40" height="40" loading="eager">' +
    "</div>" +
    '<div class="logo-text"><strong>' +
    t.logoName +
    "</strong><span>" +
    t.logoSub +
    "</span></div>" +
    "</a>" +
    /* Desktop nav */
    '<nav class="nav" aria-label="Main navigation">' +
    '<div class="nav-item">' +
    '<a href="' +
    link("index.html") +
    '"' +
    (active === "home" ? ' class="active" aria-current="page"' : "") +
    ">" +
    t.home +
    "</a>" +
    "</div>" +
    '<div class="nav-item">' +
    '<span class="nav-dropdown-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="' +
    t.services +
    ' menu">' +
    t.services +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>' +
    "</span>" +
    '<div class="nav-dropdown" role="menu">' +
    '<a href="' +
    link("services/home-cleaning-doha.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>' +
    t.homeClean +
    "</a>" +
    '<a href="' +
    link("services/office-cleaning-doha.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' +
    t.officeClean +
    "</a>" +
    '<a href="' +
    link("services/deep-cleaning-doha.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' +
    t.deepClean +
    "</a>" +
    '<a href="' +
    link("services/sofa-carpet-cleaning-doha.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M1 14h22"/></svg>' +
    t.sofaClean +
    "</a>" +
    '<a href="' +
    link("services/move-in-out-cleaning-doha.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12H19M12 5l7 7-7 7"/></svg>' +
    t.moveClean +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="nav-item">' +
    '<span class="nav-dropdown-toggle" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="' +
    t.locations +
    ' menu">' +
    t.locations +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>' +
    "</span>" +
    '<div class="nav-dropdown" role="menu">' +
    '<a href="' +
    link("locations/cleaning-services-west-bay.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    t.westBay +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-lusail.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    t.lusail +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-pearl-qatar.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    t.pearl +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-al-wakrah.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    t.wakrah +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-al-khor.html") +
    '" role="menuitem"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    t.khor +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="nav-item"><a href="' +
    link("about.html") +
    '"' +
    (active === "about" ? ' class="active" aria-current="page"' : "") +
    ">" +
    t.about +
    "</a></div>" +
    '<div class="nav-item"><a href="' +
    link("blog.html") +
    '"' +
    (active === "blog" ? ' class="active" aria-current="page"' : "") +
    ">" +
    t.blog +
    "</a></div>" +
    '<div class="nav-item"><a href="' +
    link("contact.html") +
    '"' +
    (active === "contact" ? ' class="active" aria-current="page"' : "") +
    ">" +
    t.contact +
    "</a></div>" +
    "</nav>" +
    /* Header actions */
    '<div class="header-actions">' +
    '<a href="tel:+97431334328" class="header-phone" aria-label="Call Janam Cleaning">' +
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.14 2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91A16 16 0 0015.1 17.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18.92v-2z"/></svg>' +
    "+974 3133 4328" +
    "</a>" +
    '<a href="' +
    link("contact.html") +
    '" class="btn btn--primary btn--sm">' +
    t.bookNow +
    "</a>" +
    '<a href="' +
    langTarget +
    '" class="lang-toggle" title="' +
    (isArabic ? "Switch to English" : "التبديل إلى العربية") +
    '" lang="' +
    (isArabic ? "en" : "ar") +
    '">' +
    t.langToggle +
    "</a>" +
    '<button class="hamburger" id="hamburger" aria-label="' +
    (isArabic ? "فتح القائمة" : "Toggle menu") +
    '" aria-expanded="false" aria-controls="mobile-menu">' +
    "<span></span><span></span><span></span>" +
    "</button>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</header>" +
    /* Mobile menu */
    '<div id="mobile-menu" role="dialog" aria-modal="true" aria-label="' +
    (isArabic ? "قائمة التنقل" : "Mobile navigation") +
    '">' +
    '<div class="mobile-inner">' +
    '<div class="mobile-section">' +
    '<div class="mobile-nav">' +
    '<a href="' +
    link("index.html") +
    '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>' +
    t.home +
    "</a>" +
    '<a href="' +
    link("about.html") +
    '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>' +
    t.about +
    "</a>" +
    '<a href="' +
    link("blog.html") +
    '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>' +
    t.blog +
    "</a>" +
    '<a href="' +
    link("contact.html") +
    '"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
    t.contact +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="mobile-section">' +
    '<div class="mobile-label">' +
    t.services +
    "</div>" +
    '<div class="mobile-nav">' +
    '<a href="' +
    link("services/home-cleaning-doha.html") +
    '">' +
    t.homeClean +
    "</a>" +
    '<a href="' +
    link("services/office-cleaning-doha.html") +
    '">' +
    t.officeClean +
    "</a>" +
    '<a href="' +
    link("services/deep-cleaning-doha.html") +
    '">' +
    t.deepClean +
    "</a>" +
    '<a href="' +
    link("services/sofa-carpet-cleaning-doha.html") +
    '">' +
    t.sofaClean +
    "</a>" +
    '<a href="' +
    link("services/move-in-out-cleaning-doha.html") +
    '">' +
    t.moveClean +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="mobile-section">' +
    '<div class="mobile-label">' +
    t.locations +
    "</div>" +
    '<div class="mobile-nav">' +
    '<a href="' +
    link("locations/cleaning-services-west-bay.html") +
    '">' +
    t.westBay +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-lusail.html") +
    '">' +
    t.lusail +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-pearl-qatar.html") +
    '">' +
    t.pearl +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-al-wakrah.html") +
    '">' +
    t.wakrah +
    "</a>" +
    '<a href="' +
    link("locations/cleaning-services-al-khor.html") +
    '">' +
    t.khor +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="mobile-lang">' +
    '<a href="' +
    prefix +
    'index.html" lang="en">English</a>' +
    '<a href="' +
    prefix +
    'index-ar.html" lang="ar">العربية</a>' +
    "</div>" +
    '<div class="mobile-ctas">' +
    '<a href="' +
    waHref +
    '" target="_blank" rel="noopener" class="btn btn--wa btn--block">' +
    t.wa +
    " →</a>" +
    '<a href="tel:+97431334328" class="btn btn--outline btn--block">+974 3133 4328</a>' +
    '<a href="' +
    link("contact.html") +
    '" class="btn btn--primary btn--block">' +
    t.bookNow +
    " →</a>" +
    "</div>" +
    "</div>" +
    "</div>";

  var placeholder = document.getElementById("nav-placeholder");
  if (placeholder) placeholder.innerHTML = navHtml;
}

function renderFooter() {
  var prefix = getPathPrefix();
  var isArabic = isArabicPage();

  function link(en) {
    return isArabic ? toArabicUrl(prefix + en) : prefix + en;
  }

  var t = isArabic
    ? {
        desc: "أفضل شركة تنظيف في قطر. خدمات مهنية موثوقة وآمنة للبيئة.",
        homeClean: "تنظيف منازل",
        officeClean: "تنظيف مكاتب",
        deepClean: "تنظيف عميق",
        sofaClean: "تنظيف سجاد وكنب",
        moveClean: "تنظيف عند الانتقال",
        westBay: "الخليج الغربي",
        lusail: "لوسيل",
        pearl: "اللؤلؤة",
        wakrah: "الوكرة",
        khor: "الخور",
        services: "الخدمات",
        areas: "المناطق",
        contact: "اتصل بنا",
        privacy: "الخصوصية",
        terms: "الشروط",
        sitemap: "خريطة الموقع",
        copy: "© 2026 جنم للتنظيف والضيافة. جميع الحقوق محفوظة.",
        waMsg: "مرحباً! هل تحتاج عرض سعر للتنظيف؟ نرد في دقائق.",
        logoName: "جنم للتنظيف",
        logoSub: "خدمات الضيافة",
        city: "الدوحة، قطر",
        waTeam: "فريق جنم",
        online: "متصل الآن",
      }
    : {
        desc: "Qatar's premium cleaning company. MOI licensed, eco-safe, 100% satisfaction guaranteed.",
        homeClean: "Home Cleaning",
        officeClean: "Office Cleaning",
        deepClean: "Deep Cleaning",
        sofaClean: "Sofa & Carpet Cleaning",
        moveClean: "Move In/Out Cleaning",
        westBay: "West Bay",
        lusail: "Lusail",
        pearl: "The Pearl",
        wakrah: "Al Wakrah",
        khor: "Al Khor",
        services: "Services",
        areas: "Areas",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        sitemap: "Sitemap",
        copy: "© 2026 Janam Cleaning & Hospitality Services. All rights reserved.",
        waMsg: "Need a cleaning quote? We reply within minutes!",
        logoName: "Janam Cleaning",
        logoSub: "Hospitality Services",
        city: "Doha, Qatar",
        waTeam: "Janam Team",
        online: "Online",
      };

  var waHref = isArabic
    ? "https://wa.me/97431334328?text=" +
      encodeURIComponent("مرحباً جنم، أحتاج عرض سعر للتنظيف")
    : "https://wa.me/97431334328?text=Hi%20Janam%2C%20I%20need%20a%20cleaning%20quote";

  var waIconSVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
    '<path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.528 5.847L.057 23.5a.5.5 0 00.623.619l5.806-1.522A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.662-.523-5.171-1.432l-.371-.217-3.845 1.008 1.028-3.741-.233-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>' +
    "</svg>";

  var html =
    '<footer id="footer" role="contentinfo">' +
    '<div class="container">' +
    '<div class="footer-grid">' +
    /* Brand */
    '<div class="footer-brand">' +
    '<a href="' +
    link("index.html") +
    '" class="logo" aria-label="Janam Cleaning Home">' +
    '<div class="logo-mark"><img src="' +
    prefix +
    'images/logo.jpg" alt="Janam Cleaning" width="40" height="40" loading="lazy"></div>' +
    '<div class="logo-text"><strong>' +
    t.logoName +
    "</strong><span>" +
    t.logoSub +
    "</span></div>" +
    "</a>" +
    '<p class="footer-desc">' +
    t.desc +
    "</p>" +
    '<div class="footer-social">' +
    '<a href="https://instagram.com/janamcleaning" target="_blank" rel="noopener" aria-label="Instagram">' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
    "</a>" +
    '<a href="https://facebook.com/janamcleaning" target="_blank" rel="noopener" aria-label="Facebook">' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>' +
    "</a>" +
    "</div>" +
    "</div>" +
    /* Services */
    '<div class="footer-col"><h5>' +
    t.services +
    "</h5><ul>" +
    '<li><a href="' +
    link("services/home-cleaning-doha.html") +
    '">' +
    t.homeClean +
    "</a></li>" +
    '<li><a href="' +
    link("services/office-cleaning-doha.html") +
    '">' +
    t.officeClean +
    "</a></li>" +
    '<li><a href="' +
    link("services/deep-cleaning-doha.html") +
    '">' +
    t.deepClean +
    "</a></li>" +
    '<li><a href="' +
    link("services/sofa-carpet-cleaning-doha.html") +
    '">' +
    t.sofaClean +
    "</a></li>" +
    '<li><a href="' +
    link("services/move-in-out-cleaning-doha.html") +
    '">' +
    t.moveClean +
    "</a></li>" +
    "</ul></div>" +
    /* Areas */
    '<div class="footer-col"><h5>' +
    t.areas +
    "</h5><ul>" +
    '<li><a href="' +
    link("locations/cleaning-services-west-bay.html") +
    '">' +
    t.westBay +
    "</a></li>" +
    '<li><a href="' +
    link("locations/cleaning-services-lusail.html") +
    '">' +
    t.lusail +
    "</a></li>" +
    '<li><a href="' +
    link("locations/cleaning-services-pearl-qatar.html") +
    '">' +
    t.pearl +
    "</a></li>" +
    '<li><a href="' +
    link("locations/cleaning-services-al-wakrah.html") +
    '">' +
    t.wakrah +
    "</a></li>" +
    '<li><a href="' +
    link("locations/cleaning-services-al-khor.html") +
    '">' +
    t.khor +
    "</a></li>" +
    "</ul></div>" +
    /* Contact */
    '<div class="footer-col"><h5>' +
    t.contact +
    "</h5>" +
    '<div class="footer-contact">' +
    '<div class="footer-contact-item">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.14 2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91A16 16 0 0015.1 17.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18.92v-2z"/></svg>' +
    '<a href="tel:+97431334328">+974 3133 4328</a>' +
    "</div>" +
    '<div class="footer-contact-item">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
    '<a href="mailto:info@janamcleaning.qa">info@janamcleaning.qa</a>' +
    "</div>" +
    '<div class="footer-contact-item">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
    "<span>" +
    t.city +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    '<div class="footer-copy">' +
    t.copy +
    "</div>" +
    '<div class="footer-links">' +
    '<a href="' +
    prefix +
    (isArabic ? "index.html" : "index-ar.html") +
    '" lang="' +
    (isArabic ? "en" : "ar") +
    '">' +
    (isArabic ? "English" : "العربية") +
    "</a>" +
    '<a href="' +
    prefix +
    (isArabic ? "privacy-ar.html" : "privacy.html") +
    '">' +
    t.privacy +
    "</a>" +
    '<a href="' +
    prefix +
    (isArabic ? "terms-ar.html" : "terms.html") +
    '">' +
    t.terms +
    "</a>" +
    '<a href="' +
    prefix +
    'sitemap.xml">' +
    t.sitemap +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</footer>" +
    /* WhatsApp float */
    '<div class="wa-float" aria-live="polite">' +
    '<div class="wa-popup" id="wa-popup" role="dialog" aria-label="WhatsApp chat">' +
    '<div class="wa-popup-header">' +
    '<div class="wa-popup-avatar" aria-hidden="true">' +
    waIconSVG +
    "</div>" +
    "<div>" +
    '<div class="wa-popup-name">' +
    t.waTeam +
    "</div>" +
    '<div class="wa-popup-status">' +
    t.online +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="wa-bubble">' +
    t.waMsg +
    "</div>" +
    '<a href="' +
    waHref +
    '" target="_blank" rel="noopener" class="btn btn--wa btn--block btn--sm">' +
    t.wa +
    " →</a>" +
    "</div>" +
    '<button class="wa-float-btn" id="wa-btn" aria-label="Chat on WhatsApp" aria-expanded="false">' +
    waIconSVG +
    '<span class="wa-float-badge" aria-hidden="true">1</span>' +
    "</button>" +
    "</div>";

  var el = document.getElementById("footer-placeholder");
  if (el) el.innerHTML = html;
}
