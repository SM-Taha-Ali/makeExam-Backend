const questionbank =  require("../models/Questionbank.js")

async function writePaper(req,res){

    let success = false
    try {

        let paper = await PastpapersCB.create({
        
        questionNo: req.body.questionNo,
        question: req.body.question,
        subParts: req.body.subParts,
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
    writePaper,
    getPaper
}






