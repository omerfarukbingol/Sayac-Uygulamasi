const linkedInHeader = document.getElementsByClassName("count-linkedin")[0]
const githubHeader = document.getElementsByClassName("count-github")[0]
const youtubeHeader = document.getElementsByClassName("count-youtube")[0]
const twitterHeader = document.getElementsByClassName("count-twitter")[0]
const instagramHeader = document.getElementsByClassName("count-instagram")[0]

let lnCount = 0;
let gitCount = 0;
let ytCount = 0;
let twtCount = 0;
let insCount = 0;


let ln = setInterval(() => {
    lnCount += 5
    linkedInHeader.innerHTML = lnCount;
    if (lnCount == 4000)
        clearInterval(ln)

}, 100 % 20)

let git = setInterval(() => {
    gitCount += 3;
    githubHeader.innerHTML = gitCount;
    if (gitCount == 2505)
        clearInterval(git)
}, 1000 % 20)

let yt = setInterval(() => {
    ytCount += 7;
    youtubeHeader.innerHTML = ytCount;
    if (ytCount == 2100)
        clearInterval(yt)
}, 1000 % 20)

let twitter = setInterval(() => {
    twtCount += 8
    twitterHeader.innerHTML = twtCount;
    if (twtCount == 6400)
        clearInterval(twitter)
}, 1000 % 20)

let ig = setInterval(() => {
    insCount += 11;
    instagramHeader.innerHTML = insCount;
    if (insCount == 11000)
        clearInterval(ig)
}, 1000 % 1000)