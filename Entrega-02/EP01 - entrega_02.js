//dado un string contar e número de vocales sin acento que contiene.
//dado un string contar el número de consonantes
//Escribir un script que dado un número(almacemado como string) diga si este es un número capicua o no (al menos 4 digitos)
//Area de un circulo
	var radiocirculo = 9;	
	var pi = 3.1416;
    var radio = radiocirculo * radiocirculo;
    var area = pi * radio;
    console.log(`el area del radio es: ${area}`);




//Area de un triangulo
	var base = 15;
	var altura = 20;
	var area = (base * altura)/2;
	console.log(`el area del triangulo es: ${area}`);





//Area de un cuadrado
	var ladocuadrado = 20;
	area = ladocuadrado * ladocuadrado;
	console.log(`el area del cuadrado es: ${area}`);






//contar Vocales en una palabra

var Letraa = 0, Letrae = 0, Letrai = 0, Letrao = 0, Letrau = 0;
var palabra = "murcielago";
var palabra = palabra.toLowerCase();               // toLowerCase(); sirve para convertir todas las palabras en minusculas.
for(j=0; j < palabra.length ; j++)    //Recorremos el string palabra.
{
    //palabra.charAt(j);
	//console.log(palabra.charAt(j));
	if(palabra.charAt(j) === "a")    //Validamos si la posición en la que se encuentra recorriendo el ciclo es estrictamente igual a la letra a.
	{
		Letraa = Letraa + 1; //La variable Letraa lo utilizamos como un contador para ir sumando la cantidad de la vocal se encuentra en la palabra.
		//console.log(`La palabra ${palabra} contiene: ${Letraa} (a)`); 
	}
	else if(palabra.charAt(j) === "e")  //Validamos si la posición en la que se encuentra recorriendo el ciclo es estrictamente igual a la letra e.
	{
		Letrae = Letrae + 1; //La variable Letrae lo utilizamos como un contador para ir sumando la cantidad de la vocal se encuentra en la palabra.
		//console.log(`La palabra ${palabra} contiene: ${Letrae} (e)`); 
	}
	else if(palabra.charAt(j) === "i")   //Validamos si la posición en la que se encuentra recorriendo el ciclo es estrictamente igual a la letra i.
	{
		Letrai = Letrai + 1; //La variable Letrai lo utilizamos como un contador para ir sumando la cantidad de la vocal se encuentra en la palabra.
		//console.log(`La palabra ${palabra} contiene: ${Letrai} (i)`); 
	}
	else if(palabra.charAt(j) === "o")   //Validamos si la posición en la que se encuentra recorriendo el ciclo es estrictamente igual a la letra o.
	{
		Letrao = Letrao + 1; //La variable Letrao lo utilizamos como un contador para ir sumando la cantidad de la vocal se encuentra en la palabra.
		//console.log(`La palabra ${palabra} contiene: ${Letrao} (o)`); 
	}
	else if(palabra.charAt(j) === "u")   //Validamos si la posición en la que se encuentra recorriendo el ciclo es estrictamente igual a la letra u.
	{
		Letrau = Letrau + 1; //La variable Letrau lo utilizamos como un contador para ir sumando la cantidad de la vocal se encuentra en la palabra.
		//console.log(`La palabra ${palabra} contiene: ${Letrau} (u)`); 
	}
}
console.log(`La palabra ${palabra} contiene: \n${Letraa} (a)\n${Letrae} (e)\n${Letrai} (i)\n${Letrao} (o)\n${Letrau} (u)`); //imprimimios el resultado.
//console.log(`La palabra ${palabra} contiene: ${Letraa} (a)\nLa palabra ${palabra} contiene: ${Letrae} (e)\nLa palabra ${palabra} contiene: ${Letrai} (i) \nLa palabra ${palabra} contiene: ${Letrao} (o)\nLa palabra ${palabra} contiene: ${Letrau} (u)`);
//console.log(`La palabra ${palabra} contiene: ${Letrae} (e)`);
//console.log(`La palabra ${palabra} contiene: ${Letrai} (i)`);
//console.log(`La palabra ${palabra} contiene: ${Letrao} (o)`);
//console.log(`La palabra ${palabra} contiene: ${Letrau} (u)`);






//Contar consonantes en una palabra

var contador = 0, resultado;
var consonante = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"];
var palabra = "externocleidomastoideo";
var palabra = palabra.toLowerCase();       // toLowerCase(); sirve para convertir todas las palabras en minusculas.
for(j=0; j < consonante.length; j++)      //recorremos el array consonante.
{
	for(i=0; i < palabra.length ; i++)   //recorremos el string palabra completo mientras el array consonante se encuentra en una una posición para seguir iterando.
	{
		if(palabra.charAt(i) === consonante[j])  //Validamos si el array consonante en la posición [j] del ciclo es estrictamente igual a la posición del string palabra en la posición (i).
		{
			resultado = palabra.charAt(i);  //a la variable resutado le asiganamos el contenido en la que se encuentra la posición de palabra(i). 
			contador ++;                    //Incrementamos la variable contador para sumar el numero de consonantes que contenga el string palabra.
			//console.log(`la letra ${palabra.charAt(i)} tiene ${contador} ${consonante[j]}`);
		}
	}
	if(contador != 0) //si el condicional anterior capturo consonantes validamos que el contador sea mayor que cero para ingresar.
	{
		if (contador < 2)
		{
			console.log(`la letra ${consonante[j]} está ${contador}a vez en la palabra ${palabra}`);  
		}
		else
		//if (contador > 1)
		{
			console.log(`la letra ${consonante[j]} está ${contador} veces en la palabra ${palabra}`);
		}
	}
	contador = 0;   //Reiniciamos el contador para que funcione desde cero a la siguiente posición del array consonante.
}




//Validar si un número es capicua

var coma = ",";
var guarda = [], guarda2 = [];
var capicua = "120021", capicua2;
for(i = 0; i < capicua.length ; i++) //recorremos el string capicua.
{
 	//console.log(`${capicua.charAt(i)}`);
 	guarda[i] = capicua.charAt(i);   // guardamos el contenido de la posición i del string capicua en la posición [i] del array guarda, para convertir el string en un array.
}
//console.log(`${guarda}`);
//console.log(`${guarda.reverse()}`);
guarda2 = guarda.reverse();    //  reverse(); funciona para invertir un array. guardamos el array invertido en la variable guarda2.
capicua2 = guarda2.toString();  // toString(); funciona para convertir un array en un string, "el string viene con caracteres incluidos de coma ',' los cuales son los separadores de las posiciones del array convertido", y lo guardamos en la variable capicua2.
for(i=0;i < capicua2.length; i++) //recorremos el string capicua2.
{
	capicua2 = capicua2.replace(coma,'');   // capicua2.replace(coma,''); Funciona para eliminar un caracter especifico de un string "en este caso eliminamos las comas ','". dentro del for itera el string y elimina todas la comas','.
	
}
//capicua2 = capicua2.replace(coma,'');   
if(capicua === capicua2)  //validamos si el string capicua que es el original es estrictamente igual al capicua2 que es el string capicua invertido.s
{
	console.log(`el número: ${capicua} es un número capicua`);
}
else
{
	//console.log(`${capicua}`);
	//console.log(`${capicua2}`);
	console.log(`el número: ${capicua} No es un número capicua\n ya que no son iguales si se invierten`);
}