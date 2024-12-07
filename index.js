    const answers = {
        q1: 'c',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'b',
        q7: 'b',
        q8: 'b',
        q9: 'b',
        q10: 'b',
        q11: 'c',
        q12: 'c',
        q13: 'b',
        q14: 'b',
        q15: 'a',
        q16: 'b',
        q17: 'a',
        q18: 'b',
        q19: 'c',
        q20: 'd',
        q21: 'a',
    q22: 'c',
    q23: 'a',
    q24: 'b',
    q25: 'a',
    q26: 'b',
    q27: 'b',
    q28: 'b',
    q29: 'a',
    q30: 'c',
    q31: 'a',
    q32: 'a',
    q33: 'c',
    q34: 'a',
    q35: 'a',
    q36: 'a',
    q37: 'b',
    q38: 'b',
    q39: 'b',
    q40: 'a',
    q41: 'b',
    q42: 'b',
    q43: 'b',
    q44: 'a',
    q45: 'b',
    q46: 'b',
    q47: 'b',
    q48: 'b',
    q49: 'b',
    q50: 'd',
    q51: 'b',
    q52: 'b',
    q53: 'a',
    q54: 'b',
    q55: 'b',
    q56: 'a',
    q57: 'b',
    q58: 'b',
    q59: 'b',
    q60: 'b'
};
    

    function checkAnswers() {
        let totalQuestions = Object.keys(answers).length;
        let correctAnswers = 0;
        
        // Loop through answers and validate
        for (let question in answers) {
            let selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected) {
                if (selected.value === answers[question]) {
                    correctAnswers++;
                    selected.parentElement.style.color = "green";
                } else {
                    selected.parentElement.style.color = "red";
                }
            }
        }
}

document.getElementById("downloadButton").style.display = "inline-block";
   

// Calculate score
        let score = correctAnswers * 2;
        let resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";


if (score >= 10) {
    resultDiv.textContent = `You scored ${score} points. Congratulations, you passed!`;
    resultDiv.className = "feedback correct";
    document.getElementById("score").textContent = score;
    document.getElementById("certificate").style.display = "block";

    // Show the download button
    document.getElementById("downloadButton").style.display = "inline-block";

} else {
        resultDiv.textContent = `You scored ${score} points. Unfortunately, you did not pass. Please try again.`;
        resultDiv.className = "feedback incorrect";

        // Hide the certificate and download button if the user didn't pass
        document.getElementById("certificate").style.display = "none";
        document.getElementById("downloadButton").style.display = "none";
    }


function downloadCertificate() {
    window.open("https://sites.google.com/view/ling4ucertificate", "_blank");
}
