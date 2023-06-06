const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


let students = [];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = req.params.id;
    const stu = student.find(s => s.id === parseInt(student));
    
    if (stu) {
        res.json(stu);
    }
    else {
        res.status(400).json({err:'Student not found'})
    }
});

app.post('/students', (req, res) => {
    const { name, age, address } = req.body;
    const newStudent = {
        id:parseInt(id),
        name,
        age:parseInt(age),
        address:address
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
    const student = req.params.id;
    const { name, age, address } = req.body;
    const stu = students.find(s => s.id === parseInt(student));
    if (stu) {
        student.name = name || student.name;
        student.age = age || student.age;
        student.address = address || student.address;
        res.json({ msg: 'Student Successfully updated' });
    }
    else {
        res.status(400).json({ err: 'Student not found' });
    }

});

app.delete('/students/:id', (req, res) => {
    const student = req.params.id;
    const stu = students.fill(s => s.id === parseInt(student));
    if (stu !== -1) {
        const student = students.splice(s => s.id === package(student));
        res.json({ msg: 'Successfully deleted ' });
    }
    else {
        res.status(400).json({ err: 'Student not found' });
    }
});   

app.listen(3000)
console.log('server running 0n 3000');