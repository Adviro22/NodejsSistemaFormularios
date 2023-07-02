// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);  

// Obtener el valor del parámetro 'tagNo'
const tag = urlParams.get('tag');
const fecha1 = urlParams.get('fecha1');
const fecha2 = urlParams.get('fecha2');
const vin = urlParams.get('vin');
const year = urlParams.get('year');
const marca = urlParams.get('marca');
const body_style = urlParams.get('body_style');
const color = urlParams.get('color');

// Asignar el valor de 'tagNo' al elemento con id 'tag-no'
document.getElementById('tag').textContent = tag;
document.getElementById('fecha1').textContent = fecha1;
document.getElementById('fecha1_1').textContent = fecha1;
document.getElementById('fecha2').textContent = fecha2;
document.getElementById('vin').textContent = vin;
document.getElementById('year').textContent = year;
document.getElementById('marca').textContent = marca;
document.getElementById('body_style').textContent = body_style;
document.getElementById('color').textContent = color;

