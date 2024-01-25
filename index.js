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

// toggle responsive main nav

const navHide = () => {
  console.log("test");
  const mainNav = document.getElementById("main-nav");

  mainNav.classList.toggle("responsive");
};

const sidebarHide = () => {
  console.log("test");
  const siebar = document.querySelector("#main-sidebar");

  siebar.classList.toggle("sidebar-docs");
};
