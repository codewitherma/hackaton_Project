// TypeScript code for dynamic resume builder

interface EducationItem {
    school: string;
    degree: string;
    year: string;
}

interface ExperienceItem {
    jobTitle: string;
    company: string;
    duration: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    function addField(containerId: string, template: string): void {
        const container = document.getElementById(containerId) as HTMLDivElement;
        const newItem = document.createElement('div');
        newItem.classList.add(containerId.replace('Items', '-item'));
        newItem.innerHTML = template;
        container.appendChild(newItem);
    }

    document.getElementById('addEducation')?.addEventListener('click', () => {
        addField('education', `
            <div class="education-item">
                <label for="school">School:</label>
                <input type="text" name="school" required>
                
                <label for="degree">Degree:</label>
                <input type="text" name="degree" required>
                
                <label for="year">Year:</label>
                <input type="text" name="year" required>
            </div>
        `);
    });

    document.getElementById('addExperience')?.addEventListener('click', () => {
        addField('experience', `
            <div class="experience-item">
                <label for="jobTitle">Job Title:</label>
                <input type="text" name="jobTitle" required>
                
                <label for="company">Company:</label>
                <input type="text" name="company" required>
                
                <label for="duration">Duration:</label>
                <input type="text" name="duration" required>
            </div>
        `);
    });

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;

        let educationHTML = '';
        const educationItems = document.querySelectorAll('.education-item');
        educationItems.forEach((item) => {
            const school = (item.querySelector('input[name="school"]') as HTMLInputElement).value;
            const degree = (item.querySelector('input[name="degree"]') as HTMLInputElement).value;
            const year = (item.querySelector('input[name="year"]') as HTMLInputElement).value;
            educationHTML += `
                <div>
                    <h3>${school}</h3>
                    <p>Degree: ${degree}</p>
                    <p>Year: ${year}</p>
                </div>
            `;
        });

        let experienceHTML = '';
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item) => {
            const jobTitle = (item.querySelector('input[name="jobTitle"]') as HTMLInputElement).value;
            const company = (item.querySelector('input[name="company"]') as HTMLInputElement).value;
            const duration = (item.querySelector('input[name="duration"]') as HTMLInputElement).value;
            experienceHTML += `
                <div>
                    <h3>${jobTitle}</h3>
                    <p>Company: ${company}</p>
                    <p>Duration: ${duration}</p>
                </div>
            `;
        });

        resumeOutput.innerHTML = `
            <h2><span contenteditable="true" >${name}</span></h2>
            <p>Email: <span contenteditable="true" >${email}</span></p>
            <p>Phone: <span contenteditable="true" >${phone}</span></p>
            <h3>Education</h3>
            <span contenteditable="true" >${educationHTML}</span>
            <h3>Experience</h3>
           <span contenteditable="true" > ${experienceHTML}</span>
        `;
    });
});
