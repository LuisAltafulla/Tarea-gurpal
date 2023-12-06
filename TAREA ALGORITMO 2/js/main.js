//const Leer = require('prompt-sync')()
class Ejercicio1 {
  multiplo() {
    let num = 0, mul = 0, r = 0
    // 0...0.758.......1*100=75.8=75
    // num= parseInt(Math.random()*10)
    // mul= parseInt(Math.random()*10)
    num = parseInt(document.getElementById("num").value)
    mul = parseInt(document.getElementById("multi").value)
    //console.log(num)
    //console.log(mul.value)
    r = num % mul
    if (r == 0) {
      console.log(num, "es multiplo de ", mul)
      document.getElementById("resp").innerHTML = `${num} es divisible para ${mul}`
    }
    else {
      document.getElementById("resp").innerHTML = `${num} no es divisible para ${mul}`
    }
  }
  tablaMultiplicar() {
    let vi, vf, tabla, resp, contador;
    vi = 0; vf = 0; tabla = 0; resp = 0;
    // vi = parseInt(Math.random() * 10);
    // vf = parseInt(Math.random() * 100);
    // tabla = parseInt(Math.random() * 20);
    vi = parseInt(document.getElementById("desde").value)
    vf = parseInt(document.getElementById("hasta").value)
    tabla = parseInt(document.getElementById("tabla").value)
    contador = vi;
    document.getElementById("resp").innerHTML = `Tabla del ${tabla}`
    while (contador <= vf) {
      resp = contador * tabla;
      console.log(`${contador} * ${tabla} = ${resp}`)
      document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
      contador = contador + 1

    }
  }
  //ejercicio del 1 al 10
  expresion() {
    let a = 0, b = 0, y, z, x, w, v, u, t, s, r, q, resp
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    a = parseInt(a)
    b = parseInt(b)
    resp = document.getElementById("resp")
    //console.log(resp)
    y = 2 * a + b - a % 3
    z = a * b + 3 % a + b
    x = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
    w = a - b + 2 * a % a + b
    v = 2 * b + a / 2 + 4 * b % a
    u = b - a + 3 * a % b
    t = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
    s = 260 / 12 + 54 % 3 - 85 % 7
    r = (48 < 2 * 3) || (2 * 7 < 12)
    q = ((8 > 2) | (932 < 23)) && 4 == 2

    resp = document.getElementById("resp")
    resp.innerHTML = `Expresion1: ${y} = 2 * ${a} + ${b} - ${a} % 3`
    resp.innerHTML += `<br>Expresion2: ${z}=${a} * ${b} + 3 % ${a} + ${b}`
    resp.innerHTML += `<br>Espresion3:  ${w}= ${a} - ${b} + 2 * ${a} % ${b}`
    resp.innerHTML += `<br>Expresion4: ${v} = 2 * ${b} + ${a} / 2 + 4 * ${b} % ${a}`
    resp.innerHTML += `<br>Expresion5: ${u} = ${b} - ${a} + 3 * ${a} % ${b}`
    resp.innerHTML += `<br>Expresion6: ${x} = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3`
    resp.innerHTML += `<br>Expresion7: ${t} = 2 *(4 - 10 + 8) / 2 * 36 *(1/2)`
    resp.innerHTML += `<br>Expresion8: ${s} = 260 / 12 + 54 % 3 - 85 % 7`
    resp.innerHTML += `<br>Expresion9: ${r} = (48 < 2 * 3) | | (2 * 7 < 12)`
    resp.innerHTML += `<br>Expresion10: ${q} = ((8 > 2) |  (932 < 23))&&4==2`
  }
  //ejercicio 11
  sumaNumeros() {
    let num1 = 0, num2 = 0, resp, sum
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    resp = document.getElementById("resp")
    sum = num1 + num2
    resp = document.getElementById("resp")
    resp.innerHTML = `La suma es: ${sum}`

  }
  //ejercicio 12
  area() {
    let ba = 0, al = 0, are, resp
    ba = document.getElementById("ba").value
    al = document.getElementById("al").value
    resp = document.getElementById("resp")
    ba = parseInt(ba)
    al = parseInt(al)
    are = (ba * al) / 2
    resp = document.getElementById("resp")
    resp.innerHTML = `El area del triangulo es: ${are}`
  }
  promedioNotas() {
    let resp, pro, acu = 0, pos, lon, notas
    notas = document.getElementById("notas").value
    notas = notas.split(";")
    lon = notas.length
    for (pos = 0; pos < lon; pos++) {
      acu = acu + parseFloat(notas[pos])
    }
    pro = acu / lon
    pro = Math.round(pro * 100) / 100;
    resp = document.getElementById("resp")
    resp.innerHTML = `Promedio de Notas:[${notas}] = ${pro}`
  }
  vocales() {
    let pos = 0, cv = 0, frase, resp
    frase = document.getElementById("frase").value
    frase = frase.toLowerCase()
    while (pos < frase.length) {
      if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
        cv = cv + 1 // cv++
      }
      pos++
    }
    resp = document.getElementById("resp")
    resp.innerHTML = `cantidad vocales: ${cv}`
  }
  //ejercicio 13
  par() {
    let nu = 0, resp
    nu = document.getElementById("nu").value
    nu = parseInt(nu)
    if (nu % 2 == 0) {
      resp = document.getElementById("resp")
      resp.innerHTML = `el numero es par`
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `el numero es impar`
    }
  }
  //ejercicio 15
  tabla_1al10() {
    let num = 0, resp, mul, a, b, c, d, e, f, g, h, i
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    mul = num * 1
    a = num * 2
    b = num * 3
    c = num * 4
    d = num * 5
    e = num * 6
    f = num * 7
    g = num * 8
    h = num * 9
    i = num * 10
    resp = document.getElementById("resp")
    resp.innerHTML = `${mul}*1=${num}`
    resp.innerHTML += `<br>${num}*2=${a}`
    resp.innerHTML += `<br>${num}*3=${b}`
    resp.innerHTML += `<br>${num}*4=${c}`
    resp.innerHTML += `<br>${num}*5=${d}`
    resp.innerHTML += `<br>${num}*6=${e}`
    resp.innerHTML += `<br>${num}*7=${f}`
    resp.innerHTML += `<br>${num}*8=${g}`
    resp.innerHTML += `<br>${num}*9=${h}`
    resp.innerHTML += `<br>${num}*10=${i}`
  }
  //ejercicio 14
  calculadora() {
    let operador = ""
    let suma = "+", menos = "-", mul = "*", div = "/"
    let num3 = 0, num4 = 0, rs, resp
    operador = document.getElementById("operador").value
    num3 = document.getElementById("num3").value
    num4 = document.getElementById("num4").value
    num3 = parseInt(num3)
    num4 = parseInt(num4)
    resp = document.getElementById("resp")
    if (operador == suma) {
      rs = num3 + num4
      resp = document.getElementById("resp")
      resp.innerHTML = `${num3} + ${num4} = ${rs}`
    } else if (operador == menos) {
      rs = num3 - num4
      resp = document.getElementById("resp")
      resp.innerHTML = `${num3} - ${num4} = ${rs}`
    } else if (operador == mul) {
      rs = num3 * num4
      resp = document.getElementById("resp")
      resp.innerHTML = `${num3} * ${num4} = ${rs}`
    } else if (operador == div) {
      rs = num3 / num4
      resp = document.getElementById("resp")
      resp.innerHTML = `${num3} / ${num4} = ${rs}`
    }
  }
  //ejercicio16
  palabras() {
    let pala1 = "", pala2 = "", nv = "", resp
    pala1 = document.getElementById("pala1").value
    pala2 = document.getElementById("pala2").value
    resp = document.getElementById("resp")
    nv = pala1 + pala2
    resp = document.getElementById("resp")
    resp.innerHTML = `${nv}`
  }
  //ejercicio 17 
  mayorde3() {
    let a = 0, b = 0, c = 0, resp
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("c").value
    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)
    resp = document.getElementById("resp")
    if (a > b && a > c) {
      resp = document.getElementById("resp")
      resp.innerHTML = `El numero mayor es: ${a}`
    } else if (b > a && b > c) {
      resp = document.getElementById("resp")
      resp.innerHTML = `El numero mayor es: ${b}`
    } else if (c > a && c > b) {
      resp = document.getElementById("resp")
      resp.innerHTML = `El numero mayor es: ${c}`
    }

  }
  //ejercicio 18
  edadminima() {
    let num1 = 0, resp
    num1 = document.getElementById("num1").value
    num1 = parseInt(num1)
    resp = document.getElementById("resp")
    if (num1 >= 18) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Usted puede votar "
    }
    else {
      resp = document.getElementById("resp")
      resp.innerHTML = "Usted no puede votar "
    }
  }
  // ejercicio 19
  masa() {
    let pes = 0, esta = 0, bmi = 0, resp
    pes = document.getElementById("pes").value
    esta = document.getElementById("esta").value
    pes = parseFloat(pes);
    esta = parseFloat(esta);
    bmi = pes / (esta ** 2);
    if (bmi < 18.5) {
      resp = `Tu masa corporal es: ${bmi}kg tienes que Bajar de peso`
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
      resp = `Tu masa corporal es: ${bmi}kg tienes Peso normal`
    } else if ((bmi >= 25.0) && (bmi <= 29.9)) {
      resp = `Tu masa corporal es: ${bmi}kg tienes sobrepeso`
    } else {
      resp = `Tu masa corporal es: ${bmi}kg tienes obesidad`
    }
    document.getElementById("resp").innerHTML = resp
  }
  //ejercicio 20 
  positivo() {
    let num = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    if (num < 0) {
      resp = document.getElementById("resp")
      resp.innerHTML = 'el numero es negativo'
    } else if (num > 0) {
      resp = document.getElementById("resp")
      resp.innerHTML = 'el numero es positivo'
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = 'el numero es cero'
    }
  }
  //ejercicio 21
  Bisiesto() {
    let num = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0) {
      resp = document.getElementById("resp")
      resp.innerHTML = `Es un año Bisiesto`
    }
    else {
      resp = document.getElementById("resp")
      resp.innerHTML = `No es un año Bisiesto`
    }
  }
  //ejercicio 23 
  quincena() {
    let num = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    if (num >= 0 && num <= 15) {
      resp = document.getElementById("resp")
      resp.innerHTML = "el dia " + num + " pertenece a la primera quincena del mes"
    } else if (num >= 16 && num <= 31) {
      resp = document.getElementById("resp")
      resp.innerHTML = "el dia " + num + " pertenece a la segunda quincena del mes"
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = "ingrese un numero del 1 al 31"
    }
  }
  //ejercicio 24
  diasemana() {
    let num = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    if (num == 1) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el domingo"
    } else if (num == 2) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el lunes"
    } else if (num == 3) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el martes"
    } else if (num == 4) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el miercoles"
    } else if (num == 5) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el jueves"
    } else if (num == 6) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el viernes"
    } else if (num == 7) {
      resp = document.getElementById("resp")
      resp.innerHTML = "El numero de la semana es el sabado"
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `Añadir numero del 1 al 7`
    }
  }
  // ejercicio 21
  signo() {
    let dia = 0, mes = 0, resp
    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value
    dia = parseInt(dia)

    resp = document.getElementById("resp")
    if (mes == "Marzo" && dia >= 21 || mes == "Abril" && dia <= 19) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Aries "
    }
    else if (mes == "Abril" && dia >= 20 || mes == "Mayo" && dia <= 20) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Tauro "

    }
    else if (mes == "Mayo" && dia >= 21 || mes == "Junio" && dia <= 20) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Géminis "
    }
    else if (mes == "Junio" && dia >= 21 || mes == "Julio" && dia <= 22) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Cáncer "

    }
    else if (mes == "Julio" && dia >= 23 || mes == "Agosto" && dia <= 22) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Leo "
    }
    else if (mes == "Agosto" && dia >= 23 || mes == "Septiembre" && dia <= 22) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Virgo "
    }
    else if (mes == "Septiembre" && dia >= 23 || mes == "Octubre" && dia <= 22) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Libra "

    }
    else if (mes == "Octubre" && dia >= 23 || mes == "Noviembre" && dia <= 21) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Escorpio"
    }
    else if (mes == "Noviembre" && dia >= 22 || mes == "Diciembre" && dia <= 21) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Sagitario"
    }
    else if (mes == "Diciembre" && dia >= 22 || mes == "Enero" && dia <= 19) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Capricornio"
    }
    else if (mes == "Enero" && dia >= 20 || mes == "Febrero" && dia <= 18) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Acuario"
    }
    else if (mes == "Febrero" && dia >= 19 || mes == "Marzo" && dia <= 20) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Su signo zodiacal es Piscis"
    }
  }
  //ejercicio 25 
  fraseigual() {
    let fra1 = "", fra2 = "", resp
    fra1 = document.getElementById("fra1").value
    fra2 = document.getElementById("fra2").value
    resp = document.getElementById("resp")
    if (fra1 == fra2) {
      resp = document.getElementById("resp")
      resp.innerHTML = `Las Frases son iguales`
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `Las frases no son iguales`
    }
  }
  //ejercicio 26
  precio() {
    let pre = 0, descuento = 0, resp, resul
    pre = document.getElementById("pre").value
    descuento = document.getElementById("descuento").value
    pre = parseInt(pre)
    descuento = parseInt(descuento)
    resp = document.getElementById("resp")
    resul = pre * (descuento / 100)
    resp = document.getElementById("resp")
    resp.innerHTML = `El precio del producto es de ${pre}$ con un descuento ${descuento}% el presio final es: (${pre - resul})`
  }
  //ejercicio 27
  impuestos() {
    let prec = 0, iva, resu, resp
    prec = document.getElementById("prec").value
    prec = parseInt(prec)
    resp = document.getElementById("resp")
    iva = prec * .12
    resu = prec + iva
    resp = document.getElementById("resp")
    resp.innerHTML = `El monto a pagar es de: ${resu}`
  }
  //ejercicio 28
  aumento() {
    let salario = 0, aument = 0, total, resp, a
    salario = document.getElementById("salario").value
    aument = document.getElementById("aument").value
    aument = parseInt(aument)
    salario = parseInt(salario)
    resp = document.getElementById("resp")
    a = salario * (aument / 100)
    total = salario + a
    resp = document.getElementById("resp")
    resp.innerHTML = `Su salario es de ${salario}$ con un aumento del su salario actual es de ${total}`
  }
  //ejercicio 29
  compra() {
    let precio = 0, cantid = 0, total, resp, descuent
    precio = document.getElementById("precio").value
    cantid = document.getElementById("cantid").value
    precio = parseInt(precio)
    cantid = parseInt(cantid)
    resp = document.getElementById("resp")
    total = precio * cantid
    resp = document.getElementById("resp")
    if (total >= 100) {
      resp = document.getElementById("resp")
      descuent = total * .10
      resp.innerHTML = `El descuento aplicado es ${descuent}`
      resp.innerHTML += ` El total a pagar es: (${total - descuent})`
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `No aplica descuento`

      resp.innerHTML += ` El total a pagar es: ${total}`
    }
  }

  salarioanual() {
    let salario = 0, impuesto, resp
    salario = document.getElementById("salario").value
    salario = parseInt(salario)
    resp = document.getElementById("resp")
    if (salario <= 10000) {
      resp = document.getElementById("resp")
      impuesto = salario * .05
    } else if (salario >= 10001 && salario <= 20000) {
      resp = document.getElementById("resp")
      impuesto = salario * .10
    } else {
      resp = document.getElementById("resp")
      impuesto = salario * .15
    }
    resp.innerHTML = `El impuesto a la renta es de: ${impuesto}`
  }
  anti() {
    let ye = 0, resp
    ye = document.getElementById("ye").value
    ye = parseInt(ye)
    resp = document.getElementById("resp")
    if (ye >= 5) {
      resp = document.getElementById("resp")
      resp.innerHTML = `Aplica un bono de 5% de descuento`
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `No aplica para descuento`
    }
  }
  tarifa() {
    let distan = 0, costo, resp
    distan = document.getElementById("distan").value
    distan = parseInt(distan)
    resp = document.getElementById("resp")
    if (distan < 50) {
      costo = 10
      resp = document.getElementById("resp")
    } else {
      costo = 20
      resp = document.getElementById("resp")
    }
    resp.innerHTML = `El costo del envio es: $${costo}`
  }
  cliente() {
    let total = 0, resp
    total = document.getElementById("total").value
    total = parseInt(total)
    resp = document.getElementById("resp")
    if (total >= 500) {
      resp = document.getElementById("resp")
      resp.innerHTML = `Aplica a un descuento del 10%`
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = `No aplica a un descuento`
    }
  }
  unidad() {
    let cantidad = 0, precio = 0, total, c = 0, n = 0, resp
    cantidad = document.getElementById("cantidad").value
    precio = document.getElementById("precio").value
    cantidad = parseInt(cantidad)
    precio = parseInt(precio)
    resp = document.getElementById("resp")
    total = cantidad * precio
    if (cantidad >= 10 && cantidad <= 50) {
      c = total * .05
      n = 1
      resp = document.getElementById("resp")
      resp.innerHTML = `El descuento aplicado es de 5%`
    } else if (cantidad >= 51 && cantidad <= 100) {
      c = total * .10
      n = 1
      resp = document.getElementById("resp")
      resp.innerHTML = `El descuento aplicado es de 10%`
    } else if (cantidad > 100) {
      c = total * .15
      n = 1
      resp = document.getElementById("resp")
      resp.innerHTML = `El descuento aplicado es de 15%`
    }
    resp.innerHTML += ` El total a pagar es: (${total - c})`
  }
  servi() {
    let num = 0, resp, r = 0, re = 0
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    if (num > 10) {
      r = num * 20 / 100
      re = num - r
      resp = document.getElementById("resp")
      resp.innerHTML = "Usted tiene un descuento del 20%, el valor a pagar es: $" + re
    }
    else {
      resp = document.getElementById("resp")
      resp.innerHTML = "El costo a pagar es: $" + num
    }
  }
  sumapares() {
    let resp, i = 0, sum = 0
    for (i = 2; i <= 50; i += 2) {
      sum = sum + i

    }

    resp = document.getElementById("resp")
    resp.innerHTML = "La suma de números pares es:" + sum
  }
  Cuentaregresivas() {
    const elemetoUl = document.getElementById("respuesta");
    let num = 0, r, resp;
    num = document.getElementById("num").value;
    num = parseInt(num);
    resp = document.getElementById("resp");
    while (num >= 1) {
      num--;
      var num_li = document.createElement("li");
      num_li.textContent = num;
      elemetoUl.appendChild(num_li);
      console.log(num);
    }
    resp = document.getElementById("resp")
  }
  contadordigito() {
    let text, resp, i, longitud, contador = 0, caracter, contador1 = 0
    text = document.getElementById("text").value;
    longitud = text.length;
    resp = document.getElementById("resp")
    for (i = 0; i < longitud; i++) {
      caracter = parseInt(text[i]);
      if (!isNaN(caracter)) {
        contador1 = contador1 + 1;
      } else if (text[i] != " ") {
        contador = contador + 1
      }
    }
    resp.innerHTML = `la palabra tiene ${contador1} digitos y la palabra tiene ${contador} letras `
  }
  sumaimpares() {
    let suma = 0, num = 1, resp

    while (num <= 100) {
      if (num % 2 !== 0) {
        suma += num;
      }
      num++;
    }
    resp = document.getElementById("resp")
    resp.innerHTML = "La suma de números impares es: " + suma;
  }
  contadorcater() {
    let text, resp, i, longitud, contador = 0
    text = document.getElementById("text").value;
    longitud = text.length
    resp = document.getElementById("resp")
    for (i = 0; i < longitud; i++) {
      if (text[i] != " ") {
        contador = contador + 1
      }
    }
    resp.innerHTML = `la palabra tiene ${contador} caracter`
  }
  sumaelementos() {
    let arreglo, suma = 0, i = 0, resp
    arreglo = [3, 5, 9, 10]
    for (i = 0; i < arreglo.length; i++) {
      suma += arreglo[i]

    }
    resp = document.getElementById("resp")
    resp.innerHTML = "La suma de los números del arreglo es: " + suma

  }
  maximoyminimo() {

    let numeros, maximo, minimo, resp
    numeros = [4, 5, 8, 9, 1, 3, 6];


    maximo = Math.max(...numeros);
    minimo = Math.min(...numeros);


    resp = document.getElementById("resp")
    resp.innerHTML = "EL máximo es: " + maximo + " y el mínimo es: " + minimo


  }
  encuentra() {
    let numeros, num = 0, resp
    numeros = [5, 12, 8, 3, 15, 7];


    num = document.getElementById("num").value;
    num = parseFloat(num);
    resp = document.getElementById("resp")

    if (numeros.includes(num)) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Este número " + num + " está presente en arreglo"
    } else {
      resp = document.getElementById("resp")
      resp.innerHTML = "Este número no está presente"
    }
  }
  sumaparesarreglo() {
    let arreglo, i = 0, resp, sumapar = 0
    arreglo = [2, 5, 7, 8, 4]
    for (i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        sumapar += arreglo[i]
      }


    }
    resp = document.getElementById("resp")
    resp.innerHTML = "La suma de los pares en el arreglo es: " + sumapar
  }
  invertir() {
    let arreglo, inver, resp
    arreglo = [1, 2, 3, 4, 5];
    inver = arreglo.slice().reverse();
    resp = document.getElementById("resp")
    resp.innerHTML = "El arreglo invertido es: " + inver

  }
  buscarindice() {
    let numeros, num = 0, resp
    numeros = [8, 12, 7, 2, 20, 7];


    num = document.getElementById("num").value;
    num = parseFloat(num);
    resp = document.getElementById("resp")


    if (numeros.includes(num)) {
      resp = document.getElementById("resp")
      resp.innerHTML = "Este número " + num + " está presente en arreglo"
    }
    else {
      resp = document.getElementById("resp")
      resp.innerHTML = "Este número no está presente"
    }
  }
  Saludar() {
    let resp
    resp = document.getElementById("resp")
    resp.innerHTML = "Hola que tal, Dios lo Bendiga"
  }
  multiplicar(num1, num2) {
    let resul = 0
    resul = num1 * num2
    return resul
  }
  multiplicacion() {
    let n1 = 0, n2 = 0, resp, r
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    r = this.multiplicar(n1, n2)
    resp = document.getElementById("resp")
    resp.innerHTML = `${n1} * ${n2} = ${r}`

  }
  Sumar(num1, num2) {
    let resul = 0
    resul = num1 + num2
    return resul
  }
  suma() {
    let n1 = 0, n2 = 0, resp, r
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    r = this.Sumar(n1, n2)
    resp = document.getElementById("resp")
    resp.innerHTML = `${n1} + ${n2} = ${r}`
  }
  celciusfarenheit(celc) {
    let resul = 0
    resul = (celc * 9 / 5) + 32
    return resul
  }
  celcifaren() {
    let cel = 0, resp, r
    cel = document.getElementById("cel").value
    cel = parseFloat(cel)
    r = this.celciusfarenheit(cel)
    resp = document.getElementById("resp")
    resp.innerHTML = `(${cel} * 9/5) + 32 = ${r}`

  }
  serienumeros() {
    let resp
    resp = document.getElementById("resp")
    resp.innerHTML = `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`
  }
  ParoImpar() {
    let num = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    if (num % 2 == 0) {
      resp = document.getElementById("resp")
      resp.innerHTML = `El numero ${num} es par`
    }
    else {
      resp = document.getElementById("resp")
      resp.innerHTML = `El numero ${num} es impar`
    }

  }
  numerospositivos() {
    let num = 0, suma = 0, resp
    num = document.getElementById("num").value
    num = parseInt(num)
    resp = document.getElementById("resp")
    while (num >= 0) {
      console.log("ingrese un numero (el ciclo termina al ingresar un numero negativo)")
      if (num >= 0) {
        suma = suma + num
      }
    }
    resp = document.getElementById("resp")
    resp.innerHTML = "la suma de los numeros pares es:" + suma
  }
  area1(b, a) {
    let resul = 0
    resul = b * a / 2
    return resul
  }
  triangulo() {
    let base = 0, altura = 0, area = 0, resp
    base = document.getElementById("base").value
    altura = document.getElementById("altura").value
    base = parseInt(base)
    altura = parseInt(altura)
    area = this.area1(base, altura)
    resp = document.getElementById("resp")
    resp.innerHTML = `el area del triangulo es: ${area}`
  }
  nombre() {
    let resp
    resp = document.getElementById("resp")
    resp.innerHTML = "LUIS ALTAFULLA, ARIEL PILAMUNGA, EMIRO GÓMEZ, JUSTIN HERNANDEZ, SAMUEL GUERRERO"
  }
  Adivina_El_Numero() {
    // let resp
    // resp = document.getElementById("resp")
    // const numeros = [];
    // for (let i = 0; i < 100; i++) {
    //   numeros.push(Math.floor(Math.random() * 100));
    // }
    // const num = document.getElementById("num").value;
    // let encontrado = false;
    // let posicion = -1;
    // for (let i = 0; i < numeros.length; i++) {
    //   if (numeros[i] == num) {
    //     encontrado = true;
    //     posicion = i;
    //     break;
    //   }
    // }
    // resp.innerHTML = `${num}`
    let aleatorio = Math.floor(Math.random() * 10);
    let num = 0
    do {
      num = parseInt(prompt("Adivina el numero entre 1 y 10"));
      if (num !== aleatorio) {
        document.getElementById("resp").innerHTML = "Incorrecto"
      } else {
        document.getElementById("resp").innerHTML = `Adivinaste! Eres el diablo! el numero era ${aleatorio}`
        break;
      }
    } while (num !== aleatorio);
  }
  cal(oracion) {
    return oracion.length;
  }
  calcularResultado() {
    // Ejemplo de uso
    var oracion = (document.getElementById("total").value);
    var cantidadCaracteres = this.cal(oracion);

    document.getElementById("resp").innerText = "La oración tiene " + cantidadCaracteres + " caracteres.";
  }
  //Bosquejo del problema
  //Entrada: numero(leer)
  //Proceso:     
  //        while (numero >= 0) {
  //     suma += numero;
  //     "Ingresa otro número entero (termina con un número negativo)";
  // }                    
  //Salida: suma
  sumaNum() {
    let numeroInput = document.getElementById("numero");
    let resp = document.getElementById("resp");
    let suma = 0;
    let numero = parseInt(numeroInput.value);
    while (numero >= 0) {
      suma += numero;
      numero = parseInt(prompt("Ingresa otro número entero (termina con un número negativo)"));
    }
    resp.innerHTML = `La suma de los número ses: ${suma}`;
  }
  contadarCaracteres(texto) {
    let contador = 0;
    for (i = 0; i < longitud; i++) {
      if (texto[i] != " ") {
        contador = contador + 1
      }
    }
    return contador;
  }
  cantar() {
    let texto=document.getElementById("texto").value;
    let longitud= texto.length;
    let resp= document.getElementById("resp");
    resp.innerHTML= `La palabra tiene ${contador} caracteres`;
    document.body.only =function(){
      cantar();
    }
  }
  calcular(n1) {
    let acu = 0

    for (let i = 0; i < n1.length; i++) {
      acu = acu + parseInt(n1[i])
    }

    return acu
  }
  sumar_una_lista_de_numeros() {
    let numeros, resp

    //pido los valores
    numeros = document.getElementById("numeros").value
    //quito 
    numeros = numeros.split(",")

    //llamo a la funcion
    resp = this.calcular(numeros)

    //presento
    document.getElementById("resp").innerHTML = `La suma de los numeros[${ numeros }] = ${ resp }`
  }
}
let ope = new Ejercicio1() //crea una variable igual que la clase
//ope.multiplo()
//ope.tablaMultiplicar()
//ope.expresion()
//ope.promedioNotas()
//ope.vocales()
//ope.sumaNumeros()
//ope.par()
//ope.area()
//ope.calculadora()
//ope.palabras()
//ope.mayorde3()
//ope.masa()
//ope.edadminima()
//ope.diasemana.()
//ope.signo()
//ope.fraseigual()
//ope.precio()
//ope.impuestos()
//ope.aumento()
//ope.salarioanual()
//ope.antiguedad()
//ope.tarifa()
//ope.cliente()
//ope.servi()
//ope.sumapares()
//ope.tabla_1al10()