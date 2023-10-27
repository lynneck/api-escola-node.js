import aluno from "../models/Aluno.js"

class AlunoController {
    static async listarAlunos (req, res) {
        const listaAlunos = await aluno.find({})
        res.status(200).json(listaAlunos);
    };

    static async cadastrarAluno(req, res){
        try {
            let novoAluno = new aluno(req.body)
            const result = await novoAluno.save();
            console.log('result', result)
            res.status(201).send(result.toJSON())
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default AlunoController;