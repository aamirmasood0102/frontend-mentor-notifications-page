const redDot = document.querySelectorAll("[data-red-dot]")
const not = document.querySelectorAll("[data-not]")
const btn = document.getElementById("markAllBtn");
const noOfNots = document.getElementById("numberOfNots");
btn.addEventListener("click",()=>{
    not.forEach(el =>{
        el.classList.remove("unread");
    });
    redDot.forEach(item=>{
        item.style.display = "none";
    })
    noOfNots.style.display = "none";
});