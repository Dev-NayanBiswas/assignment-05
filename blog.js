document.querySelector('.question1').addEventListener('click',()=>removeHide('.one'));
document.querySelector('.question2').addEventListener('click',()=>removeHide('.two'));
document.querySelector('.question3').addEventListener('click',()=>removeHide('.three'));
document.querySelector('.question4').addEventListener('click',()=>removeHide('.four'));



function removeHide(name){
    let answerSheet = document.querySelector('.answer_sheet').getElementsByTagName('article')
    let articleArray = [...answerSheet]
    for(let elem of articleArray){
        elem.classList.add('hide')
        elem.classList.remove('view')
    }
    document.querySelector(name).classList.remove('hide')
    document.querySelector(name).classList.add('view')
    
}
