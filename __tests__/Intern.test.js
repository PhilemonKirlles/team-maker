const Intern = require("../lib/Intern");

test("create intern object", () => {
  const name = "Alexandra";
  const id = "3000";
  const email = "alexandra@gmail.com";

  const intern = new Intern(name, id, email);

  expect(intern.name).toBe(name);
  expect(intern.id).toBe(id);
  expect(intern.email).toBe(email);

});

test("retrieve intern school", () => {

  const name = "Alexandra";
  const id = "3000";
  const school = "Github School of Zeros and Ones";

  const email = "Alexandra@gmail.com";
  const intern = new Intern(name, id, school, email);


  expect(intern.getSchool()).toStrictEqual(
    expect.stringContaining(intern.school.toString())
  );
});
