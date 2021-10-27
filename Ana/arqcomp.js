
    var r = r_ram.value
    var a = a_ram.value
    var m = m_ram.value

    function word_ram(){
    if (r == "R" && a == "A" && m == "M"){
        r_ram.style.backgroundColor = "green";
        a_ram.style.backgroundColor = "green";
        m_ram.style.backgroundColor = "green";
    } else {
        r_ram.style.backgroundColor = "red";
        a_ram.style.backgroundColor = "red";
        m_ram.style.backgroundColor = "red";
    }
}