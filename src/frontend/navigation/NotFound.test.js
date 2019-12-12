import notFound from './NotFound'
describe('not found function returns \'not found\' if no argument', () => {
    it('returns not found', () => {
        expect(notFound()).toBe('notFound')
    });
})
