const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1812";
    const employee = new Manager("Philemon", 1, "philemon.kirlles@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });


  
  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Philemon", 1, "philemon.kirlles@gmail.com", "philemonkirlles");
    expect(employee.getRole()).toBe(role);
  });