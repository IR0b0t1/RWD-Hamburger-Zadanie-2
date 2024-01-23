const menuBtn1 = document.querySelector('.hamburger1');
const menu1 = document.querySelector('.nav1');
const menu1Container = document.querySelector('.menu1'); // Get the menu1 container

menuBtn1.addEventListener('click', () => {
    menuBtn1.classList.toggle('is-active');
    menu1.classList.toggle('is-active');
    // Toggle background for menu1 container in mobile view
    if (window.innerWidth <= 768) {
        menu1Container.style.background = menu1.classList.contains('is-active') 
            ? 'linear-gradient(to right, #009fff, #ec2f4b)' : 'none';
    }
});

const menuBtn2 = document.querySelector('.hamburger2');
const menu2 = document.querySelector('.nav2');
const menu2Container = document.querySelector('.menu2'); // Get the menu2 container

menuBtn2.addEventListener('click', () => {
    menuBtn2.classList.toggle('is-active');
    menu2.classList.toggle('is-active');
    // Toggle background for menu2 container in mobile view
    if (window.innerWidth <= 768) {
        menu2Container.style.background = menu2.classList.contains('is-active') 
            ? 'linear-gradient(to right, #009fff, #ec2f4b)' : 'none';
    }
});
 
const menu21 = document.querySelector(".abc");

function abc() {
    console.log("Links clicked in nav1");
    if (window.innerWidth > 768) {
        menu21.style.display = menu21.style.display === "block" ? "none" : "block";
    }
};

// Ensure to link the abc() function to the 'Links' anchor in nav1
document.querySelector('.nav1 a[href="#"]').addEventListener('click', abc);
