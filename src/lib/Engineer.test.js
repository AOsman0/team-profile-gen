const Engineer = require("./Engineer");

// the employee should have a name
// the employee should have an email
// the employee should have an id

// create a new instance

const instance = new Engineer({
  name: "Abdirahman Osman",
  id: "098765",
  email: "osman1289@gmail.com",
  githubUsername: "AOsman322",
});

describe("Engineer", () => {
  it("it should be an Engineer", () => {
    const expected = "Engineer";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  it("should return name of Employee", () => {
    const expected = "Abdirahman Osman";
    const actual = instance.getName();
    expect(actual).toEqual(expected);
  });
  it("should return email of ID", () => {
    const expected = "098765";
    const actual = instance.getId();
    expect(actual).toEqual(expected);
  });
  it("should return email of Employee", () => {
    const expected = "osman1289@gmail.com";
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
  it("should return github username", () => {
    const expected = "AOsman322";
    const actual = instance.getGithubUsername();
    expect(actual).toEqual(expected);
  });
});
