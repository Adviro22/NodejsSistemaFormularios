function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;
    

    if(user == "Josue" && pass == "1234"){

        window.location= "menuprincipal.html";
    }
}