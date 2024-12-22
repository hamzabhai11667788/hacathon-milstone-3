// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
if (form) {
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value || "N/A";
    const email = (document.getElementById("email") as HTMLInputElement).value || "N/A";
    const phone = (document.getElementById("phone") as HTMLInputElement).value || "N/A";
    const education = (document.getElementById("education") as HTMLTextAreaElement).value || "N/A";
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value || "N/A";
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value || "N/A";

    // Generate resume content dynamically
    const resumeHTML = `
      <h2>Resume</h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Work Experience</h3>
      <p>${experience}</p>

      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    // Display the resume
    if (resumeDisplay) {
      resumeDisplay.innerHTML = resumeHTML;
    } else {
      console.error("Resume display element is missing.");
    }
  });
} else {
  console.error("Form element is missing.");
}
