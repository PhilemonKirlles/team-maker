const Intern = require("../lib/Intern");

test("create intern object", () => {
  const name = "Alexandra";
  const id = "3000";
  const email = "Alexandra@gmail.com";
  const school = "Github School of Zeros and Ones";
  const intern = new Intern(name, id, email, school);

  expect(intern.name).toBe(name);
  expect(intern.id).toBe(id);
  expect(intern.school).toBe(school);
  expect(intern.email).toBe(email);
});

test("retrieve intern school", () => {
  const name = "Alexandra";
  const id = "3000";
  const school = "Github School of Zeros and Ones";

  const intern = new Intern(name, id, email, school);
  const email = "Alexandra@gmail.com";
  expect(intern.getSchool()).toStrictEqual(
    expect.stringContaining(intern.school.toString())
  );
});
