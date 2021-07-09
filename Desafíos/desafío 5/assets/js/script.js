// NOMBRE DE VARIABLES
var nombre = prompt("Ingrese su nombre completo: ");
var carrera = prompt("Ingrese su carrera: ");
var hnota1 = parseFloat(prompt("Ingrese primera nota que obtuvo en HTML (1.0 a 7.0): "));
var hnota2 = parseFloat(prompt("Ingrese segunda nota que obtuvo en HTML (1.0 a 7.0): "));
var hnota3 = parseFloat(prompt("Ingrese tercera nota que obtuvo en HTML (1.0 a 7.0): "));
var cnota1 = parseFloat(prompt("Ingrese primera nota que obtuvo en CSS: (1.0 a 7.0) "));
var cnota2 = parseFloat(prompt("Ingrese segunda nota que obtuvo en CSS: (1.0 a 7.0) "));
var cnota3 = parseFloat(prompt("Ingrese tercera nota que obtuvo en CSS: (1.0 a 7.0) "));
var jnota1 = parseFloat(prompt("Ingrese primera nota que obtuvo en JavaScript: (1.0 a 7.0) "));
var jnota2 = parseFloat(prompt("Ingrese segunda nota que obtuvo en JavaScript: (1.0 a 7.0) "));
// NOTA MÍNIMA PARA PASAR RAMO
var notaminima = parseFloat(4.0)
var jnota3 = parseFloat((notaminima * 3) - (jnota1 + jnota2));
jnota3 = jnota3.toFixed(2)
if (jnota3 <= 1) {
    jnota3=1
}
// PROMEDIOS, incluye un máximo de 2 decimales
var promedioh = ((hnota1 + hnota2 + hnota3) / 3);
promedioh = promedioh.toFixed(2)
var promedioc = ((cnota1 + cnota2 + cnota3) / 3);
promedioc = promedioc.toFixed(2)
// body
document.write("<div class='container'>");
document.write("<h1>Notas finales</h1>");
document.write("Nombre: " + nombre + "<br>");
document.write("Carrera: " + carrera);
document.write("<table class='table'>");
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>nota 1</th>" + "<th scope='col'>nota 2</th>" + "<th scope='col'>nota 3</th>" + "<th scope='col'>promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + hnota1 + "</td>" + "<td>" + hnota2 + "</td>" + "<td>" + hnota3 + "</td>" + "<td>" + promedioh + "</td>");
document.write("</tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>" + cnota1 + "</td>" + "<td>" + cnota2 + "</td>" + "<td>" + cnota3 + "</td>" + "<td>" + promedioc + "</td>");
document.write("</tr>");
document.write("<th scope='row'>JavaScript</th>");
document.write("<td>" + jnota1 + "</td>" + "<td>" + jnota2 + "</td>" + "<td>--</td>" + "<td>--</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("Para aprobar el ramo JavaScript usted requiere un: " + jnota3);
document.write("</div>");