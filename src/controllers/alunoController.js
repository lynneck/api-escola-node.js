import aluno from "../models/Aluno.js"

class AlunoController {
    static async listarAlunos (req, res) {
        try {
            const listaAlunos = await aluno.find({})
            res.status(200).json(listaAlunos);
            
        } catch (error) {
            res.status(500).json({message:`${error.message}  "Erro ao listar alunos"`})
        }
    };
    static async listarAlunoPorId (req, res) {
        try {
            const id = req.params.id;
            
            const alunoEncontrado = await aluno.findById(id)

            if(!alunoEncontrado){
                return res.status(404).json({message:'Aluno não encotrado'})
            }

            res.status(200).json(alunoEncontrado);
            
        } catch (error) {
            res.status(500).json({message:`${error.message}  "Erro ao listar alunos"`})
        }
    };



    static async cadastrarAluno(req, res){
        try {
            let novoAluno = new aluno(req.body)
            const result = await novoAluno.save();
            console.log('result', result)
            res.status(201).send(result.toJSON())
            
        } catch (error) {
            res.status(500).json({message:`${error.message}  "Erro ao se cadastrar"`})
        }
    }
    static async atualizaAlunos (req, res) {
        try {
            const id = req.params.id;
            const novosDados=req.body
            const alunoAtualizado = await aluno.findByIdAndUpdate(id, novosDados,{new: true})

            if(!alunoAtualizado){
                return res.status(404).json({message:'Aluno não encotrado'})
            }

            res.status(200).json({message:'Aluno atualizado com sucesso', aluno: alunoAtualizado});
            
        } catch (error) {
            res.status(500).json({message:`${error.message}  "Erro ao listar alunos"`})
        }
    };

}

export default AlunoController;