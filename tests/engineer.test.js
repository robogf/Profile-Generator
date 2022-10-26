const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
    it ("should create an object with a name,id,email and github account ", () => {
        const engineer = new Engineer ("chuu",2,"chuu@Loona.com","robogf")
        expect(engineer.name).toBe("Chuu");
        expect(engineer.id).toBe(2);
        expect(engineer.email).toBe("Chuu@Loona.com");
        expect(engineer.github).toBe("robogf")

        expect(engineer.getName()).toBe(engineer.name);
        expect(engineer.getId()).toBe(engineer.id);
        expect(engineer.getEmail()).toBe(engineer.email);
        expect(engineer.getGithub()).toBe(engineer.github)
    })
})