function hide() {
  let container = document.querySelector(".headcontainer");
  container.style.display = "none";
  pictureKeeper();
}

function startLoading() {
  let heads = document.querySelectorAll(".head");
  for (const spinner of heads) {
    spinner.style.transform = "rotate(720deg)";
  }
  heads[0].addEventListener("transitionend", hide);
}

function pictureKeeper() {
    let pictures = document.querySelector(".pictures");
    pictures.style.display = "flex";
}

window.addEventListener("load", function () {
  startLoading();
});
