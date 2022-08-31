const Employee = require("../lib/Employee");



test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Philemon Kirlles", id, "philemon.kirlles@myassignmentpk37.com");
    expect(employee.id).toBe(id);
  });
  test("Ability to set name using constructor function", () => {
    const name = "Philemon Kirlles";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "philemon.kirlles@myassignmentpk37.com";
    const employee = new Employee("Philemon Kirlles", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Philemon Kirlles", 1, "philemon.kirlles@myassignmentpk37.com");
    expect(employee.getRole()).toBe(role);
  });