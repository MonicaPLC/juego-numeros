const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  if (req.session.sistema == undefined) {
    req.session.sistema = "Proyecto Base";
    console.log(req.session.sistema);
  }

  if (!req.session.numeroAleatorio) {
    // primero generamos un num al azar entre 0 y 100
    const numero = Math.floor(Math.random() * 100);
    // lo guardamos en sesion
    req.session.numeroAleatorio = numero;
  }

  console.log(req.session.numeroAleatorio);
  res.render("index", { mensaje: "todo bien" });
});

router.post("/jugar", (req, res) => {
  if (req.body.numero > req.session.numeroAleatorio)
    res.render("index", { mensaje: "Muy alto" });
  else if (req.body.numero < req.session.numeroAleatorio)
    res.render("index", { mensaje: "Muy Bajo" });
  else res.render("index", { mensaje: "Felicitaciones" });
});

module.exports = router;
