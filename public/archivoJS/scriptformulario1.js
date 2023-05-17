let fechvenc;
let fechvenc2;
let fechini;

function calcularFecha() {
    // Obtener la fecha establecida en la variable existente
    const fechaEmision = document.getElementById('fechaEmision').value;

    // Obtener la cantidad de días seleccionados en el select
    const validityDays = document.getElementById('validity_days').value;

    // Convertir la fecha a un objeto Date
    const fechaEmisionObj2 = new Date(fechaEmision + 'T00:00:00Z');
    fechaEmisionObj2.setUTCHours(0, 0, 0, 0);

    const fechaEmisionObj = new Date(fechaEmision + 'T00:00:00Z');
    fechaEmisionObj.setUTCHours(0, 0, 0, 0);

    fechaEmisionObj2.setUTCDate(fechaEmisionObj2.getUTCDate() + 1);
    fechaEmisionObj.setUTCDate(fechaEmisionObj.getUTCDate() + 1);

    // Agregar los días seleccionados a la fecha existente
    fechaEmisionObj.setUTCDate(fechaEmisionObj.getUTCDate() + parseInt(validityDays));

    // Convertir la nueva fecha a un formato legible
    const nuevaFecha = fechaEmisionObj.toLocaleDateString();

    // Formatear la fecha de emisión en el formato deseado (MMM DD, YYYY)
    let fechaEmisionFormateada = moment(fechaEmisionObj2.toISOString())
        .format("MMM DD, YYYY")
        .toUpperCase();
    
    // Formatear la fecha de vencimiento en el formato deseado (MMM DD, YYYY)
    let fechaVencimientoFormateada = moment(fechaEmisionObj.toISOString())
        .format("MMM DD, YYYY")
        .toUpperCase();
	
    // Formatear la fecha de emisión 2 en el formato deseado (MMDDYYYY)
    let fechaEmision2Formateada = fechaEmisionObj.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }).replace(/\//g, "");

    fechvenc = fechaVencimientoFormateada;
    fechini = fechaEmisionFormateada;
    fechvenc2 = fechaEmision2Formateada;
}




let var_tag;

function generarTag(){
	let tag = "";

	// generar los cuatro números del tag
	for (let i = 0; i < 4; i++) {
	tag += Math.floor(Math.random() * 10);
	}

	// agregar una letra al tag
	tag += String.fromCharCode(65 + Math.floor(Math.random() * 26));

	// agregar los dos últimos números del tag
	for (let i = 0; i < 2; i++) {
	tag += Math.floor(Math.random() * 10);
	}
	var_tag = tag;
}

function generate() {
	const vin = document.getElementById('VIN').value;
	const color = document.getElementById('color').value;
	const nombre = document.getElementById('nombre').value;
	const make = document.getElementById('make').value;
	const model = document.getElementById('model').value;
	const year = document.getElementById('year').value;
	const body_style = document.getElementById('body_style').value;
	const mailingaddress = document.getElementById('mailingaddress').value;
	const ciudad = document.getElementById('ciudad').value;
	const estado = document.getElementById('estado').value;
	const cityandstate = ciudad + ", " + estado;
	const coidgozip = document.getElementById('coidgozip').value;
		
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
	var text = var_tag;

	// Obtiene la anchura del texto
	var textWidth = doc.getTextWidth(text);

	// Calcula la posición x para centrar el texto
	var xPos = (doc.internal.pageSize.getWidth() - textWidth) / 2;

	// Dibuja el texto centrado en el eje de las x
	doc.text(text, xPos, 133);
	//doc.text(vin, 40, 120)
	doc.setFontSize(70)
	doc.text(fechvenc, 77, 85);
	doc.setFontSize(23);
	doc.text(year, 13, 147.5);
	doc.text(make, 13, 155);
	doc.text(vin, 196, 143);


	var x = 288;
	var y = 50;
	
	var blanco = "#FFFFFF"; // Blanco en formato hexadecimal
	var negro = "#000000"; // Negro en formato hexadecimal


	// Establecer el color de texto
	doc.setTextColor(blanco);
	// Definir el espaciado entre las letras
	var spacing = 15;

	// Definir el tamaño de fuente
	var fontSize = 20;

	// Agregar las letras verticalmente
	var texto = fechvenc2;

	// Iterar sobre cada letra del texto
	for (var i = 0; i < texto.length; i++) {
	var letra = texto[i];
	
	// Calcular las coordenadas y para cada letra
	var letraY = y + (i * spacing);
	
	// Agregar la letra verticalmente
	doc.setFontSize(fontSize);
	doc.text(letra, x, letraY);
	}

		
	doc.addPage("a4","p");
	doc.setFontType("normal");
	const img2 = document.getElementById('img2');
	doc.addImage(img2, 0, 0, 208, 208)
						  
					
	// Agrega los valores al documento PDF
	doc.setFontSize(10);
	doc.setTextColor(negro);
	doc.text(var_tag, 62, 29);
	doc.text(fechini, 150, 29);
	doc.text(fechvenc, 150, 34);
	doc.text(fechini, 62, 58.3);
	doc.text(vin, 62, 63.8);
	doc.text(color, 62, 80.3);
	doc.text(make, 62, 74.8);
	doc.text(year, 62, 69.3);
	doc.text(body_style, 150, 69.3)
	doc.text(model, 150, 74.8);
	doc.text(nombre, 105, 115);
	doc.text(mailingaddress, 105, 120.5);
	doc.text(cityandstate, 105, 126);
	doc.text(coidgozip, 105, 131.5);
		
	doc.save("formulario.pdf");
	
    
}	