document.addEventListener("DOMContentLoaded", function() {
    let btn = document.createElement("button");
    btn.innerText = "Add Square";
    document.body.appendChild(btn);
    let flexContainer = document.createElement("div");
    flexContainer.classList.add('container');
    document.body.appendChild(flexContainer);
    let squareID = 1;

    btn.addEventListener("click", function() {
        let newSquare = document.createElement("div");
        newSquare.classList.add('square');
        newSquare.id = squareID;
        newSquare.innerText = squareID;





        flexContainer.appendChild(newSquare);
        squareID++
    });
});