// kothao event handler add korle by default ekta parameter chole ase seta holo event.

function handleKeyboardButtonPress(event){
    const playerPressed= event.key; //player keyboard er j button press korse
    console.log('player pressed',playerPressed);

    //stop the game if press Esc
    if(playerPressed=== 'Escape'){
        gameOver();
    }


    //key player should press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();  //lowercase a convert korar karon console a sob lowercase asche tai duitai jno compare kora jay.
    console.log(playerPressed,expectedAlphabet);

    //check matched or not(plyer pressed key and expected key)
    if(playerPressed === expectedAlphabet){
        console.log('Congratulations!! You have got a point');
     const currentScore= getTextElementValueById('current-score');
     const updatedScore=currentScore + 1;
     setTextElementValueById('current-score',updatedScore);
       
       
       
       
    //   ---------------------------------------------------------------------------------------------- 
        //update the score:
        // 1.get the current score
//         const currentScoreElement=document.getElementById('current-score');
//         const currentScoreText = currentScoreElement.innerText;
//         const currentScoreValue=parseInt(currentScoreText);
//         // 2.increase the score by 1
//         const updatedScore=currentScoreValue+1;
//         // 3.show the updated score
//         currentScoreElement.innerText=updatedScore;
// ------------------------------------------------------------------------------------------------------
         // start a new round
         console.log('You have pressed correctly',expectedAlphabet);
         removeBackgroundColorById(expectedAlphabet);
        continueGame();  //to continue the game

    }

    
    else{
         console.log('Ooops!!! You lost a life.Next time better luck.');
         const currentLife=getTextElementValueById('current-life');
         const updatedLife=currentLife - 1;
         setTextElementValueById('current-life',updatedLife);

         if(updatedLife === 0){
            gameOver();
         }

         


// --------------------------------------------------------------------------------------------------

//         // update the life
//         // 1.get the current life
//         const currentLifeElement=document.getElementById('current-life');
//         const currentLifeText=currentLifeElement.innerText;
//         const currentLifeValue=parseInt(currentLifeText);


//         // 2.decrease the life by 1
//        const updatedLife= currentLifeValue-1;

//         // show the  updated life
//         currentLifeElement.innerText=updatedLife;
// ---------------------------------------------------------------------------------------------------------
    }
    

 }


function getTextElementValueById(elementId){
    const currentElement=document.getElementById(elementId);
    const currentElementText=currentElement.innerText;
    const currentElementValue=parseInt(currentElementText);
    return currentElementValue;
    
}

function setTextElementValueById(elementId, currentElementValue){
    const currentElement=document.getElementById(elementId);
    currentElement.innerText=currentElementValue;
    
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
}

//capture keyboard keypress
document.addEventListener('keyup',handleKeyboardButtonPress);




function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}




function continueGame(){
    // step-01: generate a random alphabet
 const alpha = getARandomAlphabet();
 console.log('Your have got',alpha);
 
 //set randomly generated alphabet to the screen(show it)
 const currentAlphabetElement = document.getElementById('current-alphabet');
 currentAlphabetElement.innerText=alpha;

 //set Background color
 addBackgroundColorById(alpha);
 
 }
 function play(){
    //hide everything and show only the playground
     hideElementById('home-screen');
     hideElementById('final-score');
     showElementById('play-ground');
     continueGame();

     //reset score and life
     setTextElementValueById('current-life',5);
     setTextElementValueById('current-score',0);
 }

 function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1.get the final score
    const gameEndingScore=getTextElementValueById('current-score');
    console.log(gameEndingScore);
    setTextElementValueById('game-ending-score',gameEndingScore);

    // 2. clear the last highlighted alphabet
    const currentAlphabet=getElementTextById('current-alphabet');
    //console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
  }

 function addBackgroundColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');

 }

 function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }
 
 function getARandomAlphabet(){
     //get or create an alphabet array
     const alphabetString='abcdefghijklmnopqrstuvwxyz';
     const alphabets=alphabetString.split('');
     //console.log(alphabets);
 
 
     // get a random index between 0-25
 const randomNumber= Math.random() *25;
 const index=Math.round(randomNumber);
 
 const alphabet= alphabets[index];
 console.log(index,alphabet);
 return alphabet;
 
}



