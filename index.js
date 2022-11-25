const feedbackElement = document.querySelectorAll(".feedback-radio");
const likeYes = document.querySelector(".like-yes");
const likeNo = document.querySelector(".like-no");
// console.log(feedbackElement);
const res = document.getElementById('yes').checked;
console.log(res);

function feedback(){
    if(document.getElementById('yes').checked) {
        likeYes.setAttribute("style", "display : inline-block");
    }else if(document.getElementById('no').checked) {
        likeNo.setAttribute("style", "display : inline-block");
    }
}

function feedbackback(){
    if(document.getElementById('yes').onselectionchange ){
        likeYes.setAttribute("style", "display : none");
    }else if(document.getElementById('no').onselectionchange) {
        likeNo.setAttribute("style", "display : none");
    }
}
