function GuessNumber(){
            let guess = Math.round(Math.random()*11);
            let user = parseInt(prompt("Enter a number To guess"))
            if(guess == user){
                alert("Good Work!")
            }
            else{
                alert("Not Matched")
            }
        }