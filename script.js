//select dom
const btn = document.getElementById("btn");
const htmlCard = document.getElementById("wrapper");
const closeBtn = document.getElementById("closeBtn");

// event listener 
btn.addEventListener("click",showCard);
window.addEventListener("click",hideCardWithCondition)
closeBtn.addEventListener("click",hideCard)


// funtionality 
function showCard(){
    htmlCard.style.opacity = "1";
    htmlCard.style.visibility = "visible";
};

function hideCard(event){
        htmlCard.style.opacity = "0";
        htmlCard.style.visibility = "hidden";
};

function hideCardWithCondition(event){
    if(event.target.id === "body"){
        hideCard();
    }
};