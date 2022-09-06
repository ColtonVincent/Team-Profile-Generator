const Employee = require('../lib/Employee')



describe('test Employee constructor', ()=>{
    test('make sure an object is created', () => {
        const e = new Employee()
        expect(typeof e).toBe('object')
    })
    test('make sure the name in the object comes back', () => {
        const name = 'Jon'
        const e = new Employee(name)
        expect(e.name).toBe(name)
    })
    test('make sure an id comes back', () => {
        const id = '78'
        const e = new Employee('Jill', id)
        expect(e.id).toBe(id)
    })
    test('make sure an email comes back', () => {
        const email = 'jondoe4@email.com'
        const e = new Employee('Taylor', '5', email)
        expect(e.email).toBe(email)
    })
    test('make sure the getName function returns a name', () => {
        const name = 'Bob'
        const e = new Employee(name)
        expect(e.getName()).toBe(name)
    })
    test('make sure the getId() comes back', () => {
        const id = '8'
        const e = new Employee('Hank', id)
        expect(e.getId()).toBe(id)
    })
    test('make sure the getEmail() comes back', () => {
        const email = 'bob46@email.com'
        const e = new Employee('Hank', '10', email)
        expect(e.getEmail()).toBe(email)
    })
    test('make sure the getRole() comes back', () => {
        const e = new Employee()
        expect(e.getRole()).toBe('Employee')
    })

})