const Intern = require('../lib/Intern')



describe('test intern constructor', () => {
    test('test that school comes back', () => {
        const school = 'UofU'
        const e = new Intern('jake', '5', 'jondoe@email.com', school)
        expect(e.school).toBe(school)
    })
    test('make sure getSchool() comes back', () => {
        const school = 'UofU'
        const e = new Intern('bob', '8', 'jondoe@email.com', school)
        expect(e.getSchool()).toBe(school)
    })
    test('make sure getRole() comes back', () => {
        const e = new Intern()
        expect(e.getRole()).toBe('Intern')
    })
})