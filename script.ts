// script.ts

window.onload = () => {
    const button = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('Skillss') as HTMLElement;

    if (button && skillsSection) {
        button.addEventListener('click', () => {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
                button.innerHTML = '<b>(Hide) Skills</b>';
            } else {
                skillsSection.style.display = 'none';
                button.innerHTML = '<b>(Show) Skills</b>';
            }
        });
    }
};
