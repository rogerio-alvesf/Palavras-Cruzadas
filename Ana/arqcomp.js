function hidden_button(){
    button_start.style.display = "none";
    grid_template_areas.style.visibility = "visible";
}

function check_cpu() {
    var letter_r1c1 = c_cpu.value;
    var letter_r2c1 = p_cpu.value;
    var letter_r3c1 = u_cpu.value;
    if (letter_r1c1.toLowerCase() == "c" & letter_r2c1.toLowerCase() == "p" & letter_r3c1.toLowerCase() == "u") {
        c_cpu.style.backgroundColor = "green";
        p_cpu.style.backgroundColor = "green";
        u_cpu.style.backgroundColor = "green";
    }
}

function check_cs(){
    var letter_r7c18 = c_quad.value;
    var letter_r7c19 = s_cs.value;
    if (letter_r7c18.toLowerCase() == "c" & letter_r7c19.toLowerCase() == "s") {
        c_quad.style.backgroundColor = "green";
        s_cs.style.backgroundColor = "green";
    }
}

function check_ula(){
    var letter_r3c1 = u_cpu.value;
    var letter_r3c2 = l_ula.value;
    var letter_r3c3 = a_ram.value;
    if (letter_r3c1.toLowerCase() == "u" & letter_r3c2.toLowerCase() == "l" & letter_r3c3.toLowerCase() == "a") {
        u_cpu.style.backgroundColor = "green";
        l_ula.style.backgroundColor = "green";
        a_ram.style.backgroundColor = "green";
    }
}

function check_ram(){
    var letter_r2c3 = r_ram.value;
    var letter_r3c3 = a_ram.value;
    var letter_r4c3 = m_ram.value;
    if (letter_r2c3.toLowerCase() == "r" & letter_r3c3.toLowerCase() == "a" & letter_r4c3.toLowerCase() == "m") {
        r_ram.style.backgroundColor = "green";
        a_ram.style.backgroundColor = "green";
        m_ram.style.backgroundColor = "green";
    }
}

function check_rom(){
    var letter_r2c3 = r_ram.value;
    var letter_r2c4 = o_rom.value;
    var letter_r2c5 = m_dma.value;
    if (letter_r2c3.toLowerCase() == "r" & letter_r2c4.toLowerCase() == "o" & letter_r2c5.toLowerCase() == "m") {
        r_ram.style.backgroundColor = "green";
        o_rom.style.backgroundColor = "green";
        m_dma.style.backgroundColor = "green";
    }
}

function check_dma(){
    var letter_r1c5 = d_dma.value;
    var letter_r2c5 = m_dma.value;
    var letter_r3c5 = a_dma.value;
    if (letter_r1c5.toLowerCase() == "d" & letter_r2c5.toLowerCase() == "m" & letter_r3c5.toLowerCase() == "a") {
        d_dma.style.backgroundColor = "green";
        m_dma.style.backgroundColor = "green";
        a_dma.style.backgroundColor = "green";
    }
}

function check_data_bus(){
    var letter_r1c5 = d_dma.value;
    var letter_r1c6 = a_data.value;
    var letter_r1c7 = t_data.value;
    var letter_r1c8 = a2_data.value;
    var letter_r1c10 = b_data.value;
    var letter_r1c11 = u_data.value;
    var letter_r1c12 = s_data.value;
    if (letter_r1c5.toLowerCase() == "d" & letter_r1c6.toLowerCase() == "a" & letter_r1c7.toLowerCase() == "t" & letter_r1c8.toLowerCase() == "a" & letter_r1c10.toLowerCase() == "b" & letter_r1c11.toLowerCase() == "u" & letter_r1c12.toLowerCase() == "s") {
        d_dma.style.backgroundColor = "green";
        a_data.style.backgroundColor = "green";
        t_data.style.backgroundColor = "green";
        a2_data.style.backgroundColor = "green"; 
        b_data.style.backgroundColor = "green";
        u_data.style.backgroundColor = "green";
        s_data.style.backgroundColor = "green";
    }
}

function check_adress_bus(){
    var letter_r1c8 = a2_data.value;
    var letter_r2c8 = d_adress.value;
    var letter_r3c8 = r_adress.value;
    var letter_r4c8 = e_adress.value;
    var letter_r5c8 = s1_adress.value;
    var letter_r6c8 = s2_adress.value;
    var letter_r8c8 = b_adress.value;
    var letter_r9c8 = u_adress.value;
    var letter_r10c8 = s_adress.value;
    if (letter_r1c8.toLowerCase() == "a" & letter_r2c8.toLowerCase() == "d" & letter_r3c8.toLowerCase() == "r" & letter_r4c8.toLowerCase() == "e" & letter_r5c8.toLowerCase() == "s" & letter_r6c8.toLowerCase() == "s" & letter_r8c8.toLowerCase() == "b" & letter_r9c8.toLowerCase() == "u" & letter_r10c8.toLowerCase() == "s") { 
        a2_data.style.backgroundColor = "green";
        d_adress.style.backgroundColor = "green";
        r_adress.style.backgroundColor = "green";
        e_adress.style.backgroundColor = "green";
        s1_adress.style.backgroundColor = "green";
        s2_adress.style.backgroundColor = "green";
        b_adress.style.backgroundColor = "green";
        u_adress.style.backgroundColor = "green";
        s_adress.style.backgroundColor = "green";
    }
}

