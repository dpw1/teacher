export function scrollToElement($el, yOffset = 0) {
  if (typeof window !== "undefined") {
    const y = $el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
