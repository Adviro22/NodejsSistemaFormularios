
function cambiarFormato() {
	// Obtener la fecha del formulario
	const fechaFormulario = document.getElementById("fechaEmision").value;

	// Crear un objeto de fecha Moment.js a partir de la cadena de texto
	const fechaMoment = moment(fechaFormulario);

	// Formatear la fecha en el formato deseado
	const FechaFormateada = fechaMoment.format("MM/DD/YYYY");

	// Asignar la fecha formateada a la variable de tipo texto
	document.getElementById("fechaFormateada").value = FechaFormateada;
}

function generate() {

	const vin = document.getElementById('VIN').value;
	const color = document.getElementById('color').value;
	//const validity_days = document.getElementById('validity_days').value;
	//const nombre = document.getElementById('nombre').value;
	//const fechaEmision = document.getElementById('fechaEmision').value;
	//const fechaFormateada = document.getElementById('fechaFormateada').value;
	const marca = document.getElementById('marca').value;
	const year = document.getElementById('year').value;
	//const mailingaddress = document.getElementById('mailingaddress').value;
	//const ciudad = document.getElementById('ciudad').value;
	//const estado = document.getElementById('estado').value;
	//const coidgozip = document.getElementById('coidgozip').value;
		
	var doc = new jsPDF({
		orientation: 'l',
		unit: 'mm',
		format: 'a4',
		putOnlyUsedFonts:true,
		floatPrecision: 16 // or "smart", default is 16
		});
		
		
	const img1 = document.getElementById('img1');
	doc.addImage(img1, 0, 30, 300, 150)
	doc.setFontSize(55);
	doc.setFontType("bold");
	doc.text(vin, 40, 120)
		
	doc.addPage("a4","p");
	doc.setFontType("normal");
	const img2 = document.getElementById('img2');
	doc.addImage(img2, 0, 0, 208, 208)
						  
					
	// Agrega los valores al documento PDF
	doc.setFontSize(12);
	doc.text(vin, 62, 63.8);
	doc.text(color, 62, 80.3);
	//doc.text(nombre, 10, 50);
	//doc.text(fechaFormateada, 10, 60);
	doc.text(marca, 62, 74.8);
	doc.text(year, 62, 69.3);
	//doc.text(mailingaddress, 10, 90);
	//doc.text(ciudad, 10, 100);
	//doc.text(estado, 10, 110);
	//doc.text(coidgozip, 10, 120);
		
	doc.save("formulario.pdf");
	
    
}	