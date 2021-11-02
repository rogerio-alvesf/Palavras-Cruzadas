function check_cpu() {
    var letter_r1c1 = r1c1.value;
    var letter_r2c1 = r2c1.value;
    var letter_r3c1 = r3c1.value;
    if (letter_r1c1.toLowerCase() == "c" & letter_r2c1.toLowerCase() == "p" & letter_r3c1.toLowerCase() == "u") {
        r1c1.style.backgroundColor = "green";
        r2c1.style.backgroundColor = "green";
        r3c1.style.backgroundColor = "green";
    }else{
        r1c1.style.backgroundColor = "white";
        r2c1.style.backgroundColor = "white";
        r3c1.style.backgroundColor = "white";
    }
}

function check_cs(){
    var letter_r1c1 = r1c1.value;
    var letter_r1c2 = r1c2.value;
    if (letter_r1c1.toLowerCase() == "c" & letter_r1c2.toLowerCase() == "s") {
        r1c1.style.backgroundColor = "green";
        r1c2.style.backgroundColor = "green";
    }else{
        r1c1.style.backgroundColor = "white";
        r1c2.style.backgroundColor = "white";
    }
}

function check_ula(){
    var letter_r3c1 = r3c1.value;
    var letter_r3c2 = r3c2.value;
    var letter_r3c3 = r3c3.value;
    if (letter_r3c1.toLowerCase() == "u" & letter_r3c2.toLowerCase() == "l" & letter_r3c3.toLowerCase() == "a") {
        r3c1.style.backgroundColor = "green";
        r3c2.style.backgroundColor = "green";
        r3c3.style.backgroundColor = "green";
    }else{
        r3c1.style.backgroundColor = "white";
        r3c2.style.backgroundColor = "white";
        r3c3.style.backgroundColor = "white";
    }
}

function check_ram(){
    var letter_r2c3 = r2c3.value;
    var letter_r3c3 = r3c3.value;
    var letter_r4c3 = r4c3.value;
    if (letter_r2c3.toLowerCase() == "r" & letter_r3c3.toLowerCase() == "a" & letter_r4c3.toLowerCase() == "m") {
        r2c3.style.backgroundColor = "green";
        r3c3.style.backgroundColor = "green";
        r4c3.style.backgroundColor = "green";
    }else{
        r2c3.style.backgroundColor = "white";
        r3c3.style.backgroundColor = "white";
        r4c3.style.backgroundColor = "white";
    }
}

function check_rom(){
    var letter_r2c3 = r2c3.value;
    var letter_r2c4 = r2c4.value;
    var letter_r2c5 = r2c5.value;
    if (letter_r2c3.toLowerCase() == "r" & letter_r2c4.toLowerCase() == "o" & letter_r2c5.toLowerCase() == "m") {
        r2c3.style.backgroundColor = "green";
        r2c4.style.backgroundColor = "green";
        r2c5.style.backgroundColor = "green";
    }else{
        r2c3.style.backgroundColor = "white";
        r2c4.style.backgroundColor = "white";
        r2c5.style.backgroundColor = "white";
    }
}

function check_dma(){
    var letter_r1c5 = r1c5.value;
    var letter_r2c5 = r2c5.value;
    var letter_r3c5 = r3c5.value;
    if (letter_r1c5.toLowerCase() == "d" & letter_r2c5.toLowerCase() == "m" & letter_r3c5.toLowerCase() == "s") {
        r1c5.style.backgroundColor = "green";
        r2c5.style.backgroundColor = "green";
        r3c5.style.backgroundColor = "green";
    }else{
        r1c5.style.backgroundColor = "white";
        r2c5.style.backgroundColor = "white";
        r3c5.style.backgroundColor = "white";
    }
}

function check_data_bus(){
    var letter_r1c5 = r1c5.value;
    var letter_r1c6 = r1c6.value;
    var letter_r1c7 = r1c7.value;
    var letter_r1c8 = r1c8.value;
    var letter_r1c10 = r1c10.value;
    var letter_r1c11 = r1c11.value;
    var letter_r1c12 = r1c12.value;
    if (letter_r1c5.toLowerCase() == "d" & letter_r1c6.toLowerCase() == "a" & letter_r1c7.toLowerCase() == "t" & letter_r1c8.toLowerCase() == "a" & letter_r1c10.toLowerCase() == "b" & letter_r1c11.toLowerCase() == "u" & letter_r1c12.toLowerCase() == "s") {
        r1c5.style.backgroundColor = "green";
        r1c6.style.backgroundColor = "green";
        r1c7.style.backgroundColor = "green";
        r1c8.style.backgroundColor = "green"; 
        r1c10.style.backgroundColor = "green";
        r1c11.style.backgroundColor = "green";
        r1c12.style.backgroundColor = "green";
    }else{
        r1c5.style.backgroundColor = "white";
        r1c6.style.backgroundColor = "white";
        r1c7.style.backgroundColor = "white";
        r1c8.style.backgroundColor = "white"; 
        r1c10.style.backgroundColor = "white";
        r1c11.style.backgroundColor = "white";
        r1c12.style.backgroundColor = "white";
    }
}

function check_adress_bus(){
    var letter_r1c8 = r1c8.value;
    var letter_r2c8 = r2c8.value;
    var letter_r3c8 = r3c8.value;
    var letter_r4c8 = r4c8.value;
    var letter_r5c8 = r5c8.value;
    var letter_r6c8 = r6c8.value;
    var letter_r8c8 = r8c8.value;
    var letter_r9c8 = r9c8.value;
    var letter_r10c8 = r10c8.value;
    if (letter_r1c8.toLowerCase() == "a" & letter_r2c8.toLowerCase() == "d" & letter_r3c8.toLowerCase() == "r" & letter_r4c8.toLowerCase() == "e" & letter_r5c8.toLowerCase() == "s" & letter_r6c8.toLowerCase() == "s" & letter_r8c8.toLowerCase() == "b" & letter_r9c8.toLowerCase() == "u" & letter_r10c8.toLowerCase() == "s") { 
        r1c8.style.backgroundColor = "green";
        r2c8.style.backgroundColor = "green";
        r3c8.style.backgroundColor = "green";
        r4c8.style.backgroundColor = "green";
        r5c8.style.backgroundColor = "green";
        r6c8.style.backgroundColor = "green";
        r8c8.style.backgroundColor = "green";
        r9c8.style.backgroundColor = "green";
        r10c8.style.backgroundColor = "green";
    }else{
        r1c8.style.backgroundColor = "white";
        r2c8.style.backgroundColor = "white";
        r3c8.style.backgroundColor = "white";
        r4c8.style.backgroundColor = "white";
        r5c8.style.backgroundColor = "white";
        r6c8.style.backgroundColor = "white";
        r8c8.style.backgroundColor = "white";
        r9c8.style.backgroundColor = "white";
        r10c8.style.backgroundColor = "white";
    }
}