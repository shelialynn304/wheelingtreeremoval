// TRACKING.JS
// Centralized lead tracking for phone clicks, quote button clicks, and quote form submit attempts.

document.addEventListener("DOMContentLoaded", function () {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  const quoteButtons = document.querySelectorAll(".quote-btn");
  const quoteForm = document.getElementById("quote-form");

  phoneLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "phone_click", {
          event_category: "lead",
          event_label: link.getAttribute("href"),
          page_location: window.location.href,
        });
      }
    });
  });

  quoteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "quote_button_click", {
          event_category: "lead",
          event_label: (button.textContent || "").trim(),
          page_location: window.location.href,
        });
      }
    });
  });

  if (quoteForm) {
    quoteForm.addEventListener("submit", function () {
      if (typeof gtag === "function") {
        gtag("event", "quote_form_submit_attempt", {
          event_category: "lead",
          event_label: window.location.pathname,
          page_location: window.location.href,
        });
      }
    });
  }
});
