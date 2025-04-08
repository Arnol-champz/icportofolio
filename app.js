const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hover-sign");

// sidebar elements //
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const navLinks = document.getElementById("nav-links");

const videoList = [video1, video2];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseleave", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// sidebar elements //

menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

navLinks.addEventListener("click", (e) => {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});
