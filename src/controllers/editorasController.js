import editoras from "../models/Editora.js";

class EditoraController {

    static listarEditora = (req, res) => {
        editoras.find((err, editora) => {
        res.status(200).json(editora)
        })
    }

    static listarEditoraPorId = (req, res) =>{
        const id = req.params.id;

        editoras.findById(id, (err, editora) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Editora não encontrado`})
            } else {
                res.status(200).send(editora);
            }
        })

    }

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);

        editora.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Editora.`})
            } else {
                res.status(201).send(editora.toJSON())
            }
        })
    }

    static atualizarEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndUpdate(id, {$set: req.body}, (err)=> {
            if(!err) {
                res.status(200).send({message: 'Editora atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        } )

    }

    static excluirEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Editora removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default EditoraController