function verificar() {
    var cl1n1 = c1n1.value;
    var cl1n2 = c1n2.value;
    var cl1n3 = c1n3.value;
    // if (cl1n1.indexOf("c") == 1 && cl1n1.indexOf("p") == 1 && cl1n1.indexOf("u") == 1)
    // if (cl1n1.length[1] == "c" && cl1n2.length[1] == "p" && cl1n3.length[1] == "u")
    if (cl1n1.toLowerCase == "c" && cl1n2.toLowerCase == "p" && cl1n3.toLowerCase == "u") {
        alert("Parabéns!");
    } else {
        alert("Algo está errado");
    }
}