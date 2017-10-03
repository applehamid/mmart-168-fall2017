const beyonceTweet = {
    name: "Beyoncé",
    handle: "@beyonce",
    text: "#LEMONADE the Visual Album."
}

const links = ["https://twitter.com/mmart168", "https://twitter.com/beyonce", "http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg"]

const modifyText = () => {
  console.log("modifying text")
  document.querySelector("#message2").innerHTML = "BEY0NCÉ ANNOUNCES WORLD TOUR!";
  document.querySelector("#link2").innerHTML = "Beyoncé";
  document.querySelector("#user2").innerHTML = "@beyoncé";

}

const changeLinkAndImageAttributes = () => {
  console.log('changing link attribute')
  // YOUR CODE BELOW THIS LINE
  document.querySelector("#link1").setAttribute("href", "https://twitter.com/mmart168");
  document.querySelector("#link2").setAttribute("href", "https://twitter.com/beyonce");
  document.querySelector("#beyonce").setAttribute("src", "http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg");
}

const changeClassAttribute = () => {
  // ENTER YOUR CODE BELOW THIS LINE
  console.log("changing class attribute")
  document.querySelectorAll(".tweet").classList.add("tweet-pink")
}

const appendElements = () => {
  console.log('appending element')
  // YOUR CODE BELOW THIS LINE
  var newlink = document.createElement("a").setAttribute("href", "https://f17.ebook.mmart.us/");
  var newtext = document.createTextNode("Intro to JavaScript");
  newlink.appendChild("newtext");
}
