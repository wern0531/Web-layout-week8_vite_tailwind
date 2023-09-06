const accordionBtn = document.querySelectorAll(".accordionBtn");
accordionBtn.forEach((thisBtn) => {
  const removeIcon = thisBtn.querySelector(".removeIcon");
  const addIcon = thisBtn.querySelector(".addIcon");
  const accordionContent = thisBtn.querySelector(".accordionContent");
  thisBtn.addEventListener("click", () => {
    accordionBtn.forEach((otherBtn) => {
      const otherRemoveIcon = otherBtn.querySelector(".removeIcon");
      const otherAddIcon = otherBtn.querySelector(".addIcon");
      const otherAccordionContent = otherBtn.querySelector(".accordionContent");
      if (otherBtn !== thisBtn) {
        otherRemoveIcon.classList.add("hidden");
        otherAddIcon.classList.remove("hidden");
        otherAccordionContent.classList.add("hidden");
      }
    });
    removeIcon.classList.toggle("hidden");
    addIcon.classList.toggle("hidden");
    accordionContent.classList.toggle("hidden");
  });
});
