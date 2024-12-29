var typed = new Typed('#element', {
    strings: ['Ethical Hacker', 'Penetration Tester'],
    typeSpeed: 50,   
    backSpeed: 25,    
    backDelay: 1000,  
    loop: true,        
    loopCount: Infinity,  
});
document.querySelector('#projects').addEventListener('click', function() {
    document.querySelector('.fifthSection').scrollIntoView({ behavior: 'smooth' });
});