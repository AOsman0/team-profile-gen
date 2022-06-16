const Intern = require("./Intern");

// the employee should have a name
// the employee should have an email
// the employee should have an id

// create a new instance

const instance = new Intern({
  name: "Abdirahman Osman",
  id: "098765",
  email: "osman1289@gmail.com",
  school: "UOB",
});

describe("Intern", () => {
  it("it should be an Intern", () => {
    const expected = "Intern";
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
  it("should return inters school", () => {
    const expected = "UOB";
    const actual = instance.getSchool();
    expect(actual).toEqual(expected);
  });
});
