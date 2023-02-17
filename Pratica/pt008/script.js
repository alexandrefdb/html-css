let score = 98

function getScore(score){
    let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if(scoreA){
    scoreFinal = "A"
} else if(scoreB){
    scoreFinal = "B"
} else if (scoreC){
    scoreFinal = "C"
} else if(scoreD){
    scoreFinal = "D"
} else if(scoreF){
    scoreFinal = "F"
} else {
    scoreFinal = "Nota Inválida"
}

return(scoreFinal)
}

console.log(getScore(48),
getScore(13),
getScore(99),
getScore(28),
getScore(38),
getScore(72),
getScore(79),
getScore(68),
getScore(16),
getScore(10),
getScore(110),
getScore(1001),
getScore(90),
getScore(58),
getScore(64),
getScore(70),
getScore(-25),
getScore(5),
getScore(0),
getScore(90),
)