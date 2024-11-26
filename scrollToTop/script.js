let div = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    div.classList.add("show");
  } else {
    div.classList.remove("show");
  }
};

div.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
