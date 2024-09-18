const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line": "ri-menu-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h2",{
    ...scrollRevealOption,
} );
ScrollReveal().reveal(".header_container h1",{
      ...scrollRevealOption,
      delay:500,
});
ScrollReveal().reveal(".header_container p",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_container .header_btns",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".header_image img",{
    duration: 1000,
     delay: 2000,
});

ScrollReveal().reveal(".app_image-1, .app_image-3",{
    ...scrollRevealOption,
   origin: "left",
});
ScrollReveal().reveal(".app_image-2", {
    ...scrollRevealOption,
    origin: "right",

});
ScrollReveal().reveal(".app_card h5",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".app_card h4",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".app_card p",{
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".download_container .section_header",{
    ...scrollRevealOption,

});
ScrollReveal().reveal(".download_container p",{
   ...scrollRevealOption,
   delay:500,
});
ScrollReveal().reveal(".download_container .downlOad_btns",{
    ...scrollRevealOption,
    delay:1000,
});  