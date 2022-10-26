const Employee = require ('../lib/Employee')


describe("Employee class ", () =>{
    it ("Should create an object containing a name,id, and email", () => {
        const employee = new Employee ("Chuu", 2, "Chuu@Loona.com" )

        expect(employee.name).toBe("Chuu");
        expect(employee.id).toBe(2);
        expect(employee.email).toBe("Chuu@Loona.com");

        expect(employee.getName()).toBe(employee.name);
        expect(employee.getId()).toBe(employee.id);
        expect(employee.getEmail()).toBe(employee.email);
    })
})