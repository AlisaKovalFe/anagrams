//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {

    // по инфо на хабр учитываются лишь символы; пробелы или знаки препинания в расчет не берутся

    let regexp = /[^\w]/g         // пыталась сделать и для русских букв, не смогла совместить, чтобы и латинские и русские буквы не включал
    let str1Arr = str1.replace(regexp, '').toLowerCase().split('')
    let str2Arr = str2.replace(regexp, '').toLowerCase().split('')
    if (str1Arr.length == str2Arr.length) return str1Arr.every((el) => str2Arr.includes(el))

    return false

    //через строки
    // let regexp = /[^\w]/g
    // let str1New = str1.replace(regexp, '').toLowerCase().split('').sort().join('')
    // let str2New = str2.replace(regexp, '').toLowerCase().split('').sort().join('')

    // if (str1New.length == str2New.length) return str1New == str2New
}

module.exports = isAnagrams


