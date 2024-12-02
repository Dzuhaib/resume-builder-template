// Get form fields
const nameField = document.getElementById('name');
const rollField = document.getElementById('roll');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const linkedinField = document.getElementById('linkedin');
const summaryField = document.getElementById('summary');
const addressField = document.getElementById('address');
const skillsField = document.getElementById('skills');
const hobbiesField = document.getElementById('hobbies');
const photoField = document.getElementById('photo');
const languagesField = document.getElementById('languages');


// Get preview fields
const resumeName = document.getElementById('resume-name');
const resumeRoll = document.getElementById('resume-roll')
const resumeEmail = document.getElementById('resume-email');
const resumePhone = document.getElementById('resume-phone');
const resumeLinkedin = document.getElementById('resume-linkedin');
const resumeSummary = document.getElementById('resume-summary');
const resumeAddress = document.getElementById('resume-address')
const resumeExperience = document.getElementById('resume-experience');
const resumeEducation = document.getElementById('resume-education');
const resumeSkills = document.getElementById('resume-skills');
const resumeHobbies = document.getElementById('resume-hobbies');
const resumePhoto = document.getElementById('resume-photo');
const resumeLanguages = document.getElementById('resume-languages')

// Get button fields
const previewButton = document.getElementById('preview-button');
const editButton = document.getElementById('edit-button');
const updateButton = document.getElementById('update-button')
const addEducationButton = document.getElementById('add-education');
const addExperienceButton = document.getElementById('add-experience');

// Education and Experience sections
const educationSection = document.getElementById('education-section');
const experienceSection = document.getElementById('experience-section');


// Create education fields
const createEducationFields = () => {
    const educationWrapper = document.createElement("div");
    educationWrapper.classList.add('education-entry');
    
    const degreeInput = document.createElement('input');
    degreeInput.type = 'textarea';
    degreeInput.placeholder = 'Degree (e.g., Bachelor of Science)';
    degreeInput.classList.add('education-title');
    educationWrapper.appendChild(degreeInput);

    const uniInput = document.createElement('input');
    uniInput.type = 'text';
    uniInput.placeholder = 'University (e.g., Harvard University)';
    uniInput.classList.add('education-uni')
    educationWrapper.appendChild(uniInput)

    const yearInput = document.createElement('input');
    yearInput.type = 'text';
    yearInput.placeholder = 'Year of Education';
    yearInput.classList.add('education-year');
    educationWrapper.appendChild(yearInput);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.type = 'button';
    removeButton.classList.add('education-remove');
    removeButton.addEventListener('click', () => {educationWrapper.remove()})
    educationWrapper.appendChild(removeButton);

    return educationWrapper;

}

// Add education on button click
addEducationButton.addEventListener('click', ()=>{
    educationSection.appendChild(createEducationFields())
})


// Create Experience fields 
const createExperienceFields = () => {
    const experienceWrapper = document.createElement('div')
    experienceWrapper.classList.add('experience-entry')

    const companyInput = document.createElement('input')
    companyInput.type = 'text';
    companyInput.placeholder = 'Company name';
    companyInput.classList.add('experience-company');
    experienceWrapper.appendChild(companyInput);

    const rollInput = document.createElement('input');
    rollInput.type = 'text';
    rollInput.placeholder = 'Enter your roll';
    rollInput.classList.add('experience-roll');
    experienceWrapper.appendChild(rollInput);

    const exYearInput = document.createElement('input');
    exYearInput.type = 'text';
    exYearInput.placeholder = 'For an example: 8 Months or 3 Years'
    exYearInput.classList.add('experience-year');
    experienceWrapper.appendChild(exYearInput)

    const exSummaryInput = document.createElement('textarea');
    exSummaryInput.type = 'textarea';
    exSummaryInput.placeholder = 'Short brief about your experience';
    exSummaryInput.classList.add('experience-summary');
    experienceWrapper.appendChild(exSummaryInput)

    const exRemoveBtn = document.createElement('button');
    exRemoveBtn.textContent = 'Romove';
    exRemoveBtn.type = 'button';
    exRemoveBtn.classList.add('experience-remove');
    exRemoveBtn.addEventListener('click', ()=> {experienceWrapper.remove()});
    experienceWrapper.appendChild(exRemoveBtn);

    return experienceWrapper
};

// Add experience on button click
addExperienceButton.addEventListener("click", () => {
    experienceSection.appendChild(createExperienceFields())
});

const updatePreview = () => {
    resumeName.textContent = nameField.value;
    resumeRoll.textContent = rollField.value;
    resumeEmail.textContent = emailField.value;
    resumePhone.textContent = phoneField.value;
    resumeLinkedin.textContent = linkedinField.value;
    resumeSummary.textContent = summaryField.value;
    // resumeSkills.textContent = skillsField.value;
    // resumeHobbies.textContent = hobbiesField.value;
    // resumeLanguages.textContent = languagesField.value;
    resumeAddress.textContent = addressField.value;

    resumeEducation.innerHTML = "";
    const educaionEntries = document.querySelectorAll(".education-entry");
    educaionEntries.forEach(entry => {
        const degree = entry.querySelector('.education-title').value;
        const year = entry.querySelector('.education-year').value;
        const educationUni = entry.querySelector('.education-uni').value;
        const educationItem = document.createElement('div');
        // educationItem.textContent = document.createElement('div');
        educationItem.textContent = `${degree} ${year} ${educationUni}`;
        resumeEducation.appendChild(educationItem);
    })

    resumeExperience.innerHTML = "";
    const experienceEntries = document.querySelectorAll(".experience-entry");
    experienceEntries.forEach(entry => {
        const expCompnay = entry.querySelector('.experience-company').value;
        const expRoll = entry.querySelector('.experience-roll').value;
        const expYear = entry.querySelector('.experience-year').value;
        const expSummary = entry.querySelector('.experience-summary').value;
        const experienceItem = document.createElement('div');
        // experienceItem.textContent = document.createElement('div');
        experienceItem.textContent = `${expCompnay} ${expRoll} ${expYear} ${expSummary}`;
        resumeExperience.appendChild(experienceItem);
    })

    // Skills preview
    resumeSkills.innerHTML = skillsField.value.split("\n").map(skill => `<div>${skill.trim()}</div>`).join("");

    // Hobbies preview
    resumeHobbies.innerHTML = hobbiesField.value.split("\n").map(hobby => `<div>${hobby.trim()}</div>`).join("");
    
    // Hobbies preview
    resumeLanguages.innerHTML = languagesField.value.split("\n").map(language => `<div>${language.trim()}</div>`).join("");

    // Photo preview 
    if (photoField.files && photoField.files[0]){
        const reader = new FileReader();
        reader.onload = (e) => resumePhoto.src = e.target.result;
        reader.readAsDataURL(photoField.files[0])
    }

};

previewButton.addEventListener('click', () => {
    updatePreview();
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('preview-container').classList.remove('hidden');
    previewButton.classList.add('hidden');
    updateButton.classList.remove('hidden');
})

