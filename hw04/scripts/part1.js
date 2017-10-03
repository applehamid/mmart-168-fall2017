let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    //setLanguage looks like it sets the primary language of the webpage
    languageCode = code
    if (code === 'km') {
        language = 'Khmer'
    } else if (code === 'gd') {
        language = 'Gaelic'
    } else {
        language = 'Corsican'
    }
    document.getElementById('language').innerHTML = language
}
