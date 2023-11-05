const mongoose = require("mongoose");
const Note = require("../models/note")

const NotesController = {
    async findAll(req, res) {
        const { idUser } = req.params;
        const notes = await Note.find({idUser: idUser}).sort({createdAt: "desc"});
        if(!notes) return res.status(404).send("Not Found");
        return res.status(200).send({data: notes})
    },

    async create(req, res) {
        const { id, title, content } = req.body;

        const idUser = new mongoose.Types.ObjectId(id);

        await new Note({
            idUser: idUser,
            title: title,
            content: content,
        }).save();

        return res.status(201).send({ message: "Note was created." });
    },

    async update(req, res) {
        const { title, content } = req.body;

        const note = await Note.findOne({
            "slug": req.params.slug,
            "idUser": req.params.idUser
        });
        if(!note) return res.status(404).send("Not Found");

        note.title = title;
        note.content = content;
        await note.save();

        return res.status(201).send({ message: "Note was updated."});
    },

    async remove(req, res) {
        const note = await Note.findOneAndDelete({
            "slug": req.params.slug,
            "idUser": req.params.idUser
        });
        if(!note) return res.status(404).send("Not Found");

        return res.status(201).send({ message: "Note was updated."});
    }
}

module.exports = NotesController;