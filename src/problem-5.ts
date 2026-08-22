interface QuizSummary  {
    total:number
    average:number
}
const getQuizSummary = (scores:number[]):QuizSummary=>{
    const total = scores.reduce((total, score)=> total + score, 0)

    const average = scores.length === 0 ? 0 : total / scores.length

    return {
        total ,
        average
    };
}
console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5, 5]))
console.log(getQuizSummary([]))