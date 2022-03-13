const Manager = require('../lib/Manager');

test("Manager class name", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.name).toBe("Rachel Schaaf")
})
test("Manager class ID", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.id).toBe(179)
})
test("Manager class email", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.email).toBe("rsaafi@gmail.com")
})

test("Manager class getName()", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.getName()).toBe("Rachel Schaaf")
})
test("Manager class getId()", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.getId()).toBe(179)
})
test("Manager class getEmail()", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.getEmail()).toBe("rsaafi@gmail.com")
})
test("Manager class getRole()", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.getRole()).toBe("manager")
})
test("Manager class getOfficenumber()", function(){
    const myManager = new Manager("Rachel Schaaf",179,"rsaafi@gmail.com", "213-555-1212")
    expect(myManager.getOfficeNumber()).toBe("213-555-1212")
})
