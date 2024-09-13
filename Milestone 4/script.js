// TypeScript code for dynamic resume builder
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    function addField(containerId, template) {
        var container = document.getElementById(containerId);
        var newItem = document.createElement('div');
        newItem.classList.add(containerId.replace('Items', '-item'));
        newItem.innerHTML = template;
        container.appendChild(newItem);
    }
    (_a = document.getElementById('addEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        addField('education', "\n            <div class=\"education-item\">\n                <label for=\"school\">School:</label>\n                <input type=\"text\" name=\"school\" required>\n                \n                <label for=\"degree\">Degree:</label>\n                <input type=\"text\" name=\"degree\" required>\n                \n                <label for=\"year\">Year:</label>\n                <input type=\"text\" name=\"year\" required>\n            </div>\n        ");
    });
    (_b = document.getElementById('addExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        addField('experience', "\n            <div class=\"experience-item\">\n                <label for=\"jobTitle\">Job Title:</label>\n                <input type=\"text\" name=\"jobTitle\" required>\n                \n                <label for=\"company\">Company:</label>\n                <input type=\"text\" name=\"company\" required>\n                \n                <label for=\"duration\">Duration:</label>\n                <input type=\"text\" name=\"duration\" required>\n            </div>\n        ");
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var educationHTML = '';
        var educationItems = document.querySelectorAll('.education-item');
        educationItems.forEach(function (item) {
            var school = item.querySelector('input[name="school"]').value;
            var degree = item.querySelector('input[name="degree"]').value;
            var year = item.querySelector('input[name="year"]').value;
            educationHTML += "\n                <div>\n                    <h3>".concat(school, "</h3>\n                    <p>Degree: ").concat(degree, "</p>\n                    <p>Year: ").concat(year, "</p>\n                </div>\n            ");
        });
        var experienceHTML = '';
        var experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach(function (item) {
            var jobTitle = item.querySelector('input[name="jobTitle"]').value;
            var company = item.querySelector('input[name="company"]').value;
            var duration = item.querySelector('input[name="duration"]').value;
            experienceHTML += "\n                <div>\n                    <h3>".concat(jobTitle, "</h3>\n                    <p>Company: ").concat(company, "</p>\n                    <p>Duration: ").concat(duration, "</p>\n                </div>\n            ");
        });
        resumeOutput.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h3>Education</h3>\n            ").concat(educationHTML, "\n            <h3>Experience</h3>\n            ").concat(experienceHTML, "\n        ");
    });
});
