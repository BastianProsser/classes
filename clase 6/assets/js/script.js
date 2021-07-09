
/*document.write("<div class='container'>");
//Cargando la imagen
document.write("<img src='https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png' style='float:right'>");
// Agregando el título
document.write("<h1 'py-2'>Notas Finales</h1>");
//Preguntando por el nombre del alumno
var alumno = prompt("Ingrese el nombre del alumno","Juan Perez");
document.write("<dl class='row'>");
document.write("<dt class='col-sm-3'>Nombre: </dt><dd class='col-sm-9'>"+alumno+"</dd>");
//Consultando por la carrera e imprimiendo el valor
var carrera = prompt("Ingrese la carrera del alumno","Analista programador");
document.write("<dt class='col-sm-3'>Nombre: </dt><dd class='col-sm-9'>"+carrera+"</dd></dl>");
//Definiendo la tabla de notas
document.write("<table class='table'>");
document.write("<thead class='thead bg-dark text-white'>");
document.write("<tr>");  
document.write("<th>Ramo</th>");
document.write("<th>Nota 1</th>");
document.write("<th>Nota 2</th>");
document.write("<th>Nota 3</th>");
document.write("<th>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
//Definiendo el cuerpo de una tabla
document.write("<tbody>");
//Definiendo la fila

//Curso 1
document.write("<tr>");
//Preguntando por el curso y las notas
// Ciclo repita las lineas que estan dentro del ciclo, dado un contador inicial en 0, y una condicion de término del ciclo
var curso = prompt("Ingrese el curso: ","HTML");
var nota1 = prompt("Ingrese la nota 1", "6");
var nota2 = prompt("Ingrese la nota 2", "7");
var nota3 = prompt("Ingrese la nota 3", "6");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
//Imprimiendo las notas en pantalla
document.write("<th>"+curso+"</th>");
document.write("<th>"+nota1+"</th>");
document.write("<th>"+nota2+"</th>");
document.write("<th>"+nota3+"</th>");
document.write("<th>"+promedio.toFixed(2)+"</th>");
document.write("</tr>");

//Curso 2
document.write("<tr>");
//Preguntando por el curso y las notas
// Ciclo repita las lineas que estan dentro del ciclo, dado un contador inicial en 0, y una condicion de término del ciclo
var curso = prompt("Ingrese el curso: ","CSS");
var nota1 = prompt("Ingrese la nota 1", "6");
var nota2 = prompt("Ingrese la nota 2", "7");
var nota3 = prompt("Ingrese la nota 3", "6");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
//Imprimiendo las notas en pantalla
document.write("<th>"+curso+"</th>");
document.write("<th>"+nota1+"</th>");
document.write("<th>"+nota2+"</th>");
document.write("<th>"+nota3+"</th>");
document.write("<th>"+promedio.toFixed(2)+"</th>");
document.write("</tr>");

//Curso3
document.write("<tr>");
//Preguntando por el curso y las notas
// Ciclo repita las lineas que estan dentro del ciclo, dado un contador inicial en 0, y una condicion de término del ciclo
var curso = prompt("Ingrese el curso: ","JavaScript");
var nota1 = prompt("Ingrese la nota 1", "6");
var nota2 = prompt("Ingrese la nota 2", "7");
var aprobacion = prompt("Ingrese la nota de aprobación:",4);
var nota3 = ((parseFloat(aprobacion) - ((parseFloat(nota1)+parseFloat(nota2))/3))*100)/(100/3);

//Imprimiendo las notas en pantalla
document.write("<th>"+curso+"</th>");
document.write("<th>"+nota1+"</th>");
document.write("<th>"+nota2+"</th>");
document.write("<th>"+nota3.toFixed(2)+"</th>");
document.write("<th>"+aprobacion+"</th>");
document.write("</tr>");

document.write("</tbody>");
document.write("</table>");

document.write("<p>Para aprobar el curso "+curso+" con nota "+aprobacion+" necesitas obtener un "+nota3.toFixed(2)+ "en la nota 3");

document.write("</div>");
document.write(""); */


