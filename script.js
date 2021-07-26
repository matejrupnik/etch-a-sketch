let x = 16;
let y = 16;

function generate(){
for (let i = 0; i < ((x*y)); i++) {
    var div = document.createElement(`div`);
    div.className = `div`;
    div.textContent = ``;
    div.addEventListener(`mouseenter`, function(e) {
    e.target.classList.add(`hover`);
});
    document.getElementById(`container`).appendChild(div);
};
document.getElementById(`container`).style.gridTemplateColumns = `repeat(${x}, 1fr)`;
};
generate();


let allDivs = Array.from(document.querySelectorAll(`.div`));
let btn = document.getElementById(`reset`);
btn.addEventListener(`click`, function(){
allDivs.forEach(element => {
    element.classList.remove(`hover`);
});
do {
x = window.prompt(`test`, ``);
} while (x > 100);

do {
y = window.prompt(`test`, ``);
}while (y > 100);

let container = document.getElementById(`container`);
let div = document.getElementsByClassName(`div`);
let arrDiv = Array.from(div);
console.log(arrDiv);
arrDiv.forEach(element =>
    container.removeChild(element)
);
generate();

});
