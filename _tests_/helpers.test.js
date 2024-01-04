const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2024-01-04 15:22:08');
    expect(format_date(date)).toBe('01/04/2024');
});