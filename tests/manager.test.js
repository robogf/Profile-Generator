const Manager = require('../lib/manager')

describe("Manager class ", () => {
    it("should create an object with a name,id,email, and office number", () =>{
        const manager = new Manager ("Chuu",2,"Chuu@Loona.com",5);
        expect(manager.name).toBe("Chuu");
        expect(manager.id).toBe(2);
        expect(manager.email).toBe("Chuu@Loona.com");
        expect(manager.office).toBe(5);

        expect(manager.getName()).toBe(manager.name);
        expect(manager.getId()).toBe(manager.id);
        expect(manager.getEmail()).toBe(manager.email);
        expect(manager.getOffice()).toBe(manager.office);

    })
})