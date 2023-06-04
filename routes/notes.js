const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const fetchUser = require("../middleware/fetchUser")
const Notes = require("../models/Notes")


// use this node to fetch all Notes

router.get('/allNotes', fetchUser, async (req, res) => {
    const allNotes = await Notes.find({ user: req.user._id })
    res.send({ allNotes: allNotes })
})


// use this node to add new Note
router.post('/addNote', fetchUser, async (req, res) => {

    req.body.user = req.user.id
    const NOTE = new Notes(req.body);
    NOTE.save().then(() => {

        res.send("Added Successfully")
    }).catch((E) => {
        console.log(E.message)
    })
})


module.exports = router