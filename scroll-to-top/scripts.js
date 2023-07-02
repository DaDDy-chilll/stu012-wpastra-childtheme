let myBtn = document.getElementById("scrollTop");

function scrollFunc() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
    console.log("hi");
  }
}

function scrollPosition() {}

myBtn.addEventListener("click", scrollFunc);
window.onscroll = function () {
  scrollFunction();
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    myBtn.style.transform = "translateY(-10px)";
    myBtn.style.color = "red";
  } else {
    myBtn.style.transform = "translateY(0)";
  }
};
