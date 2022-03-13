const Employee = require('../lib/Employee');

test("Employee class name", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.name).toBe("Rachel Schaaf")
})
test("Employee class ID", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.id).toBe(179)
})
test("Employee class email", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.email).toBe("rsaafi@gmail.com")
})

test("Employee class getName()", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.getName()).toBe("Rachel Schaaf")
})
test("Employee class getId()", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.getId()).toBe(179)
})
test("Employee class getEmail()", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.getEmail()).toBe("rsaafi@gmail.com")
})
test("Employee class getRole()", function(){
    const myemployee = new Employee("Rachel Schaaf",179,"rsaafi@gmail.com")
    expect(myemployee.getRole()).toBe("employee")
})