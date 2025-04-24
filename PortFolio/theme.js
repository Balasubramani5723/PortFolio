// Typed.js initialization for role animation
document.addEventListener('DOMContentLoaded', function() {
    // Other existing code...

    // Typed.js initialization
    if (document.getElementById('typed-text')) {
        var typed = new Typed('#typed-text', {
            strings: [
                'Fullstack Developer',
                'Frontend Developer',
                'UI/UX Designer',
                'Gamer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});