$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Software Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Software Developer", "Frontend Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Initialize EmailJS
// emailjs.init("OGvlt78UfmOg_2rTXBLSh");

// Form submission handler
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.querySelector('.field.name input').value;
    const email = document.querySelector('.field.email input').value;
    const subject = document.querySelector('.field input[type="text"]').value;
    const message = document.querySelector('.field.textarea textarea').value;

    // Validate data (optional)
    if (!name || !email || !subject || !message) {
        alert("Please fill all the fields!");
        return;
    }

    // Send form data using EmailJS
    emailjs.send('service_p91khxn', 'template_03g2hb6', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    })
    .then(function (response) {
        console.log("SUCCESS!", response);
        alert("Message sent successfully!");
    })
    .catch(function (error) {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
    });
});
