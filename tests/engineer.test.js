const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
    it ("should create an object with GitHub account", () => {
        const newGithub = "";
        const engineer = new Engineer ("chuu",2,"chuu@Loona.com","robogf");
        expect(engineer.github).toBe(newGithub);
        
      
    })
    it("getRole should return as Engineer", () => {
        const newRole = "Engineer";
        const engineer = new Engineer("chuu",2,"chuu@Loona.com","robogf");
        expect(engineer.getRole()).toBe(newRole)
        
    })
    it("getGithub returns as github username", () => {
        const newGithub = ""
        const engineer = new Engineer ("chuu",2,"chuu@Loona.com","robogf");
        expect(engineer.getGithub()).toBe(newGithub)

    })
})