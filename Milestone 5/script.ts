// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission

        // Extract input values from the form
        const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Handle profile picture
        const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
        let profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }

        // Create the resume layout in the output section
        resumeOutput.innerHTML = `
            <div class="resume">
                <h2>${fullName}'s Resume</h2>
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">` : ''}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Professional Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;
    });
});