// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null){
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null){
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null){
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Thingy Thing](#thingy-thing)
  * [Bonky Bonk](#bonky-bonk)
  ---------


  ---------
  ## Questions
  My GitHub username is: [${data.github}](https://github.com/${data.github})
  Reach out to me at <${data.email}> with any and all questions regarding this project.

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};

// https://choosealicense.com/ this will be quite helpful