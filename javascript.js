document.addEventListener('DOMContentLoaded', () => {

    const navbarToggle = document.querySelector('#navbar-toggle');
    const navbarMenu = document.querySelector('#navbar-menu');
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });


    const navLinks = document.querySelectorAll('#navbar-menu .nav-link');
    const link = document.querySelectorAll('.link')
    const sections = document.querySelectorAll('section[id]');
    
    const ratios = {};
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            ratios[entry.target.id] = entry.intersectionRatio;
        });
    
        const visibleIds = Object.keys(ratios).filter(id => ratios[id] > 0);
        if (visibleIds.length === 0) return;
    
        const mostVisibleId = visibleIds.reduce((a, b) => ratios[a] > ratios[b] ? a : b);
    
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${mostVisibleId}`);
        });
    },{
        root: null,
        rootMargin: '-25% 0px -25% 0px',
        threshold:[0, 0.25, 0.5, 0.75, 1]
    });
    
    sections.forEach(s => {
        ratios[s.id] = 0;
        observer.observe(s);
    });
    
    link.forEach(link =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
    
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
            history.pushState(null, '', link.getAttribute('href'));
            navLinks.forEach(l => l.classList.toggle('active', l === link));
        });
    });

});