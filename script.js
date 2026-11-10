const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("open", !expanded);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
};

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector("img")?.alt || "Фотография маникюра";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
