import express from "express"
import AlunoController from "../controllers/alunoController.js";

const routes = express.Router();

routes.get("/alunos", AlunoController.listarAlunos)
routes.post("/alunos", AlunoController.cadastrarAluno)


export default routes;