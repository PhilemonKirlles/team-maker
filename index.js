// require 
// import
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
//export
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const renderHTML = require("./lib/generateHTML");

// Employee array
let employeesArr = [];


// Questions: all employees
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]

    // Questions: manager role prompt
    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter an office number!");
                  return false;
                }
              }
        }
    ]

    // Questions for engineer role
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username? (Required)",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;
                }
              }
        }
    ]

    // Questions for intern role
    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

    // Function to initialize the application
    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: " 'dist'  already exists. Do you want to overwrite it?",
                name: "overwrite"
            }).then(async (response) => {
    
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please enter your team information:")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("Your index.html file in the 'dist' folder will not be overwritten. Please move the current index.html file to another folder before restarting.")
                }
            })
        } else {
            console.log("Please enter your team's information below:")
            newEmployee()
        }
    };   

    // Function to create new employees
    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
            }

        });    
    
    };

    // Function that asks if you would like to add an employee. This will keep coming up until you are finished. When you're finished and say no, it will generate the index.html file
    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee?"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            // If the dist directory does not exist, then it creates the dist directory before creating the index.html file
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }

            // calls the renderHTML function in the generateHTML.js file to create the index.html
            
            fs.writeFile(filePath, renderHTML(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
                
                // Success message
                console.log("index.html has been created in the 'dist' folder!");
            });

        }
    })
};
    // Function call to initialize app
    init();