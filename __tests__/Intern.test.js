const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "UConn School of Dreams ";
    const employee = new Intern("Philemon", 1, "Philemon.kirlleuos@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Philemon", 1, "Philemon.kirlleuos@gmail.com", "Philemonkirlleuos");
    expect(employee.getRole()).toBe(role);
  });