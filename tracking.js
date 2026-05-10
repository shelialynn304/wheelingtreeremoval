// TRACKING.JS
// Handles call clicks, quote clicks, and form submissions

document.addEventListener("DOMContentLoaded", function () {

  // ======================
  // CALL BUTTON TRACKING
  // ======================
  document.querySelectorAll(".call-now-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag('event', 'call_click', {
          event_category: 'engagement',
          event_label: window.location.pathname
        });
      }
      console.log("Call button clicked");
    });
  });

  // ======================
  // QUOTE BUTTON TRACKING
  // ======================
  document.querySelectorAll(".quote-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag('event', 'quote_click', {
          event_category: 'engagement',
          event_label: window.location.pathname
        });
      }
      console.log("Quote button clicked");
    });
  });


  // ======================
  // GA4 LEAD CLICK TRACKING
  // ======================
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  const quoteButtons = document.querySelectorAll('a[href="#quote"], .quote-btn');

  phoneLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "phone_click", {
          event_category: "lead",
          event_label: link.href,
          lead_type: "phone_call",
          page_location: window.location.href
        });

        gtag("event", "generate_lead", {
          lead_type: "phone_call",
          page_location: window.location.href
        });
      }
    });
  });

  quoteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "quote_button_click", {
          event_category: "lead",
          event_label: button.textContent.trim(),
          page_location: window.location.href
        });
      }
    });
  });

  // ======================
  // FORM SUBMISSION TRACKING
  // ======================
  const form = document.getElementById("quote-form");

  if (form) {
    form.addEventListener("submit", function () {
      if (typeof gtag === "function") {
        gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: window.location.pathname
        });
      }
      console.log("Form submitted");
    });
  }

});