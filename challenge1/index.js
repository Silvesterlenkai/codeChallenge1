function calculateGrade(mark){
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return  'D';
    } else {
        return 'E';
    }
}

function main () {
    const input = prompt("Enter student's mark (between 0 and 100):");
    const mark =parseFloat(input);

    if (isNaN(mark) && mark >= 0 && mark <= 100){
        const grade = calculateGrade(mark);
        alert("Grade:" + grade);
    }else { 
        alert("invalid input. please enter a number between 0 and 100.");
    }
}

