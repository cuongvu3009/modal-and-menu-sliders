const toggle = document.getElementById("toggle");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const open = document.getElementById("open");

//  evemt
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

open.addEventListener("click", () => modal.classList.add("show-modal"));

close.addEventListener("click", () => modal.classList.remove("show-modal"));
