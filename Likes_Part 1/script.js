var count = 0;
var counter = document.querySelector("#likeCount")

function addLike () {
    count ++;
    counter.innerText = count + " like(s)"
}