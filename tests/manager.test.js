const Manager = require('../lib/manager')

describe("Manager class ", () => {
   
        it ("should create an object with an office number", () => {
            const newOffice = 5;
            const manager = new Manager ("chuu",2,"chuu@Loona.com",5);
            expect(manager.office).toBe(newOffice);
            
          
        })
        it("getRole should return as Manager", () => {
            const newRole = "Manager";
            const manager = new Manager ("chuu",2,"chuu@Loona.com",5);
            expect(manager.getRole()).toBe(newRole)
            
        })
        it("getGithub returns as github username", () => {
            const newOffice= 5
            const manager = new Manager ("chuu",2,"chuu@Loona.com",5);
            expect(manager.getOffice()).toBe(newOffice)
    
        })
    });