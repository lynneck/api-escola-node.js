import express from "express";
import conectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

//const connect = await conectNaDatabase();
conectNaDatabase();
//conectNaDatabase.on("error", console.log(console,"Erro de conexão"));
//conectNaDatabase.once("open",() => {
  //  console.log("conexão feita com sucesso")
//})

const app = express();
app.use(express.json())
routes(app)


/*

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/alunos/:id", (req, res) => {
     const index = buscaAluno(req.params.id);
     res.status(200).json(alunos[index])  
})

app.put("/alunos/:id", (req, res) => {
    const index = buscaAluno(req.params.id);
    alunos[index].nome = req.body.nome
    res.status(200).json(alunos)  
})
app.delete("/alunos/:id", (req, res) => {
    const index = buscaAluno(req.params.id);
    alunos.splice(index, 1);
    res.status(200).send("Aluno removido com sucesso")  
})

*/


export default app;