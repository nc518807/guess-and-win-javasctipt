const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let newWords = "";
let randomWords = "";
let play = false;
let sWords = ['python', 'java', 'laravel', 'android', 'c++', 'swift', 'angular', 'sql', 'reactjs'];

const createNewwords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);

    //console.log(ranNum);
    let newTempWords = sWords[ranNum];
    //console.log(newTempWords.split(""));
    return newTempWords;
}
const Scramblewords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        //console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        //.log(j);
        arr[i] = arr[j];
        arr[j] = temp;


    }
    return arr;

}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewwords();
        randomWords = Scramblewords(newWords.split("")).join("");
        // console.log(randomWords.join());
        msg.innerHTML = ` guess th value budddy:${randomWords}`;
    }
    else {
        let tempWords = guess.value;
        if (tempWords === newWords) {
            //console.log('correct');
            play= false;
            
            msg.innerHTML=`great!! you are correct ${newWords}`;
           btn.innerHTML= "start Again";
           guess.classList.toggle('hidden');
           guess.value = "";
        } else {
            
            msg.innerHTML= `oh no!! better luck ${randomWords}`;
            //console.log('incorrect');
        }
    }

})