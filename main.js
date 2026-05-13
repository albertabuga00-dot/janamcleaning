/* ============================================================
   JANAM CLEANING — main.js v2.0
   Fixes: keyboard nav, focus trap, aria-expanded, FAQ a11y,
   scroll reveal, counters, WA popup, form submit, RTL
   ============================================================ */
(function () {
  "use strict";

  /* ── Configurable Formspree endpoint ── */
  window.FORMSPREE_ENDPOINT = window.FORMSPREE_ENDPOINT || "https://formspree.io/f/xyzqwert";

  /* ── Helpers ── */
  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function qsa(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  /* ── Run after DOM ready ── */
  document.addEventListener("DOMContentLoaded", function () {
    /* ─ Progress bar ─ */
    var pb = qs("#progress");
    if (pb) {
      var ticking = false;
      window.addEventListener(
        "scroll",
        function () {
          if (!ticking) {
            requestAnimationFrame(function () {
              var h = document.documentElement;
              var pct =
                (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
              pb.style.setProperty("--progress", Math.min(pct, 100) + "%");
              ticking = false;
            });
            ticking = true;
          }
        },
        { passive: true },
      );
    }

    /* ─ Header scroll ─ */
    var header = qs("#header");
    if (header) {
      window.addEventListener(
        "scroll",
        function () {
          header.classList.toggle("scrolled", window.scrollY > 20);
        },
        { passive: true },
      );
    }

    /* ─ Hamburger / mobile menu ─ */
    var hamburger = qs("#hamburger");
    var mobileMenu = qs("#mobile-menu");

    function openMenu() {
      mobileMenu.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var spans = qsa("span", hamburger);
      spans[0].style.transform = "rotate(45deg) translate(5px,5px)";
      spans[1].style.width = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px,-5px)";
      // Move focus into menu
      var first = qs("a, button", mobileMenu);
      if (first) first.focus();
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      var spans = qsa("span", hamburger);
      spans.forEach(function (s) {
        s.style.transform = "";
        s.style.width = "";
      });
      hamburger.focus();
    }

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", function () {
        mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
      });

      /* Close on Escape */
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && mobileMenu.classList.contains("open"))
          closeMenu();
      });

      /* Focus trap inside mobile menu */
      mobileMenu.addEventListener("keydown", function (e) {
        if (e.key !== "Tab") return;
        var focusable = qsa(
          "a[href], button:not([disabled])",
          mobileMenu,
        ).filter(function (el) {
          return !el.closest('[aria-hidden="true"]');
        });
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });

      /* Close when a link inside menu is clicked */
      qsa("a", mobileMenu).forEach(function (a) {
        a.addEventListener("click", closeMenu);
      });
    }

    /* ─ Nav dropdown keyboard ─ */
    qsa(".nav-item").forEach(function (item) {
      var toggle = qs(".nav-dropdown-toggle", item);
      var dropdown = qs(".nav-dropdown", item);
      if (!toggle || !dropdown) return;

      toggle.setAttribute("tabindex", "0");
      toggle.setAttribute("role", "button");
      toggle.setAttribute("aria-haspopup", "true");
      toggle.setAttribute("aria-expanded", "false");

      function openDropdown() {
        toggle.setAttribute("aria-expanded", "true");
      }
      function closeDropdown() {
        toggle.setAttribute("aria-expanded", "false");
      }

      function toggleDropdown() {
        var isOpen = toggle.getAttribute("aria-expanded") === "true";
        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      }

      toggle.addEventListener("click", function (e) {
        toggleDropdown();
      });

      toggle.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleDropdown();
          if (toggle.getAttribute("aria-expanded") === "true") {
            var first = qs("a", dropdown);
            if (first) first.focus();
          }
        }
        if (e.key === "Escape") {
          closeDropdown();
          toggle.focus();
        }
      });

      /* Close when focus leaves the nav-item */
      item.addEventListener("focusout", function (e) {
        if (!item.contains(e.relatedTarget)) closeDropdown();
      });

      /* Close dropdowns on Escape from anywhere inside */
      dropdown.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeDropdown();
          toggle.focus();
        }
      });
    });

    /* ─ Scroll reveal ─ */
    var revealClasses = ".reveal, .reveal-scale, .reveal-left, .reveal-right";
    if ("IntersectionObserver" in window) {
      var revealObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var siblings = qsa(revealClasses, el.parentElement);
            var idx = siblings.indexOf(el);
            el.style.transitionDelay = idx * 0.075 + "s";
            el.classList.add("visible");
            revealObs.unobserve(el);
          });
        },
        { threshold: 0.07, rootMargin: "0px 0px -36px 0px" },
      );

      qsa(revealClasses).forEach(function (el) {
        revealObs.observe(el);
      });
    } else {
      qsa(revealClasses).forEach(function (el) {
        el.classList.add("visible");
      });
    }

    /* ─ Counter animation ─ */
    function animateCounter(el) {
      var target = +el.dataset.count;
      var suffix = el.dataset.suffix || "";
      var cur = 0;
      var step = Math.max(1, target / 60);
      var timer = setInterval(function () {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString() + suffix;
        if (cur >= target) clearInterval(timer);
      }, 16);
    }

    var counters = qsa("[data-count]");
    if (counters.length) {
      if ("IntersectionObserver" in window) {
        var cObs = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (e) {
              if (!e.isIntersecting) return;
              animateCounter(e.target);
              cObs.unobserve(e.target);
            });
          },
          { threshold: 0.5 },
        );
        counters.forEach(function (c) {
          cObs.observe(c);
        });
      } else {
        counters.forEach(animateCounter);
      }
    }

    /* ─ FAQ accordion (with aria) ─ */
    qsa(".faq-item").forEach(function (item, idx) {
      var q = qs(".faq-question", item);
      var a = qs(".faq-answer", item);
      if (!q || !a) return;

      var answerId = "faq-answer-" + idx;
      var questionId = "faq-q-" + idx;
      a.id = answerId;
      q.id = questionId;
      q.setAttribute("aria-controls", answerId);
      q.setAttribute("aria-expanded", "false");
      q.setAttribute("role", "button");

      function toggle() {
        var isOpen = item.classList.contains("open");
        /* Close all others */
        qsa(".faq-item.open").forEach(function (i) {
          i.classList.remove("open");
          var qi = qs(".faq-question", i);
          if (qi) qi.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
        }
      }

      q.addEventListener("click", toggle);
      q.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });

    /* ─ WhatsApp float ─ */
    var waBtn = qs("#wa-btn");
    var waPopup = qs("#wa-popup");
    if (waBtn && waPopup) {
      waBtn.addEventListener("click", function () {
        waPopup.classList.toggle("show");
      });
      /* Auto-show after 6s, auto-hide after 10s */
      setTimeout(function () {
        if (!waPopup.classList.contains("show")) {
          waPopup.classList.add("show");
          setTimeout(function () {
            waPopup.classList.remove("show");
          }, 10000);
        }
      }, 6000);
      /* Close on outside click */
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".wa-float")) waPopup.classList.remove("show");
      });
    }

    /* ─ Smooth scroll for anchor links ─ */
    qsa('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = qs(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    /* ─ Form submit (demo / Formspree) ─ */
    qsa("form[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        var endpoint = window.FORMSPREE_ENDPOINT;
        form.action = endpoint;
        if (endpoint.includes("xyzqwert")) {
          e.preventDefault();
          console.warn(
            "Janam: Replace Formspree endpoint (xyzqwert) with your real form ID.",
          );
          return;
        }
        var btn = qs('[type="submit"]', form);
        if (!btn) return;
        btn.textContent = "Sending…";
        btn.disabled = true;
      });
    });

    /* ─ Ticker clone (marquee) ─ */
    qsa(".ticker-track").forEach(function (t) {
      t.parentElement.appendChild(t.cloneNode(true));
    });

    /* ─ Active nav link by URL ─ */
    var currentFile = window.location.pathname.split("/").pop() || "index.html";
    qsa(".nav a, .nav-dropdown a").forEach(function (l) {
      var href = (l.getAttribute("href") || "").split("/").pop();
      if (href && href === currentFile) l.classList.add("active");
    });

    /* ─ Scroll-triggered sticky banner ─ */
    var scrollCTA = qs(".scroll-cta");
    if (scrollCTA) {
      window.addEventListener(
        "scroll",
        function () {
          scrollCTA.classList.toggle("visible", window.scrollY > 500);
        },
        { passive: true },
      );
    }

    /* ─ Quick service chip toggles ─ */
    qsa(".quick-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        qsa(".quick-btn", btn.parentElement).forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });

    /* ─ Stub for legacy calls ─ */
    window.initializeNavigation = function () {};
  }); // end DOMContentLoaded
})();
