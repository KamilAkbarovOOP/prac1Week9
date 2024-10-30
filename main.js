//Task 1
const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

const calculateAverageGrade = (students) => {
    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    const averageMarks = totalMarks / students.length;

    let grade;
    if (averageMarks < 60) {
        grade = "F";
    } else if (averageMarks < 70) {
        grade = "D";
    } else if (averageMarks < 80) {
        grade = "C";
    } else if (averageMarks < 90) {
        grade = "B";
    } else if (averageMarks < 100) {
        grade = "A";
    }

    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}

calculateAverageGrade(students);


//Task 2
const textInput = document.getElementById('textInput');

textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        alert(textInput.value);
    }
});



//Task 3
const cube = document.querySelector('.cube')

cube.addEventListener('dblclick', () => {
    cube.style.backgroundColor = 'red';
})


//Task 4
const progressBar = document.getElementById('progressBar');
const updateButton = document.getElementById('updateButton');
let progress = 0;

updateButton.addEventListener('click', function() {
    if (progress < 100) {
        progress += 20;
        progressBar.style.width = (progress *10) + '%';
        progressBar.textContent = progress + '%';
    }

    if (progress >= 100) {
        updateButton.disabled = true;
        updateButton.textContent = "Completed!";
    }
});



//Task 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}