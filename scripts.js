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
        newSquare.addEventListener("click", function() {
            newSquare.style.background = getRandomColor();
        });

        newSquare.addEventListener("dblclick", function() {
            if (newSquare.id % 2 === 0) {
                if (newSquare.nextSibling !== null) {
                    newSquare.nextSibling.remove();
                } else {
                    alert(" No Odd Square Next ");
                }
            } else {
                if (newSquare.previousSibling !== null) {
                    newSquare.previousSibling.remove();
                } else {
                    alert("No Even Square Before");
                }
            }

        });





        flexContainer.appendChild(newSquare);
        squareID++
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}