document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typewriter Effect
    const typewriterText = "Your Digital Partners!";
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typewriterElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (typeof i == 'undefined') {
            i = 0;
        }
        if (i < typewriterText.length) {
            typeWriter(typewriterText, i, function() {
                // Loop the typewriter effect
                StartTextAnimation();
            });
        }
    }

    StartTextAnimation();
});

document.addEventListener("DOMContentLoaded", function() {
    // Project data
    const projects = [
        {
            title: "Project 1",
            description: "Brief description of Project 1",
            image: "assets/project1.jpg",
            blogUrl: "blog1.html",
            type: "marketing"
        },
        {
            title: "Project 2",
            description: "Brief description of Project 2",
            image: "assets/project2.jpg",
            blogUrl: "blog2.html",
            type: "creative"
        },
        {
            title: "Project 3",
            description: "Brief description of Project 3",
            image: "assets/project3.jpg",
            blogUrl: "blog3.html",
            type: "tech"
        },
        {
            title: "Project 4",
            description: "Brief description of Project 4",
            image: "assets/project4.jpg",
            blogUrl: "blog4.html",
            type: "custom"
        }
    ];

    const slideshowContainer = document.querySelector('.slideshow-container');
    const filterButtons = document.querySelectorAll('.filter-button');

    function displayProjects(filter) {
        slideshowContainer.innerHTML = '';
        projects.forEach(project => {
            if (filter === 'all' || project.type === filter) {
                const slide = document.createElement('div');
                slide.className = 'slide';
                slide.style.backgroundImage = `url(${project.image})`;
                slide.innerHTML = `
                    <div class="slide-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                `;
                slide.addEventListener('click', () => {
                    window.open(project.blogUrl, '_blank');
                });
                slideshowContainer.appendChild(slide);
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            displayProjects(filter);
        });
    });

    // Initial display
    displayProjects('all');
});

document.addEventListener("DOMContentLoaded", function() {
    // 3D Model and Mouse Following Effect
    const aiRobotHead = document.querySelector('.ai-robot-head');
    const model = document.createElement('div');
    model.className = 'model';
    aiRobotHead.appendChild(model);

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (mouseX - centerX) / centerX * 20;
        const offsetY = (mouseY - centerY) / centerY * 20;

        model.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
    });

    // Story Button Click Event
    const storyButton = document.querySelector('.story-button');
    storyButton.addEventListener('click', () => {
        window.open('softics-story.html', '_blank');
    });
});