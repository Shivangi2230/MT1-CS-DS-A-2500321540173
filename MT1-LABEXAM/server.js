const express = require('express');
const app = express();

app.use(express.json());


let courses = [
    { id: 1, name: "OS", code: "OS101" },
    { id: 2, name: "ADS", code: "ADS102" },
    { id: 3, name: "Web Development", code: "WD103" }
];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/courses', (req, res) => {
    res.json(courses);
});


app.post('/courses', (req, res) => {
    courses.push(req.body);
    res.send("Course added successfully");
});


app.put('/courses/:id', (req, res) => {

    let id = Number(req.params.id);

    let course = courses.find(c => c.id === id);

    if (course) {
        course.name = req.body.name;
        course.code = req.body.code;

        res.send("Course updated successfully");
    } else {
        res.send("Course not found");
    }
});


app.delete('/courses/:id', (req, res) => {

    let id = Number(req.params.id);

    courses = courses.filter(c => c.id !== id);

    res.send("Course deleted successfully");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});