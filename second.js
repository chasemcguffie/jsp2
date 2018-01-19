document.addEventListener("DOMContentLoaded", function() {

let friends = ["Dan", "Tony", "Vito", "Mario", "Reid"]


    document.getElementById("myBtn").addEventListener("click", function(){

        for (f in friends) {
            var newElement = document.createElement('div');
            newElement.id = friends[f]; newElement.className = ("friend");
            var nameText = document.createElement('h3');
            nameText.innerText = friends[f];
            document.body.appendChild(newElement);
            document.getElementById(friends[f]).appendChild(nameText);
        }
    for (f = 0; f < friends.length; f++) {
        for (let j = 99; j > 0; j--) {
            if (j === 2) {
                var songText = document.createElement("p");
                songText.innerText = (`${j} lines of code in the file, ${j} lines of code; ${friends[f]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
                document.getElementById(friends[f]).appendChild(songText);
            } else if (j === 1) {
                var songText = document.createElement("p");
                songText.innerText =(`${j} line of code in the file, ${j} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
                document.getElementById(friends[f]).appendChild(songText);
            } else {
                var songText = document.createElement("p");
                songText.innerText =(`${j} lines of code in the file, ${j} lines of code; ${friends[f]} strikes one out, clears it all out, ${j - 1} lines of code in the file`);
                document.getElementById(friends[f]).appendChild(songText);
            }
        }
    }
})
})