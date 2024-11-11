// Function to detect when elements are in view
function inView() {
    const milestones = document.querySelectorAll('.milestone');
    const triggerBottom = window.innerHeight / 1.2;

    milestones.forEach(milestone => {
        const boxTop = milestone.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            milestone.classList.add('active');
        } else {
            milestone.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', inView);
window.addEventListener('load', inView);


document.addEventListener('scroll', function() {
    const chapters = document.querySelectorAll('.story-chapter');
    chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            chapter.classList.add('active');
        } else {
            chapter.classList.remove('active');
        }
    });
});