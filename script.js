// script.ts
window.onload = function () {
    var button = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('Skillss');
    if (button && skillsSection) {
        button.addEventListener('click', function () {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
                button.innerHTML = '<b>(Hide) Skills</b>';
            }
            else {
                skillsSection.style.display = 'none';
                button.innerHTML = '<b>(Show) Skills</b>';
            }
        });
    }
};
