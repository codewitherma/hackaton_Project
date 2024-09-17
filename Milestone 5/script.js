// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        // Extract input values from the form
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Handle profile picture
        var profilePicInput = document.getElementById("profilePic");
        var profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }
        // Create the resume layout in the output section
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h2>".concat(fullName, "'s Resume</h2>\n                ").concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Professional Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
    });
});
