import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{ type: String, required: true },
    responsavel:{type: String, required: true},
    dataDeNascimento:{type: Date, required: true},
    cursandoSerie:{type: String, required: true},
    matriculaTurno:{type: String, required: true}
}, {versionKey:false})

const alunos = mongoose.model("alunos", alunoSchema)

export default alunos;