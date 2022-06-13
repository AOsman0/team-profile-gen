const Manager = require("./Manager");

// the employee should have a name
// the employee should have an email
// the employee should have an id

// create a new instance

const instance = new Manager(
  "Abdirahman Osman",
  "098765",
  "osman1289@gmail.com",
  "0776547"
);

describe("Manager", () => {
  it("it should be an Manager", () => {
    const expected = "Manager";
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
  it("should manager's number", () => {
    const expected = "0776547";
    const actual = instance.getOfficeNumber();
    expect(actual).toEqual(expected);
  });
});
