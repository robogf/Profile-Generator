const Intern = require ('../lib/Intern')

describe("Intern class", () => {
    it("should create an object with a name,id,email, and school ", () =>{
        const intern = new intern ("chuu",2,"chuu@Loona.com","Seoul National University")
        expect(intern.name).toBe("Chuu");
        expect(intern.id).toBe(2);
        expect(intern.email).toBe("Chuu@Loona.com");
        expect(intern.school).toBe("Seoul National University")

        expect(intern.getName()).toBe(intern.name);
        expect(intern.getId()).toBe(intern.id);
        expect(intern.getEmail()).toBe(intern.email);
        expect(intern.getSchool()).toBe(intern.school);
    })
})