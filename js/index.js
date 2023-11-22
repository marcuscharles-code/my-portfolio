//scroll sections active links........

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // //.........................sticky navbar.........
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
// JavaScript code to handle the menu toggle
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});


//scrll rveal//
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-con, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//========typed js==========
// var Typed = new Typed('.multiple-text',{
//     strings:  ['Frontend Developer', 'Content Creator', 'Freelancer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Content Creator', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendMail() {
   (function(){
    emailjs.init("4GN8C95K6OvUhfV52"); //account public key
   })();


   var params = {
        fullName: document.querySelector("#FullName").value,
        emailAddress: document.querySelector("#emailAddress").value,
        mobileNumber: document.querySelector("#mobileNumber").value,
        emailSubject: document.querySelector("#emailSubject").value,
        emailMessage: document.querySelector("#emailMessage").value,
    };

    var serviceId = "service_w1o8xd6"; //service id num
    var templateId = "template_tkpenx8"

    emailjs.send(serviceId, templateId, params)
    .then( res => {
        alert("Email Send Successfully!")
    })
    .catch((error) => {
        alert("Message Failed, Try Again")
    });
}




