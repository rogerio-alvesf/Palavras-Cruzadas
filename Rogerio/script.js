function hidden_button(){
    id_section.style.visibility = "visible";
    button_start.style.display = "none";
}


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

function check_cs(){
    var letter_r7c18 = r7c18.value;
    var letter_r7c19 = r7c19.value;
    if (letter_r7c18.toLowerCase() == "c" & letter_r7c19.toLowerCase() == "s") {
        r7c18.style.backgroundColor = "green";
        r7c19.style.backgroundColor = "green";
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
    }
}

function check_dma(){
    var letter_r1c5 = r1c5.value;
    var letter_r2c5 = r2c5.value;
    var letter_r3c5 = r3c5.value;
    if (letter_r1c5.toLowerCase() == "d" & letter_r2c5.toLowerCase() == "m" & letter_r3c5.toLowerCase() == "a") {
        r1c5.style.backgroundColor = "green";
        r2c5.style.backgroundColor = "green";
        r3c5.style.backgroundColor = "green";
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
    }
}

function check_eprom(){
    var letter_r4c8 = r4c8.value;
    var letter_r4c9 = r4c9.value;
    var letter_r4c10 = r4c10.value;
    var letter_r4c11 = r4c11.value;
    var letter_r4c12 = r4c12.value;
    if(letter_r4c8.toLowerCase() == "e" & letter_r4c9.toLowerCase() == "p" & letter_r4c10.toLowerCase() == "r" & letter_r4c11.toLowerCase() == "o" & letter_r4c12.toLowerCase() == "m"){
        r4c8.style.backgroundColor = "green";
        r4c9.style.backgroundColor = "green";
        r4c10.style.backgroundColor = "green";
        r4c11.style.backgroundColor = "green";
        r4c12.style.backgroundColor = "green";
    }
}

function check_memoria(){
    var letter_r4c12 = r4c12.value;
    var letter_r5c12 = r5c12.value;
    var letter_r6c12 = r6c12.value;
    var letter_r7c12 = r7c12.value;
    var letter_r8c12 = r8c12.value;
    var letter_r9c12 = r9c12.value;
    var letter_r10c12 = r10c12.value;
    var letter_r12c12 = r12c12.value;
    var letter_r13c12 = r13c12.value;
    var letter_r15c12 = r15c12.value;
    var letter_r16c12 = r16c12.value;
    var letter_r17c12 = r17c12.value;
    var letter_r18c12 = r18c12.value;
    var letter_r19c12 = r19c12.value;
    if(letter_r4c12.toLowerCase() == "m" & letter_r5c12.toLowerCase() == "e" & letter_r6c12.toLowerCase() == "m" & letter_r7c12.toLowerCase() == "o" &  letter_r8c12.toLowerCase() == "r" &  letter_r9c12.toLowerCase() == "i" & letter_r10c12.toLowerCase() == "a" & letter_r12c12.toLowerCase() == "d" & letter_r13c12.toLowerCase() == "e" & letter_r15c12.toLowerCase() == "m" & letter_r16c12.toLowerCase() == "a" & letter_r17c12.toLowerCase() == "s" & letter_r18c12.toLowerCase() == "s" & letter_r19c12.toLowerCase() == "a"){
        r4c12.style.backgroundColor = "green";
        r5c12.style.backgroundColor = "green";
        r6c12.style.backgroundColor = "green";
        r7c12.style.backgroundColor = "green";
        r8c12.style.backgroundColor = "green";
        r9c12.style.backgroundColor = "green";
        r10c12.style.backgroundColor = "green";
        r12c12.style.backgroundColor = "green";
        r13c12.style.backgroundColor = "green";
        r15c12.style.backgroundColor = "green";
        r16c12.style.backgroundColor = "green";
        r17c12.style.backgroundColor = "green";
        r18c12.style.backgroundColor = "green";
        r19c12.style.backgroundColor = "green";
    }
}

function check_flash(){
    var letter_r6c5 = r6c5.value;
    var letter_r6c6 = r6c6.value;
    var letter_r6c7 = r6c7.value;
    var letter_r6c8 = r6c8.value;
    var letter_r6c9 = r6c9.value;
    if(letter_r6c5.toLowerCase() == "f" & letter_r6c6.toLowerCase() == "l" & letter_r6c7.toLowerCase() == "a" & letter_r6c8.toLowerCase() == "s" & letter_r6c9.toLowerCase() == "h"){
        r6c5.style.backgroundColor = "green";
        r6c6.style.backgroundColor = "green";
        r6c7.style.backgroundColor = "green";
        r6c8.style.backgroundColor = "green";
        r6c9.style.backgroundColor = "green";
    }
}

