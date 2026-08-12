(function () {
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".site-header");

  if (toggle) {
    toggle.addEventListener("click", function () {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const status = document.getElementById("open-status");
  if (status) {
    const now = new Date();
    const helsinki = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Helsinki" })
    );
    const day = helsinki.getDay();
    const minutes = helsinki.getHours() * 60 + helsinki.getMinutes();
    const open = day >= 1 && day <= 5 && minutes >= 8 * 60 && minutes < 16 * 60 + 30;
    status.textContent = open ? "Auki nyt" : "Suljettu nyt";
    status.className = open ? "status-open" : "status-closed";
  }

  if (header) {
    const onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 10px 30px rgba(0,0,0,.35)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
