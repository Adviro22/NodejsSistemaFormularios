let fechvenc;

function calcularFecha() {
    // Obtener la fecha establecida en la variable existente
    const fechaEmision = document.getElementById('fechaEmision').value;

    // Obtener la cantidad de días seleccionados en el select
    const validityDays = document.getElementById('validity_days').value;

    // Convertir la fecha a un objeto Date
    const fechaEmisionObj = new Date(fechaEmision);

    // Agregar los días seleccionados a la fecha existente
    fechaEmisionObj.setDate(fechaEmisionObj.getDate() + parseInt(validityDays));

    // Convertir la nueva fecha a un formato legible
    const nuevaFecha = fechaEmisionObj.toLocaleDateString();

    // Formatear la fecha de vencimiento en el formato deseado (MMM DD, YYYY)
    let fechaVencimientoFormateada = moment(fechaEmisionObj.toISOString())
        .format("MMM DD, YYYY")
        .toUpperCase();
	fechvenc = fechaVencimientoFormateada
}

function generate() {
	const vin = document.getElementById('VIN').value;
	const color = document.getElementById('color').value;
	//const validity_days = document.getElementById('validity_days').value;
	//const nombre = document.getElementById('nombre').value;
	//const fechaEmision = document.getElementById('fechaEmision').value;
	//const fechaFormateada = document.getElementById('fechaFormateada').value;
	const marca = document.getElementById('marca').value;
	//const model = document.getElementById('model').value;
	const year = document.getElementById('year').value;
	//const body_style = document.getElementById('body_style').value;
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
	doc.setFontSize(170)
	doc.setFontType("bold")

	// Define el texto que deseas centrar	
	var text = vin;

	// Obtiene la anchura del texto
	var textWidth = doc.getTextWidth(text);

	// Calcula la posición x para centrar el texto
	var xPos = (doc.internal.pageSize.getWidth() - textWidth) / 2;

	// Dibuja el texto centrado en el eje de las x
	doc.text(text, xPos, 133);
	//doc.text(vin, 40, 120)
	doc.setFontSize(70)
	doc.text(fechvenc, 77, 85);
		
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