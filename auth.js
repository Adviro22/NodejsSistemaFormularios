module.exports = function(req, res, next) {
    if (!req.session.user) {
      res.redirect('/login'); // Si el usuario no ha iniciado sesión, redirige a la página de inicio de sesión
    } else {
      next(); // Si el usuario ha iniciado sesión, permite el acceso a la página solicitada
    }
  };