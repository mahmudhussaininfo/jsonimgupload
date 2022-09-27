const path = require('path');
const { readFileSync, writeFileSync } = require('fs');

// students data
const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

const getstudents = (req, res) => {


    res.render('student/show', {
        students
    });

}
const createstudent = (req, res) => {

    res.render('student/create');

}
const editstudent = (req, res) => {

    res.render('student/edit');

}
const singlestudent = (req, res) => {

    res.render('student/single');

}
const studentdata = (req, res) => {

    const { name, email, phone, location } = req.body;

    //for catch data id
    let last_id = 1;
    if (students.length > 0) {
        last_id = students[students.length - 1].id + 1;
    }

    students.push({
        id: last_id,
        name: name,
        email: email,
        phone: phone,
        location: location,
        photo: req.file ? req.file.filename : 'avatar.png'

    })

    // for create new data to json db
    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    // for redirect
    res.redirect('/student');


}



//module exports
module.exports = {
    getstudents,
    createstudent,
    editstudent,
    singlestudent,
    studentdata
};