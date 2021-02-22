let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i <= 80; i++) {
    const div = document.createElement("div");
    if (i > 0) {
        if (i < 9) {
            div.innerText = letters.shift();
        } else if (i % 9 == 0) {
            div.innerText = numbers.shift();
        } else {
            div.style.backgroundColor = i % 2 == 0 ? 'black' : 'white';
        }
    }
    document.getElementById("field").appendChild(div);
}
