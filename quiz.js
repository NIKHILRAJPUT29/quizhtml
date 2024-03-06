const questions=[
    {
        'que':' HTML stands for __________',
        'a':'HyperText Markup Language',
        'b':'HyperText Machine Language',
        'c':'HyperText Marking Language',
        'd':'HighText Marking Language',
        'correct':'a'
    },
    {
        'que':' What is the correct syntax of doctype in HTML5?',
        'a':'</doctype html>',
        'b':'<doctype html>',
        'c':'<doctype html!>',
        'd':'<!doctype html>',
        'correct':'d'
    },
    {
        'que':'  Which of the following is used to read an HTML page and render it?',
        'a':'Web server',
        'b':'Web network',
        'c':'Web browser',
        'd':'Web matrix',
        'correct':'c'
    },
    {
        'que':'  What is DOM in HTML?',
        'a':'Language dependent application programming',
        'b':'Hierarchy of objects in ASP.NET',
        'c':'Application programming interface',
        'd':'Convention for representing and interacting with objects in html documents',
        'correct':'d'
    },
    {
        'que':'  How do we write comments in HTML?',
        'a':'</…….>',
        'b':' <!……>',
        'c':' </……/>',
        'd':'<…….!>',
        'correct':'b'
    }

    ]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;

const quebox=document.querySelector('.quebox');
const optioninput=document.querySelectorAll('.options');
const loadques=()=>{
    if(index===total){
        return end();
    }
    reset();
    const data=questions[index]

    quebox.innerText=`${index+1 })${data.que}`
    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}
const reset=()=>{
    optioninput.forEach((inp)=>{
        inp.checked=false;
    })
}
loadques();
const submitquiz=()=>{
    const data=questions[index];
    const ans=getanswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadques();
}
const getanswer=()=>{
    let answer;
    optioninput.forEach((input)=>{
        if(input.checked){
            answer= input.value;
        }
    })
    return answer;
}
const end=()=>{
    document.getElementById("box").innerHTML=
    `<h3> thankyou for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>`
}