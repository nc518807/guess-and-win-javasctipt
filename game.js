const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let newWords ="";
let randomWords="";
let play = false;
let sWords = ['python','java','laravel','android','c++','swift','angular','sql','reactjs'];

 const createNewwords= ()=>{
     let ranNum = Math.floor(Math.random() * sWords.length );
 
     //console.log(ranNum);
     let newTempWords = sWords[ranNum];
     console.log(newTempWords.split(""));
     return newTempWords;
 }
 const Scramblewords = ()=>{

 }

btn.addEventListener('click',function(){
    if(!play){
        play= true;
        btn.innerHTML= "Guess";
        guess.classList.toggle('hidden');
      newWords =  createNewwords();
      randomWords = Scramblewords(newWords);
    }

})