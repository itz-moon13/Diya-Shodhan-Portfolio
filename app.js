// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Open sidebar
menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

// Close sidebar with X
closeIcon.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// Close sidebar after clicking any menu link
sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
});