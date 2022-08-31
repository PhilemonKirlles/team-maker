const Engineer = require("../lib/Engineer");
test("getRole() should return Engineer as a role", () => {
  const role = "Engineer";
  const employee = new Engineer("Philemon", 1, "philemon.kirlles@gmail.com", "philemonkirlles");
  expect(employee.getRole()).toBe(role);
});

test("Ability to set GitHub username using constructor function", () => {
    const github = "philemonkirlles";
    const employee = new Engineer("Philemon", 1, "philemon.kirlles@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  