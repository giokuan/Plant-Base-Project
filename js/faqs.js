const faqs = document.querySelectorAll(".faqs-container");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});