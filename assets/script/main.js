document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const langToggle = document.getElementById("lang-toggle");
  const langToggleMobile = document.getElementById("lang-toggle-mobile");
  let currentLang = "es";

  // Mostrar / ocultar menú móvil
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✖";
  });

  // Cambiar idioma global
  function toggleLanguage() {
    const elements = document.querySelectorAll("[data-es]");
    currentLang = currentLang === "es" ? "en" : "es";
    elements.forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    langToggle.textContent = currentLang === "es" ? "EN" : "ES";
    langToggleMobile.textContent = currentLang === "es" ? "EN" : "ES";
    document.documentElement.lang = currentLang;
  }

  // Extensión del cambio de idioma para placeholders
    function updatePlaceholders(lang) {
    const fields = document.querySelectorAll("[data-es-placeholder]");
    fields.forEach(field => {
        field.placeholder = field.getAttribute(`data-${lang}-placeholder`);
    });
    }

    function toggleLanguage() {
    const elements = document.querySelectorAll("[data-es]");
    currentLang = currentLang === "es" ? "en" : "es";

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    updatePlaceholders(currentLang);

    langToggle.textContent = currentLang === "es" ? "EN" : "ES";
    langToggleMobile.textContent = currentLang === "es" ? "EN" : "ES";
    document.documentElement.lang = currentLang;
    }

  langToggle.addEventListener("click", toggleLanguage);
  langToggleMobile.addEventListener("click", toggleLanguage);
});