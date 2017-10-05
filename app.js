//con un do while se valida el ingreso efectivo de informacion (que el campo no quede vacío)
//el while se repetira mientras el largo del numero de tarjeta sea = a 0
do {
//por medio de un pompt se solicita que el cliente ingrese los numeros de su tarjeta
  var cardNumber = prompt("Ingrese los numeros de su creditCard");
    /*if(cardNumber == "1") {
      saludar();
    } else {
      alert("Ingrese una opción válida");
    }
 }*/
} while (cardNumber.length == 0 );

//crear una nueva varieables para guardar el string como un array separar caracteres por medio de un split
var numSeparados = cardNumber.split('');
//crear nueva variables que contenga los numeros del array invertidos
var arrInvertido = numSeparados.reverse();
//convertir el array de string en array de numeros por medio de .map
var numCard =arrInvertido.map(Number);
//Ejemplo : (5) [7, 6, 5, 4, 3]
//crear  variables para almacenar resultados de ubicaciones pares e impares:
/*la variables "par" es para almacenar los valores del array por separado , para luego validar y
asegurarnos de que el resultado sea sólo de un dígito*/
var par = [];
//para sumar numeros de posiciones impares de forma directa
var impar = 0; //se inicializa contador en 0

//recorrer las posiciones del arreglo, una a una
for (var i = 0; i > arrInvertido.length-1, i ++)
//para detectar la posicion par,
//if   i % 2 ==0;{
  //par.push(i); //
}

//






console.log(numCard);
