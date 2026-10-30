// 1
let studentName = "RAHUL KUMAR";
let rollNumber = 101;

//2
let marks =[89,75,91,86,73]

//3
function calculateTotal(marksArray) {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    return total;
}

//4
function calculatePercentage(marksArray) {
    let total = calculateTotal(marksArray);
    // Assuming each subject is out of 100 max marks
    let maxMarks = marksArray.length * 100; 
    return (total / maxMarks) * 100;
}

//5
function findHighest(marksArray) {
    let highest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] > highest) {
            highest = marksArray[i];
        }
    }
    return highest;
}

//6
function findLowest(marksArray) {
    let lowest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] < lowest) {
            lowest = marksArray[i];
        }
    }
    return lowest;
}

//7
function countPassedSubjects(marksArray) {
    let count = 0;
    for (let i = 0; i < marksArray.length; i++) {
        if (marksArray[i] >= 40) {
            count++;
        }
    }
    return count;
}

// Bonus Challenge: 
function getPerformanceReport(percentage) {
    if (percentage >= 85) {
        return "EXCELLENT";
    } else if (percentage >= 70) {
        return "GOOD";
    } else if (percentage >= 50) {
        return "AVERAGE";
    } else {
        return "NEEDS IMPROVEMENT";
    }
}

//8
let upperCaseName = studentName.toUpperCase();
let nameLength = studentName.length; 

let totalMarks = calculateTotal(marks);
let percentage = calculatePercentage(marks);
let highestMark = findHighest(marks);
let lowestMark = findLowest(marks);
let passedSubjects = countPassedSubjects(marks);
let performance = getPerformanceReport(percentage);

//9
console.log(`Student: ${upperCaseName}`);
console.log(`Roll Number: ${rollNumber}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage}%`);
console.log(`Highest Marks: ${highestMark}`);
console.log(`Lowest Marks: ${lowestMark}`);
console.log(`Subjects Passed: ${passedSubjects}`);
console.log(`Performance: ${performance}`);