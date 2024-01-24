/*document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const customNav = document.querySelector('.custom-nav');

    if (navToggle && customNav) {
        navToggle.addEventListener('click', function () {
            customNav.classList.toggle('open');
        });

        customNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                customNav.classList.remove('open');
            });
        });
    }
});*/
document.addEventListener('DOMContentLoaded', function () {
    const pageSections = document.querySelectorAll('section');

    // Add the fade-in class to each section after a short delay
    setTimeout(() => {
        pageSections.forEach(section => {
            section.classList.add('fade-in');
        });
    }, 100);
});