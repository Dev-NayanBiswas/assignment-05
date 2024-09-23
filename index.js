const stringTotal = document.querySelector('.totalAmount').textContent;
const availableTaka = parseInt(stringTotal);
const cardOne = document.querySelector('.dontaion__cardOne');



cardOne.addEventListener('click',function(e){
    const heading = e.currentTarget.querySelector('h4');
    const noakhali = parseInt(document.querySelector('.noakhali').textContent)
    const input = e.currentTarget.querySelector('input');
    
    e.currentTarget.querySelector('button').addEventListener('click',()=>{
        const value = input.value;

        if(value){
            if(parseInt(value)< 0 || parseInt(value)=== 0){
                input.value = " "
                console.log('You can not donate less then 0')
                return;
            }else{
                for(let i = 0; i < value.length; i++){
                    let everyCharacter = value[i];
                    
                    isNaN(everyCharacter) && console.log("Invalid Input");
                    
                    break;
                    }
                console.log("good to GO")
                }
            }
            
        else{
            alert('Enter an Amount')
        }
    })
    
})







const history = document.querySelector('.history-container');
    document.querySelector('#history').addEventListener('click', activeHistory)
const donation = document.querySelector('.card_container');
document.querySelector('#donate').addEventListener('click', activeDonation)


function timeStamp(){
    return new Date();
}

function activeHistory(){
    donation.classList.add('hidden');
    history.classList.remove('hidden')
}

function activeDonation(){
    history.classList.add('hidden');
    donation.classList.remove('hidden')
}