function check_eprom(){
    var letter_r4c8 = e_adress.value;
    var letter_r4c9 = p_eprom.value;
    var letter_r4c10 = r_eprom.value;
    var letter_r4c11 = o_eprom.value;
    var letter_r4c12 = m_eprom.value;
    if(letter_r4c8.toLowerCase() == "e" & letter_r4c9.toLowerCase() == "p" & letter_r4c10.toLowerCase() == "r" & letter_r4c11.toLowerCase() == "o" & letter_r4c12.toLowerCase() == "m"){
        e_adress.style.backgroundColor = "green";
        p_eprom.style.backgroundColor = "green";
        r_eprom.style.backgroundColor = "green";
        o_eprom.style.backgroundColor = "green";
        m_eprom.style.backgroundColor = "green";
    }
}

function check_memoria(){
    var letter_r4c12 = m_eprom.value;
    var letter_r5c12 = e_memoria.value;
    var letter_r6c12 = m_memoria.value;
    var letter_r7c12 = o_memoria.value;
    var letter_r8c12 = r_memoria.value;
    var letter_r9c12 = i_memoria.value;
    var letter_r10c12 = a_dual.value;
    var letter_r12c12 = d_memoria.value;
    var letter_r13c12 = e2_memoria.value;
    var letter_r15c12 = m2_memoria.value;
    var letter_r16c12 = a2_memoria.value;
    var letter_r17c12 = s_memoria.value;
    var letter_r18c12 = s2_memoria.value;
    var letter_r19c12 = a3_memoria.value;
    if(letter_r4c12.toLowerCase() == "m" & letter_r5c12.toLowerCase() == "e" & letter_r6c12.toLowerCase() == "m" & letter_r7c12.toLowerCase() == "o" &  letter_r8c12.toLowerCase() == "r" &  letter_r9c12.toLowerCase() == "i" & letter_r10c12.toLowerCase() == "a" & letter_r12c12.toLowerCase() == "d" & letter_r13c12.toLowerCase() == "e" & letter_r15c12.toLowerCase() == "m" & letter_r16c12.toLowerCase() == "a" & letter_r17c12.toLowerCase() == "s" & letter_r18c12.toLowerCase() == "s" & letter_r19c12.toLowerCase() == "a"){
        m_eprom.style.backgroundColor = "green";
        e_memoria.style.backgroundColor = "green";
        m_memoria.style.backgroundColor = "green";
        o_memoria.style.backgroundColor = "green";
        r_memoria.style.backgroundColor = "green";
        i_memoria.style.backgroundColor = "green";
        a_dual.style.backgroundColor = "green";
        d_memoria.style.backgroundColor = "green";
        e2_memoria.style.backgroundColor = "green";
        m2_memoria.style.backgroundColor = "green";
        a2_memoria.style.backgroundColor = "green";
        s_memoria.style.backgroundColor = "green";
        s2_memoria.style.backgroundColor = "green";
        a3_memoria.style.backgroundColor = "green";
    }
}

function check_flash(){
    var letter_r6c5 = f_flash.value;
    var letter_r6c6 = l_flash.value;
    var letter_r6c7 = a_flash.value;
    var letter_r6c8 = s2_adress.value;
    var letter_r6c9 = h_flash.value;
    if(letter_r6c5.toLowerCase() == "f" & letter_r6c6.toLowerCase() == "l" & letter_r6c7.toLowerCase() == "a" & letter_r6c8.toLowerCase() == "s" & letter_r6c9.toLowerCase() == "h"){
        f_flash.style.backgroundColor = "green";
        l_flash.style.backgroundColor = "green";
        a_flash.style.backgroundColor = "green";
        s2_adress.style.backgroundColor = "green";
        h_flash.style.backgroundColor = "green";
    }
}

function check_i5(){
    var letter_r9c12 = i_memoria.value;
    var letter_r9c13 = i5.value;
    if(letter_r9c12.toLowerCase() == "i" & letter_r9c13 == "5"){
        i_memoria.style.backgroundColor = "green";
        i5.style.backgroundColor = "green";
    }
}
function check_i7(){
    var letter_r9c12 = i_registradores.value;
    var letter_r9c13 = i7.value;
    if(letter_r9c12.toLowerCase() == "i" & letter_r9c13 == "5"){
        i_registradores.style.backgroundColor = "green";
        i7.style.backgroundColor = "green";
    }
}


