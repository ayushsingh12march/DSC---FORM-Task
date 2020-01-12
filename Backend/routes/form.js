const router = require('express').Router();
let FormData = require('../modules/formData.model');

router.route('/').get((req,res) =>{
    FormData.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error'+err));
});

router.route('/add').post((req,res)=>{
    const studentName = req.body.studentName;
    const regNo = Number(req.body.regNo);
    const choiceOfElective = req.body.choiceOfElective;
    const newFormData = new FormData({
        studentName,
        regNo,
        choiceOfElective
    });
    newFormData.save()
        .then(() => res.json('Exercise added'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;