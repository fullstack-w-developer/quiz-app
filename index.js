const quizData = [
    {
        question:"محبوب ترین زبان برنامه نویسی در سال 2020 کدام است ؟",
            a:"c++",
            b:"javascript",
            c:"payton",
            d:"java",
            correct:"c"
    },
    {
        question:"اولین نمونه جاوا اسکریپت در کدام سال ایجاد شد ؟",
            a:"1980",
            b:"1990",
            c:"2000",
            d:"2010",
            correct:"b"
    },
    {
        question:"معروف ترین کتابخانه جاوا اسکریپت کدام است ؟",
            a:"React.js",
            b:"D3.js",
            c:"Juqery",
            d:"Glimmer",
            correct:"c"
    },
    {
        question:"اکما اسکریپت شش در کدام سال ارائه شد ؟",
            a:"2013",
            b:"2014",
            c:"2015",
            d:"2016",
            correct:"c"
    },
    {
        question:"ری اکت کدام شرکت معتبر جهان ارائه داد ؟",
            a:"فیسبوک",
            b:"گوگل",
            c:"مایکروسافت",
            d:"رولکس",
            correct:"a"
    },
    

];
const container = document.getElementById("container")
const question = document.getElementById("question")
const a_answer = document.getElementById("a_answer")
const b_answer = document.getElementById("b_answer")
const c_answer = document.getElementById("c_answer")
const d_answer = document.getElementById("d_answer")
const answers = document.querySelectorAll(".answer")
const btn1 = document.getElementById("btn1")
let index = 0
let x = 0

function loadQuiz(){
    deleteSelect()
    let quiz_question = quizData[index]
    question.innerHTML = quiz_question.question
    a_answer.innerHTML = quiz_question.a
    b_answer.innerHTML = quiz_question.b
    c_answer.innerHTML = quiz_question.c
    d_answer.innerHTML = quiz_question.d
}
loadQuiz()
btn1.onclick = ()=>{
    // alert("mahdi")
    const answer = selectHaveto()
    if(answer){
        if(answer === quizData[index].correct){
            x++
        }
            index++
        if(index < quizData.length){
            loadQuiz()
        }else{
            container.innerHTML = "<h1>" + x + " / "+quizData.length + "<br/><button id='btn2'onclick=(location.reload())>reload</button></h1>"
        }
    }
}

function selectHaveto(){
    let answer = undefined
    answers.forEach((aw)=>{
        if(aw.checked){
            answer = aw.id
        }
    })
    return answer
}

function deleteSelect(){
    answers.forEach((anw)=>{
        if(anw.checked){
            anw.checked = false
        }

    })
}
