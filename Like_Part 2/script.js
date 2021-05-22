
var count = [0,0,0];
var counter = [document.querySelector("#likeCount1"), document.querySelector("#likeCount2"), document.querySelector("#likeCount3")]


function addLike (btn) {
    if(btn.id == "one"){
    count[0] ++;
    counter[0].innerText = count[0] + " like(s)"
    }
    else if(btn.id == "two"){
        count[1] ++;
        counter[1].innerText = count[1] + " like(s)"
    }
    else if(btn.id =="three") {
        count[2] ++;
        counter[2].innerText = count[2] + " like(s)"
    }
}