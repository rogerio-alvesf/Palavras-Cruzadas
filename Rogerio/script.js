function check_cpu() {
    var letter_r1c1 = r1c1.value;
    var letter_r2c1 = r2c1.value;
    var letter_r3c1 = r3c1.value;
    if (letter_r1c1.toLowerCase() == "c" & letter_r2c1.toLowerCase() == "p" & letter_r3c1.toLowerCase() == "u") {
        r1c1.style.backgroundColor = "green";
        r2c1.style.backgroundColor = "green";
        r3c1.style.backgroundColor = "green";
    }
}