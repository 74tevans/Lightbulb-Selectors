// Write your code here
const lightbulbs = document.querySelectorAll(".row > div");
const subtitle = document.querySelector(".subtitle");
let count = 0;

for (let lightbulb of lightbulbs) {
    lightbulb.addEventListener("click", function(){
        count++;
        if (count === 1){
            subtitle.innerHTML = `You've clicked the lights ${count} time`;
        }
        else {
            subtitle.innerHTML = `You've clicked the lights ${count} times`;
        }
        lightbulb.classList.toggle("active");
    })
}
