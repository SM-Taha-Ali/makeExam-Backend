const PastpapersCB =  require("../models/PastpapersCB.js")

async function createPaper(req,res){

    let success = false
    try {

        let paper = await PastpapersCB.create({
        
        year : req.body.year,
        section: req.body.section,
        marks: req.body.marks,
        question: req.body.question,
        subParts: req.body.subParts,
        source : req.body.source,
        paperType: req.body.paperType,
        subject: req.body.subject
      });
        res.json(paper);

    }

    catch (error) {
        console.log(error);
        res.status(500).send(success, "Internal server error")
    }
}

async function getPaper(req, res) {
    try {
        const paper = await PastpapersCB.find();
        res.json(paper);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

module.exports = {
    createPaper,
    getPaper
}






