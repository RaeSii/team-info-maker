# Team Info Maker

## Requirements

#### Node installation

  You can install nodejs and npm easily by running the following commands.

      $ npm init
      $ npm i inquirer and jest

### Usage

  The application will be invoked by using the following command:
	
	$ node index

* [Sample HTML](https://raesii.github.io/team-info-maker/)
* [GitHub Repo](https://github.com/RaeSii/team-info-maker.git)
* [Demo Video](https://github.com/RaeSii/team-info-maker/blob/main/assets/demo-video.webm)
* [Test Video](https://github.com/RaeSii/team-info-maker/blob/main/assets/test-video.webm)

#### User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

#### Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

### Technology
JavaScript, Bootstrap, JQuery, NodeJS

### Coded by
Rachel Schaaf

### ScreenShot
![Sample HTML](https://github.com/RaeSii/team-info-maker/blob/main/assets/img2.png)
![README](https://github.com/RaeSii/team-info-maker/blob/main/assets/README.png)