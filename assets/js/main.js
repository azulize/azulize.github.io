/* Azulize — minimal, dependency-free interactions.
   Only a mobile navigation toggle. No cookies, no storage, no tracking. */
(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(nav.classList.contains("is-open") === false);
  });

  // Close the menu after tapping a link.
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close on Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // Reset state when resizing back up to desktop.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 720) setOpen(false);
  });
})();
