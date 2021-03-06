let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

const clearData = () => {
    const element = document.getElementById("results")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode
            let status

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            /*// output the text of the first tweet:
            status = json.statuses[0]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the second tweet:
            status = json.statuses[1]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 1. Describe what you think this code is doing.
            //getData pulls two tweets from live twitter data -- they are also stylized in a readable format

            // 2. output the text of the third tweet:
            status = json.statuses[2]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 3. output the text of the fourth tweet:
            status = json.statuses[3]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 4. output the text of the fifth tweet:
            status = json.statuses[4]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // 5. comment the code above, starting from after the clearData,
            //    and ending right before this comment. Then, un-comment the
            //    code below:*/

            json.statuses.forEach(function (status) {
                div = document.createElement("div")
                div.className = "tweet"
                textNode = document.createTextNode(status.text)
                div.appendChild(textNode)
                document.getElementById("results").appendChild(div)
            })
            //forEach looks like it's creating a stream of tweets from the hashtag search -- without writing out separate code for each tweet as above

        })
};
