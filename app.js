const express = require("express");
const app = express();
const auth = require('./auth');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false
}));

const connection = require('./database/db');


app.get("/register", (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/menuprincipal', auth, (req, res) => {
  res.render('menuprincipal');
});

app.get('/formulario1', auth, (req, res) => {
  res.render('formulario1');
});

app.get('/formulario2', auth, (req, res) => {
  res.render('formulario2');
});

app.get('/prueba', auth, (req, res) => {
  res.render('prueba');
});

//Register
app.post('/register', async(req, res) => {
  const user = req.body.user;
  const name = req.body.name;
  const pass = req.body.pass;
  let passwordHaash = await bcryptjs.hash(pass, 8);
  connection.query('INSERT INTO users SET ?', {user:user, name:name, pass:passwordHaash}, async(error, results)=>{
    if(error){
      console.log(error);
    }else{
      res.send('REGISTRO EXITOSO');
    }
  })
})

//Autentication
app.post('/auth', async(req, res) =>{
  const user = req.body.user;
  const pass = req.body.pass;
  let passwordHaash = await bcryptjs.hash(pass, 8);
  if( user && pass){
    connection.query('SELECT * FROM users WHERE user = ?', [user], async(error, results) =>{
      if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
        res.render('login', {
          alert: true,
          alertTitle: "Error",
          alertMessage: "USUARIO y/o PASSWORD incorrectas",
          alertIcon:'error',
          showConfirmButton: true,
          timer: false,
          ruta: 'login'    
      });
      }else{
        //creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});        			
			}		
  
    })
  }else{
    res.send('Por favor ingrese un usuario y contraseña');
  }
})

//12 - Método para controlar que está auth en todas las páginas
/*
app.get('/', (req, res)=> {
	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'Debe iniciar sesión',			
		});				
	}
	res.end();
});
*/

app.get('/', auth, (req, res)=> {
	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'Debe iniciar sesión',			
		});				
	}
});

//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
  if (!req.user)
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

//Logout
//Destruye la sesión.
app.get('/logout', function (req, res) {
req.session.destroy(() => {
  res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
})
});


app.listen(PORT, () => {
  console.log("Servidor en el puerto: ", PORT);
})