function check_dual_core(){
    var letter_r10c10 = d_dual.value;
    var letter_r10c11 = u_dual.value;
    var letter_r10c12 = a_dual.value;
    var letter_r10c13 = l_dual.value;
    var letter_r10c15 = c_dual.value;
    var letter_r10c16 = o_dual.value;
    var letter_r10c17 = r_dual.value;
    var letter_r10c18 = e_dual.value;
    if(letter_r10c10.toLowerCase() == "d" & letter_r10c11.toLowerCase() == "u" & letter_r10c12.toLowerCase() == "a" & letter_r10c13.toLowerCase() == "l" & letter_r10c15.toLowerCase() == "c" & letter_r10c16.toLowerCase() == "o" & letter_r10c17.toLowerCase() == "r" & letter_r10c18.toLowerCase() == "e"){
        d_dual.style.backgroundColor = "green";
        u_dual.style.backgroundColor = "green";
        a_dual.style.backgroundColor = "green";
        l_dual.style.backgroundColor = "green";
        c_dual.style.backgroundColor = "green";
        o_dual.style.backgroundColor = "green";
        r_dual.style.backgroundColor = "green";
        e_dual.style.backgroundColor = "green";
    }
}

function check_registradores(){
    var letter_r13c11 = r_registradores.value;
    var letter_r13c12 = e2_memoria.value;
    var letter_r13c13 = g_registradores.value;
    var letter_r13c14 = i_registradores.value;
    var letter_r13c15 = s_registradores.value;
    var letter_r13c16 = t_registradores.value;
    var letter_r13c17 = r3_registradores.value;
    var letter_r13c18 = a_registradores.value;
    var letter_r13c19 = d_registradores.value;
    var letter_r13c20 = o_registradores.value;
    var letter_r13c21 = r2_registradores.value;
    var letter_r13c22 = e_registradores.value;
    var letter_r13c23 = s2_registradores.value;
    if(letter_r13c11.toLowerCase() == "r" & letter_r13c12.toLowerCase() == "e" & letter_r13c13.toLowerCase() == "g" & letter_r13c14.toLowerCase() == "i" & letter_r13c15.toLowerCase() == "s" & letter_r13c16.toLowerCase() == "t" & letter_r13c17.toLowerCase() == "r" & letter_r13c18.toLowerCase() == "a" & letter_r13c19.toLowerCase() == "d" & letter_r13c20.toLowerCase() == "o" & letter_r13c21.toLowerCase() == "r" & letter_r13c22.toLowerCase() == "e" & letter_r13c23.toLowerCase() == "s"){
        r_registradores.style.backgroundColor = "green";
        e2_memoria.style.backgroundColor = "green";
        g_registradores.style.backgroundColor = "green";
        i_registradores.style.backgroundColor = "green";
        s_registradores.style.backgroundColor = "green";
        t_registradores.style.backgroundColor = "green";
        r3_registradores.style.backgroundColor = "green";
        a_registradores.style.backgroundColor = "green";
        d_registradores.style.backgroundColor = "green";
        o_registradores.style.backgroundColor = "green";
        r2_registradores.style.backgroundColor = "green";
        e_registradores.style.backgroundColor = "green";
        s2_registradores.style.backgroundColor = "green";
    }
}

function check_quad_core(){
    var letter_r2c18 = q_quad.value;
    var letter_r3c18 = u_quad.value;
    var letter_r4c18 = a_quad.value;
    var letter_r5c18 = d_quad.value;
    var letter_r7c18 = c_quad.value;
    var letter_r8c18 = o_quad.value;
    var letter_r9c18 = r_quad.value;
    var letter_r10c18 = e_dual.value;
    if(letter_r2c18.toLowerCase() == "q" & letter_r3c18.toLowerCase() == "u" & letter_r4c18.toLowerCase() == "a" & letter_r5c18.toLowerCase() == "d" & letter_r7c18.toLowerCase() == "c" & letter_r8c18.toLowerCase() == "o" & letter_r9c18.toLowerCase() == "r" & letter_r10c18.toLowerCase() == "e"){
        q_quad.style.backgroundColor = "green";
        u_quad.style.backgroundColor = "green";
        a_quad.style.backgroundColor = "green";
        d_quad.style.backgroundColor = "green";
        c_quad.style.backgroundColor = "green";
        o_quad.style.backgroundColor = "green";
        r_quad.style.backgroundColor = "green";
        e_dual.style.backgroundColor = "green";
    }
}