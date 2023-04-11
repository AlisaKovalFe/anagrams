const isAnagrams = require('./index')

test('Функция должна возвращать индекс элемента', () => {
    expect(isAnagrams('melon', 'lemon')).toBe(true)
    expect(isAnagrams('melon', ' lemon?')).toBe(true)
    expect(isAnagrams('lemon', 'melon')).toBeTruthy()
    expect(isAnagrams('lemon', 'melong')).toBeFalsy()
    expect(isAnagrams('melon', 'melon')).toBe(true)
    expect(isAnagrams('MELON', 'lemon')).toBe(true)
    expect(isAnagrams('abcde2', 'c2abed')).toBeTruthy()
    expect(isAnagrams('kilso', 'osilk')).toBeTruthy()
})

test('Функция должна быть определена', () => {
    expect(isAnagrams('kilso', 'osilk')).toBeDefined()
})

