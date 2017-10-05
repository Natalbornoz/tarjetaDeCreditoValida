### 2. Tarjeta de crédito valida

 Para comenzar debemos crear nuestro archivo con su respectivas extensiones .js y .html ; luego enlazar el archivo .html con el .js para poder visualizar en el explorador

##### *Para validar los digitos de una tarjeta de crédito (13 digitos), según el algoritmo de Luhn hay que seguir los siguientes pasos:*

*1.-
*Preguntar por el numero de la tarjeta por medio de una ventana emergente (prompt())*


2.-
*Crear una validación por medio del ciclo "do while", para que,  mientras no se ingrese información, la pregunta se repita (length ==0). Se obtendrá un dato de tipo string.*

3.-
*Crear una variable (numSeparados) para separar los caracteres del string obtenido(por medio de un espacio (" ") ), esto se hará por medio del método split(); conviertiendo el string automáticamente en un array.*

4.-
*Teniendo los digitos ya separados, se crea una nueva variable (arrInvertido) para almacenarlos invertidos por medio del método reverse.*

5.-
*Se crean dos variables nuevas :  " var = par " y " var = impar " para almacenar los digitos que se encuentran en las respecitvas posiciones del arreglo invertido.*

6.
*Hay que recorrer el arreglo para filtrar entre números de ubicaciones pares e impares e ir almacenado en sus respectivas posiciones.*

7.-
*En el caso de los números con ubicaciones pares, sedebe multiplicar por 2, luego verificar el resultado de cada suma: si es igual o mayor a 10, se deben sumar sus dígitos.*

8.-
*En el caso de los números con ubicaciones imapres, sólo deben sumarse entre sí.*

9.-*Debe crearse una nueva variable para almacenar la suma de los digitos de las posiciones pares en impares.*

10.-
*Dividir la resultado de la suma por 10, y si el resultado es igual a 0, los digitos ingresados corresponden a una tarjeta válida; en caso contrario corresponde a una tarjeta inválida.*

Desarrollado por `Natalia Albornoz`
Versión `0.0.1`
