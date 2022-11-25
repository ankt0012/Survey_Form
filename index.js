const feedbackElement = document.querySelectorAll(".feedback-radio");
const likeYes = document.querySelector(".like-yes");
const likeNo = document.querySelector(".like-no");
// console.log(feedbackElement);


function feedback(){
    if(document.getElementById('yes').checked) {
        likeYes.setAttribute("style", "display : inline-block");
    }else if(document.getElementById('no').checked) {
        likeNo.setAttribute("style", "display : inline-block");
    }
}


