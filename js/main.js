// let today = new Date();
// let seconds = today.getSeconds();
// console.log(seconds);
// if((seconds%2)==0){
//     console.log("Par");
// }
// else if(seconds==53){
//     console.log("Tress...");
// }
// else{
//     console.log("Impar");
// }


// let msg = ((seconds%2)==0)?"Par":"Impar";
// console.log(msg);



// msg = ((seconds%2)==0)?"Par":(seconds==53)?"Tres":"Impar";
// console.log(msg);

// let age=10;
// let access;
// if (age >=18){
//     access = true;
// }else{
//     access=false;
// }
// console.log(access);

// access = (age>=18)?true:false;
// console.log(access);
// access =(age>=18);
// console.log(access);


//Primer ejercicio

Domingo=0
Lunes=1
Martes=2
Miercoles=3
Jueves=4
Viernes=5
Sabado=6

console.log("Escribe 'businessHour' y  entre parentesis escribe el dia de la semana  y la hora usando el sistema de 24 hrs. Ejemplo: businessHour(Domingo,15)");

function businessHour (dayNumber,hourNumber){
    if ((dayNumber == 6 || dayNumber == 0) || (hourNumber < 9 && hourNumber > 17)){
        console.log("No es Horario Laboral");
    }
    else if ((dayNumber != 0 || dayNumber != 6) && (hourNumber => 9 && hourNumber <= 18))
    {
        console.log("Es Horario Laboral");
    }
}



//Segundo ejercicio 
Domingo=0
Lunes=1
Martes=2
Miercoles=3
Jueves=4
Viernes=5
Sabado=6

console.log("Escribe 'getDayNumber' y  entre parentesis escribe el dia de la semana que cayo el 1 de enero [Domingo = 0, Lunes = 1, Martes = 2, Miercoles = 3, Jueves = 4, Viernes = 5 y Sabado = 6], escribe una coma y el dia del año que quieres saber que dia fue o sera. Ejemplo: getDayNumber(0,240)");

function getDayNumber(firstday,yearDayNumber){
    residuo= yearDayNumber % 7;
    console.log("residuo "+ residuo)
    operacion= (residuo +  firstday)-1 ;
    if (operacion == 0){
        console.log("El dia " + yearDayNumber + " del año cae domingo");
    }
    else if ( operacion == 1){
        console.log("El dia " + yearDayNumber + " del año cae lunes");
    }
    else if ( operacion == 2){
        console.log("El dia " + yearDayNumber + " del año cae martes");
    }
    else if ( operacion == 3){
        console.log("El dia " + yearDayNumber + " del año cae miercoles");
    }
    else if ( operacion == 4){
        console.log("El dia " + yearDayNumber + " del año cae jueves");
    }
    else if ( operacion == 5){
        console.log("El dia " + yearDayNumber + " del año cae viernes");
    }
    else if ( operacion == 6){
        console.log("El dia " + yearDayNumber + " del año cae sabado");
    }
    }



//Tercer ejercicio
    console.log("Escribe DiaHoraLaboral y entre parentesis escribe el dia de la semana que fue el primer dia de año [Domingo = 0, Lunes = 1, Martes = 2, Miercoles = 3, Jueves = 4, Viernes = 5 y Sabado = 6], el dia del año que quieres saber que dia fue o sera y escribe una hora en el formado de 24hrs. Ejemplo: DiaHoralLaboral(0,11,20)");

    function DiaHoralLaboral(firstdays,yearDayNumbers,hour){
        residuos= yearDayNumbers % 7;
        console.log("residuo "+ residuos)
        operaciones= (residuos +  firstdays)-1 ;
        if ((operaciones == 0 ) || (operaciones == 6)){
            console.log("El dia " + yearDayNumbers + " del año es fin de semana, no es un dia laboral ");
        }
        else if (( (operaciones == 1)) && ((hour > 8 && hour < 19 ))){
            console.log("El dia " + yearDayNumbers + " cae Lunes es un dia laboral y " + hour+ " es una hora laboral");
        }
        else if (( (operaciones == 2)) && ((hour > 8 && hour < 19 ))){
            console.log("El dia " + yearDayNumbers + " cae Martes es un dia laboral y " + hour+ " es una hora laboral");
        }
        else if (( (operaciones == 3)) && ((hour > 8 && hour < 19 ))){
            console.log("El dia " + yearDayNumbers + " cae Miercoles es un dia laboral y " + hour+ " es una hora laboral");
        }
        else if (( (operaciones == 4)) && ((hour > 8 && hour < 19 ))){
            console.log("El dia " + yearDayNumbers + " cae jueves es un dia laboral y "  + hour+ " es una hora laboral");
        }
        else if (( (operaciones == 5)) && ((hour > 8 && hour < 19 ))){
            console.log("El dia " + yearDayNumbers + " cae viernes es un dia laboral y " + hour+ " es una hora laboral");
        }
        else if (( (operaciones == 1)) && ((hour < 9 || hour > 18 ))){
            console.log("El dia " + yearDayNumbers + " cae Lunes es un dia laboral y " + hour+ " no es una hora laboral");
        }
        else if (( (operaciones == 2)) && ((hour < 9) || (hour > 18 ))){
            console.log("El dia " + yearDayNumbers + " cae Martes es un dia laboral y " + hour+ " no es una hora laboral");
        }
        else if (( (operaciones == 3)) && ((hour < 9) || (hour > 18 ))){
            console.log("El dia " + yearDayNumbers + " cae Miercoles es un dia laboral y " + hour+ " no es una hora laboral");
        }
        else if (( (operaciones == 4)) && ((hour < 9) || (hour > 18 ))){
            console.log("El dia " + yearDayNumbers + " cae jueves es un dia laboral y " + hour+ " no es una hora laboral");
        }
        else if (( (operaciones == 5)) && ((hour < 9) || (hour > 18 ))){
            console.log("El dia " + yearDayNumbers + " cae viernes es un dia laboral y " + hour+ " no es una hora laboral");
        }
    }
      





