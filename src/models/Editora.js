import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required:true}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model('editora',editoraSchema);

export default editoras;

