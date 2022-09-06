const Manager = require('../lib/Manager')



describe('test manager constructor', () => {
    test('test that officenumber comes back', () => {
        const officeNumber = '15'
        const e = new Manager('jake', '9', 'jondoe@email.com', officeNumber)
        expect(e.officeNumber).toBe(officeNumber)
    })
    test('make sure getOfficeNumber() comes back', () => {
        const officeNumber = '15'
        const e = new Manager('bob', '9', 'jondoe@email.com', officeNumber)
        expect(e.getOfficeNumber()).toBe(officeNumber)
    })
    test('make sure getRole() comes back', () => {
        const e = new Manager()
        expect(e.getRole()).toBe('Manager')
    })
})