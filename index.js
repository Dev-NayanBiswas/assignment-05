const history = document.querySelector('.history-container');
    document.querySelector('#history').addEventListener('click', activeHistory)
const donation = document.querySelector('.card_container');
    document.querySelector('#donate').addEventListener('click', activeDonation)




const cardOne = document.querySelector('.donation__cardOne');
cardOne.addEventListener('click',function(e){global(e,'.noakhali')})

const cardTwo = document.querySelector('.donation__cardTwo');
cardTwo.addEventListener('click',function(e){global(e,'.feni')})

const cardThree = document.querySelector('.donation__cardThree');
cardThree.addEventListener('click',function(e){global(e,'.quota')})



function global(e, name){
    const cross ="https://media.lordicon.com/icons/wired/lineal/38-error-cross-simple.json"; 
    const empty ="https://media.lordicon.com/icons/wired/lineal/2465-restriction.json";
    const recharge = "https://media.lordicon.com/icons/wired/lineal/2531-recurring-cash.json";
    const success = "https://media.lordicon.com/icons/wired/lineal/291-coin-dollar.json";

    const stringTotal = document.querySelector('.totalAmount');
    let availableTaka = parseInt(stringTotal.textContent);
    const heading = e.currentTarget.querySelector('h4 span').textContent;
    const staticBox = document.querySelector(name);
    let donateBoxTotal = parseInt(staticBox.textContent);

    console.log(donateBoxTotal)
    
    if(e.target.nodeName==='BUTTON'){
        const input = e.currentTarget.querySelector('input');
        const inputValue = input.value;
        const inputToNumber = parseInt(inputValue);
        
        if(inputValue){
            let trimData =inputValue.trim()
            
            if(inputToNumber === 0 || inputToNumber < 0 || trimData === ""){
                
                input.value = '';
                activateModal('Wrong!','Enter a valid Amount',"Invalid",empty)
                return;
            }

            let isNumber = true;

            for(let i=0; i < trimData.length; i++){
                let char = trimData[i];
                if(isNaN(char)){
                    activateModal('Invalid!','Enter a valid Amount',"Error",cross)
                    isNumber = false;
                    input.value = '';
                    return;
                }
            }


            if(isNumber && availableTaka >= inputToNumber){
                console.log(inputToNumber)
                donateBoxTotal += inputToNumber;
                staticBox.textContent = donateBoxTotal;
                let forHistory = `${inputToNumber} Taka is Donated for ${heading}`;
                updateHistory(forHistory);
                availableTaka -= inputToNumber;
                stringTotal.textContent = availableTaka;
                activateModal('Congrats!!','You have donated for Humankind',"Success",success)
                input.value = '';    
                return;
                
            }else{
                input.value = ''
                activateModal('Exceed','insufficient Balance recharge or Try another amount','Try Again',recharge)
                return;
            }
        }else{
            activateModal('Sorry!','Enter a valid Amount',"Wrong Input",empty)
            return;
        }
    }
    
}




function activateModal(heading,hint,success,icon){

    console.log(heading,hint,success,icon)
    document.getElementsByTagName('lord-icon')[0].setAttribute('src',"")
    document.getElementsByTagName('lord-icon')[0].setAttribute('src',icon)
    document.querySelector('.modalHeading').innerText=heading;
    document.querySelector('.modalHint').innerText=hint;
    document.querySelector('.success').innerText=success;
    document.querySelector('.overlay').classList.remove('hidden')
    document.querySelector('.myModal').classList.remove('hidden')
}



document.querySelector('.modalClose').addEventListener('click',closeModal)
function closeModal(){
    document.getElementsByTagName('lord-icon')[0].setAttribute('src',"")
    document.querySelector('.overlay').classList.add('hidden')
    document.querySelector('.myModal').classList.add('hidden')
}


function updateHistory(msg){
    let time = new Date();
    const history = document.querySelector('.history-container');
    const article = document.createElement('article');
    article.setAttribute('class', "record flex flex-col rounded-xl border-[1px] border-gray-200 px-10 py-5 shadow-lg");
        article.innerHTML = `
        <p class="taka text-2xl text-gray-700">${msg}</p>
        <p class="time text-xl font-light italic">${time}</p>
        `
        history.append(article)
}





function activeHistory(){
    const history = document.querySelector('.history-container');

    if(history.childElementCount > 1){
        document.querySelector('.noDonation').classList.add('hidden')
    }else{
        document.querySelector('.noDonation').classList.remove('hidden')
    }
    donation.classList.add('hidden');
    history.classList.remove('hidden')

}

function activeDonation(){
    history.classList.add('hidden');
    donation.classList.remove('hidden')
}