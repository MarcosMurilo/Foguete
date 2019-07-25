


// variável que incrementa o valor de CSS style.botton 
var pos = 0 // 80 é o máximo, mais que isso ultrapassa a div.
function sobefoguete() { 
var elemCss = document.getElementById('foguete')
if (pos < 80){
// suba 5
pos += 20 // 80 max
elemCss.style.bottom = pos + "%"
pos++

} else {
// já chegou
alert('Já chegou')
    }
} // fim FUNÇÃO sobefoguete()   


  
 var y1 = Math.floor(Math.random() * 10) 
 var y2 = Math.floor(Math.random() * 10) 
 
 var x = calcular(y1, y2)
 document.getElementById('calculo').innerHTML = `${y1} + ${y2} = ${x}`
 
 function calcular(n1, n2) {
    return n1 + n2
 }






