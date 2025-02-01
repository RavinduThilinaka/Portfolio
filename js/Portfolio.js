var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



window.addEventListener('scroll', function () {
    const topButton = document.querySelector('.top');
    if (window.scrollY > 200) {  
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
});


document.querySelector('.top').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});
