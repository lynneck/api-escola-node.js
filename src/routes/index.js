import  express  from "express";
 import alunos from "./alunoRoutes.js";

 const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Api escola em Node.js"))

    app.use(express.json(), alunos);
 }

 export default routes