import { validateEmail, validatePassword } from './validation';
// passwordValidation.test.js

const validatePassword = require('./passwordValidation');

test('valid passwords', () => {
    expect(validatePassword('ValidPassword123!')).toBe(true);
    expect(validatePassword('AnotherValidPassword$')).toBe(true);
});

test('invalid passwords', () => {
    expect(validatePassword('invalid')).toBe(false);
    expect(validatePassword('NoSpecialChar123')).toBe(false);
    expect(validatePassword('noupper123!')).toBe(false);
    expect(validatePassword('NOLOWERNUMBER!')).toBe(false);
});
