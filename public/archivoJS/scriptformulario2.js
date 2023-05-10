const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.addImage('../img/Graves_35.jpg', 'JPEG', 10, 30, 100, 75);
doc.save("a4.pdf");
