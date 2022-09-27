const express = require('express');
const path = require('path');
const { getstudents, createstudent, editstudent, singlestudent, studentdata } = require('../controllers/StudentController');
const multer = require('multer');

//init router
const router = express.Router();

//multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, path.join(__dirname, '../public/images/'));


    },
    filename: (req, file, cb) => {

        cb(null, file.originalname);

    }
});

//multer middleware
const multerPhoto = multer({
    storage: storage
}).single('student-multer');

//routes
router.get('/', getstudents);
router.get('/create', createstudent);
router.post('/create', multerPhoto, studentdata);
router.get('/edit', editstudent);
router.get('/:id', singlestudent);

//module
module.exports = router