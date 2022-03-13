const Engineer = require('../lib/Engineer');

test("Engineer class name", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.name).toBe("Rachel Schaaf")
})
test("Engineer class ID", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.id).toBe(179)
})
test("Engineer class email", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.email).toBe("rsaafi@gmail.com")
})

test("Engineer class getName()", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.getName()).toBe("Rachel Schaaf")
})
test("Engineer class getId()", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.getId()).toBe(179)
})
test("Engineer class getEmail()", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.getEmail()).toBe("rsaafi@gmail.com")
})
test("Engineer class getRole()", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.getRole()).toBe("Engineer")
})
test("Engineer class getGithub()", function(){
    const myEngineer = new Engineer("Rachel Schaaf",179,"rsaafi@gmail.com", "rsaafi")
    expect(myEngineer.getGithub()).toBe("")
})
