
    var r = r_ram.value
    var a = a_ram.value
    var m = m_ram.value

    function word_ram(){
    if (r == "r" && a == "a" && m == "m"){
        r_ram.style.backgroundColor = "green";
        a_ram.style.backgroundColor = "green";
        m_ram.style.backgroundColor = "green";
    } else {
        r_ram.style.backgroundColor = "red";
        a_ram.style.backgroundColor = "red";
        m_ram.style.backgroundColor = "red";
    }
}