function check_i5(){
    var letter_r9c12 = r9c12.value;
    var letter_r9c13 = r9c13.value;
    if(letter_r9c12.toLowerCase() == "i" & letter_r9c13 == "5"){
        r9c12.style.backgroundColor = "green";
        r9c13.style.backgroundColor = "green";
    }
}

function check_dual_core(){
    var letter_r10c10 = r10c10.value;
    var letter_r10c11 = r10c11.value;
    var letter_r10c12 = r10c12.value;
    var letter_r10c13 = r10c13.value;
    var letter_r10c15 = r10c15.value;
    var letter_r10c16 = r10c16.value;
    var letter_r10c17 = r10c17.value;
    var letter_r10c18 = r10c18.value;
    if(letter_r10c10.toLowerCase() == "d" & letter_r10c11.toLowerCase() == "u" & letter_r10c12.toLowerCase() == "a" & letter_r10c13.toLowerCase() == "l" & letter_r10c15.toLowerCase() == "c" & letter_r10c16.toLowerCase() == "o" & letter_r10c17.toLowerCase() == "r" & letter_r10c18.toLowerCase() == "e"){
        r10c10.style.backgroundColor = "green";
        r10c11.style.backgroundColor = "green";
        r10c12.style.backgroundColor = "green";
        r10c13.style.backgroundColor = "green";
        r10c15.style.backgroundColor = "green";
        r10c16.style.backgroundColor = "green";
        r10c17.style.backgroundColor = "green";
        r10c18.style.backgroundColor = "green";
    }
}

function check_registradores(){
    var letter_r13c11 = r13c11.value;
    var letter_r13c12 = r13c12.value;
    var letter_r13c13 = r13c13.value;
    var letter_r13c14 = r13c14.value;
    var letter_r13c15 = r13c15.value;
    var letter_r13c16 = r13c16.value;
    var letter_r13c17 = r13c17.value;
    var letter_r13c18 = r13c18.value;
    var letter_r13c19 = r13c19.value;
    var letter_r13c20 = r13c20.value;
    var letter_r13c21 = r13c21.value;
    var letter_r13c22 = r13c22.value;
    var letter_r13c23 = r13c23.value;
    if(letter_r13c11.toLowerCase() == "r" & letter_r13c12.toLowerCase() == "e" & letter_r13c13.toLowerCase() == "g" & letter_r13c14.toLowerCase() == "i" & letter_r13c15.toLowerCase() == "s" & letter_r13c16.toLowerCase() == "t" & letter_r13c17.toLowerCase() == "r" & letter_r13c18.toLowerCase() == "a" & letter_r13c19.toLowerCase() == "d" & letter_r13c20.toLowerCase() == "o" & letter_r13c21.toLowerCase() == "r" & letter_r13c22.toLowerCase() == "e" & letter_r13c23.toLowerCase() == "s"){
        r13c11.style.backgroundColor = "green";
        r13c12.style.backgroundColor = "green";
        r13c13.style.backgroundColor = "green";
        r13c14.style.backgroundColor = "green";
        r13c15.style.backgroundColor = "green";
        r13c16.style.backgroundColor = "green";
        r13c17.style.backgroundColor = "green";
        r13c18.style.backgroundColor = "green";
        r13c19.style.backgroundColor = "green";
        r13c20.style.backgroundColor = "green";
        r13c21.style.backgroundColor = "green";
        r13c22.style.backgroundColor = "green";
        r13c23.style.backgroundColor = "green";
    }
}

function check_quad_core(){
    var letter_r2c18 = r2c18.value;
    var letter_r3c18 = r3c18.value;
    var letter_r4c18 = r4c18.value;
    var letter_r5c18 = r5c18.value;
    var letter_r7c18 = r7c18.value;
    var letter_r8c18 = r8c18.value;
    var letter_r9c18 = r9c18.value;
    var letter_r10c18 = r10c18.value;
    if(letter_r2c18.toLowerCase() == "q" & letter_r3c18.toLowerCase() == "u" & letter_r4c18.toLowerCase() == "a" & letter_r5c18.toLowerCase() == "d" & letter_r7c18.toLowerCase() == "c" & letter_r8c18.toLowerCase() == "o" & letter_r9c18.toLowerCase() == "r" & letter_r10c18.toLowerCase() == "e"){
        r2c18.style.backgroundColor = "green";
        r3c18.style.backgroundColor = "green";
        r4c18.style.backgroundColor = "green";
        r5c18.style.backgroundColor = "green";
        r7c18.style.backgroundColor = "green";
        r8c18.style.backgroundColor = "green";
        r9c18.style.backgroundColor = "green";
        r10c18.style.backgroundColor = "green";
    }
}