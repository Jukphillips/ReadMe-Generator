// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(data) {
  let response;
  if (data.license == "MIT") {
   response = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license == "APACHE 2.0") {
    response = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license === "GPL 3.0") {
    response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (data.license === "MPL 2.0") {
    response = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    response = ""
  }
    return response
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicense(data)}

  ## Description
  ${data.projectDesc} 
  

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   

  ## Insallation
   > ${data.install}

  ## Usage
  ${data.needtoknow}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributions}

  ## Tests
  > ${data.test}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly ${data.userEmail}. You can find more of my work at ${data.githubAccount}.

 

`;
}

module.exports = generateMarkdown;
