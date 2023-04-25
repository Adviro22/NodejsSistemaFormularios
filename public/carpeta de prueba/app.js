function generatePDF() {
	// Crea un nuevo documento PDF
	var doc = new jsPDF();
		  
	// Agrega el título al documento
	doc.setFontSize(16);
	doc.text("Formulario", 10, 10);
		  
	// Captura los valores del formulario
	var VIN = document.getElementById("VIN").value;
	var color = document.getElementById("color").value;
	var nombre = document.getElementById("nombre").value;
	var fechaFormateada = document.getElementById("fechaFormateada").value;
	var marca = document.getElementById("marca").value;
	var year = document.getElementById("year").value;
	var mailingaddress = document.getElementById("mailingaddress").value;
	var ciudad = document.getElementById("ciudad").value;
	var estado = document.getElementById("estado").value;
	var coidgozip = document.getElementById("coidgozip").value;
				  
			
	// Agrega los valores al documento PDF
	doc.setFontSize(12);
	doc.text("VIN: " + VIN, 10, 30);
	doc.text("COLOR: " + color, 10, 40);
	doc.text("NAME: " + nombre, 10, 50);
	doc.text("ISSUED DATE: " + fechaFormateada, 10, 60);
	doc.text("MAKE: " + marca, 10, 70);
	doc.text("YEAR: " + year, 10, 80);
	doc.text("MAILIN ADRRESS: " + mailingaddress, 10, 90);
	doc.text("CITY: " + ciudad, 10, 100);
	doc.text("STATE: " + estado, 10, 110);
	doc.text("ZIP CODE: " + coidgozip, 10, 120);
		  
	// Guarda el documento PDF
	doc.save("formulario.pdf");
}