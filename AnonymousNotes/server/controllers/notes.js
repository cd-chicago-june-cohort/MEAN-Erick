var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    create: function (req, res) {
        var note = new Note({
            content: req.body.content
        });
        console.log(req.body)
        note.save(function(err){
            if(err){
                res.json(err);
            } else {
                res.json(note);
            }
        });
    },
    show: function (req, res) {
        Note.find({}).sort('-created_at').exec(function(err, notes){
            if(err){
                console.log(err);
            }
            else{
                res.json(notes);
            }
        })
    }
}