// =============== MOBILE MENU TOGGLE ===============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// =============== SMOOTH SCROLLING ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============== SCROLL ANIMATIONS ===============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
    observer.observe(el);
});

// =============== NAVBAR BACKGROUND ON SCROLL ===============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(59, 130, 246, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
    }
});

// =============== ACTIVE NAV LINK HIGHLIGHTING ===============
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =============== ADD ACTIVE STYLE TO CSS ===============
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: var(--accent-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// =============== FORM VALIDATION (If you add a contact form) ===============
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// =============== PAGE LOAD ANIMATION ===============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// =============== PROJECTS DATA (Update with your actual projects) ===============
const projectsData = [
    {
        title: 'Project 1',
        description: 'Add project description here',
        tags: ['Solidity', 'Smart Contracts'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Add project description here',
        tags: ['React', 'Web3.js'],
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'Add project description here',
        tags: ['DeFi', 'Frontend'],
        link: '#'
    }
];

// =============== DYNAMIC YEAR IN FOOTER ===============
const footer = document.querySelector('.footer');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `<div class="container"><p>&copy; ${year} Martins Aloysius. All rights reserved.</p></div>`;
}

// =============== KEYBOARD NAVIGATION ===============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu && navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    }
});

// =============== PRINT STYLES ===============
const printStyle = document.createElement('style');
printStyle.innerHTML = `
    @media print {
        .navbar,
        .hero-shape {
            display: none;
        }
        
        body {
            background-color: white;
            color: black;
        }
    }
`;
document.head.appendChild(printStyle);

// =============== HELPER: UPDATE SOCIAL LINKS ===============
// Easy function to update social links - just call updateSocialLink('linkedin', 'https://linkedin.com/in/yourprofile')
function updateSocialLink(platform, url) {
    const link = document.querySelector(`.social-link.${platform}`);
    if (link) {
        link.href = url;
    }
}

// =============== HELPER: UPDATE PROJECT INFO ===============
// Easy function to update project details - just call updateProject(0, { title: 'New Title', description: 'New Desc', link: 'url' })
function updateProject(index, data) {
    const cards = document.querySelectorAll('.project-card');
    if (cards[index]) {
        if (data.title) cards[index].querySelector('h3').textContent = data.title;
        if (data.description) cards[index].querySelector('.project-description').textContent = data.description;
        if (data.link) cards[index].querySelector('.project-link').href = data.link;
    }
}

console.log('Portfolio loaded successfully! 🚀');
