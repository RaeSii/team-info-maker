const Intern = require('../lib/Intern');

test("Intern class name", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.name).toBe("Rachel Schaaf")
})
test("Intern class ID", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.id).toBe(179)
})
test("Intern class email", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.email).toBe("rsaafi@gmail.com")
})

test("Intern class getName()", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.getName()).toBe("Rachel Schaaf")
})
test("Intern class getId()", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.getId()).toBe(179)
})
test("Intern class getEmail()", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.getEmail()).toBe("rsaafi@gmail.com")
})
test("Intern class getRole()", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.getRole()).toBe("Intern")
})
test("Intern class getGithub()", function(){
    const myIntern = new Intern("Rachel Schaaf",179,"rsaafi@gmail.com", "University California Los Angeles")
    expect(myIntern.getGithub()).toBe("")
})
