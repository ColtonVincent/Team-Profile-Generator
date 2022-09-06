const Engineer = require('../lib/Engineer')



describe('test engineer constructor', () => {
    test('test that github comes back', () => {
        const gitHub = '@jon75'
        const e = new Engineer('bob', '8', 'jondoe@email.com', gitHub)
        expect(e.github).toBe(gitHub)
    })
    test('make sure getGithub() comes back', () => {
        const gitHub = '@jon75'
        const e = new Engineer('bob', '9', 'jondoe@email.com', gitHub)
        expect(e.getGithub()).toBe(gitHub)
    })
    test('make sure getRole() comes back', () => {
        const e = new Engineer()
        expect(e.getRole()).toBe('Engineer')
    })
})