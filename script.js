/* Navbar toggle */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

/* Smooth scroll & active link */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('show');
    });
});

/* Highlight nav link on scroll */
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links li a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) a.classList.add('active');
    });
});

/* Back to Top button */
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTopButton.classList.add('show');
    else backToTopButton.classList.remove('show');
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Skills animation */
const skillCards = document.querySelectorAll('.skill-card');
function handleSkillsAnimation() {
    const triggerBottom = window.innerHeight * 0.85;
    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) card.classList.add('show');
        else card.classList.remove('show');
    });
}
window.addEventListener('scroll', handleSkillsAnimation);
handleSkillsAnimation();

/* Contact form */
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    if(name && email && message){
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else alert('Please fill in all fields.');
});

/* Particle Background */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
window.addEventListener('resize', ()=>{ width=canvas.width=window.innerWidth; height=canvas.height=window.innerHeight; });

const particles = [];
for(let i=0;i<100;i++){
    particles.push({x:Math.random()*width, y:Math.random()*height, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
}

function animate(){
    ctx.clearRect(0,0,width,height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba(88,166,255,0.7)';
        ctx.fill();
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>width)p.dx*=-1;
        if(p.y<0||p.y>height)p.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();
