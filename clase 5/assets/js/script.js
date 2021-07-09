//var nombre = prompt("Hola, coloque su nombre por favor", "Nombre por defecto");
//alert("hola, nos alegra que estés por aquí "+ nombre)

/* document.write("<h1 id='color-letra'> Estoy aprendiendo JavaScript</h1>")

var dividiendo = prompt("Hola, coloque un número dividendo", "10");
var divisor = prompt("Hola, coloque un número divisor", "2");
var color = prompt("Hola, escoja también un color CSS \n Ejemplo: blue, yellow, green, red, etc....", "blue");
dividiendo = parseInt(dividiendo);
divisor = parseInt(divisor);
total_divi = dividiendo / divisor;
total_modulo = dividiendo % divisor;
document.write("La división entre los dos números es " + total_divi + " y su módulo es " + total_modulo + ".");
document.write(" Además escogiste color " + color + " lo cual cambia de color la letra al contenido de la etiqueta H1");
document.getElementById("color-letra").style.color = color; */

document.write("<div class='container'>");
document.write("<h1>Creando una tabla HTML con JavaScript y Bootstrap</h1>");
document.write("<table class='table'>");
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>ID</th>");
document.write("<th scope='col'>Nombre</th>");
document.write("<th scope='col'>Apellido</th>");
document.write("<th scope='col'>Email</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>1</th>");
document.write("<td>Morty</td>");
document.write("<td>Smith</td>");
document.write("<td>morty_smith@correo.com</td>");
document.write("</tr>")
document.write("</tbody>");
document.write("</table>");
document.write("</div>");
