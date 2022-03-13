const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let sWords = ['python','java','laravel','android','c++','swift','angular','sql','reactjs'];

 const createNewwords= ()=>{
     
 }
btn.addEventListener('click',function(){
    if(!play){
        play= true;
        btn.innerHTML= "Guess";
        guess.classList.toggle('hidden');
    }

})