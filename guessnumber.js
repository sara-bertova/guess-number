var y = Math.floor(Math.random() * 50 + 1);
var guess = 1;

document.getElementById("submitguess").onclick = function () {

    var x = document.getElementById("guessField").value;

    if (x == y) {
        alert("YOU ARE A GENIUS! YOU HAVE USED ONLY " +
            guess + " GUESS/ES ");
    } else if (x > y) {
        guess++;
        alert("OOPS, YOUR GUESS IS TOO HIGH. GO LOWER!");
    } else {
        guess++;
        alert("OOPS, YOUR GUESS IS TOO LOW. GO HIGHER!")
    }
}
