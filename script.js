function verificar() {
    var num = document.getElementById('number').value

    var number = Number(num)

    if(number % 2 == 0) {
alert('Este numero é par')
    } else {
alert('Este numero é impar')
    }
}