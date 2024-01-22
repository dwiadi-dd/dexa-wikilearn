console.log("connected");
var coll = document.getElementsByClassName("side-title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var sideNav = this.nextElementSibling;
    sideNav.classList.toggle("hidden");
  });
}
