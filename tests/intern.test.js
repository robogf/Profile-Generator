const Intern = require ('../lib/Intern')

describe("Intern class", () => {
    it ("should create an object with a new school", () => {
        const newSchool = "";
        const intern = new Intern ("chuu",2,"chuu@Loona.com","Seoul Uni");
        expect(intern.school).toBe(newSchool);
        
      
    })
    it("getRole should return as Intern", () => {
        const newRole = "Intern";
        const intern = new Intern ("chuu",2,"chuu@Loona.com","Seoul Uni");
        expect(intern.getRole()).toBe(newRole)
        
    })
    it("getSchool returns as school name", () => {
        const newSchool = ""
        const intern = new Intern ("chuu",2,"chuu@Loona.com","Seoul Uni");
        expect(intern.getSchool()).toBe(newSchool)

    })
})