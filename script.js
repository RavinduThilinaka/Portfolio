        // Initialize particles.js
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ff5e00" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ff5e00",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Text animation
        const dynamicText = document.querySelector('.dynamic-text');
        const words = ["AI Developer", "Web Designer", "Full Stack Developer", "UI/UX Designer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (!isDeleting) {
                dynamicText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000);
                    return;
                }
            } else {
                dynamicText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }
            
            setTimeout(typeEffect, isDeleting ? 50 : 150);
        }

        // Start the typing effect
        typeEffect();

        // Matrix rain animation
        function createMatrixRain() {
            const container = document.getElementById('matrix-container');
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%^&*()_+-=[]{}|;:,.<>?';
            const fontSize = 22;
            const columns = Math.floor(window.innerWidth / fontSize);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.classList.add('matrix-column');
                column.style.left = `${i * fontSize}px`;
                column.style.animationDelay = `${Math.random() * 5}s`;
                column.style.animationDuration = `${10 + Math.random() * 10}s`;
                
                // Create initial characters
                for (let j = 0; j < 30; j++) {
                    const char = document.createElement('span');
                    char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
                    char.style.opacity = `${0.1 + Math.random() * 0.9}`;
                    char.style.transform = `translateY(${j * fontSize}px)`;
                    column.appendChild(char);
                }
                
                container.appendChild(column);
            }
        }

        // Snow animation
        function createSnow() {
            const container = document.getElementById('snow-container');
            const snowflakes = ['R', 'A', 'V', 'I', 'N', 'D'];
            const count = 100;
            
            for (let i = 0; i < count; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.animationDuration = `${10 + Math.random() * 20}s`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                snowflake.style.fontSize = `${10 + Math.random() * 20}px`;
                snowflake.style.opacity = `${0.2 + Math.random() * 0.8}`;
                container.appendChild(snowflake);
            }
        }

        // Progress bar animation
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = `${percentage}%`;
                }, 500);
            });
        }

        // Mobile menu toggle - Updated
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-times');
            navbar.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('fa-times');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbar.classList.contains('active') && 
                !navbar.contains(e.target) && 
                e.target !== menuIcon) {
                menuIcon.classList.remove('fa-times');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate the position to scroll to (accounting for fixed header)
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to the target position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });

        // Scroll animations
        function checkScroll() {
            const elements = document.querySelectorAll('.hidden');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                
                if (isVisible) {
                    element.classList.add('show');
                    
                    if (element.classList.contains('skill-item')) {
                        animateProgressBars();
                    }
                }
            });
            
            // Scroll to top button
            const scrollTopBtn = document.getElementById('scrollTop');
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Initialize everything
        window.addEventListener('load', () => {
            createMatrixRain();
            createSnow();
            checkScroll();
        });

        window.addEventListener('scroll', checkScroll);
        
        document.getElementById('scrollTop').addEventListener('click', scrollToTop);

        // Filter projects
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectBoxes = document.querySelectorAll('.project-box');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filter = button.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectBoxes.forEach(project => {
                    if (filter === 'all' || project.getAttribute('data-category') === filter) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.classList.add('show');
                        }, 10);
                    } else {
                        project.classList.remove('show');
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 500);
                    }
                });
            });
        });