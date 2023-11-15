function calcularIMC() {
    const formulario = document.getElementById("form")

    let quilos = +formulario.quilos.value;
    let altura = +formulario.altura.value;

    let imc = quilos / (altura * altura);

    if(imc < 18.5) {
        alert("Seu IMC é de " + imc.toFixed(2) + " está baixo para o seu peso.")
    } else if(18.5 <= imc < 24.9) {
        alert("Seu IMC é de " + imc.toFixed(2) + " está normal para o seu peso.")
    } else if(25 <= imc < 29.9) {
        alert("Seu IMC é de " + imc.toFixed(2) + " está acima para o seu peso.")
    } if(imc >= 30) {
        alert("Seu IMC é de " + imc.toFixed(2) + " e apresenta índice de obesidade para o seu peso.")
    }
}