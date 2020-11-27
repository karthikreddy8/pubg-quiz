var readlinesync= require("readline-sync");
 score= 0; 
const chalk = require('chalk');
var username =readlinesync.question(chalk.magentaBright("what is your name?  "))

 var username1 =readlinesync.question(chalk.green("wellcome "+ username + " well do you know the pubg mobile game!.and this quiz is based on the game it self let me know your\n game knowldge to START the game press 'yes' " ))

 //function 
 function play(question,answer, answer2){   
   var useranswer = readlinesync.question(question);   
   if(useranswer===answer){    
      console.log(chalk.blue ("your right"));     score=score+10; 
        }   else if(useranswer===answer2){ 
            console.log(chalk.blue ("your right"));     score=score + 10;   
              } else{    
                 console.log( chalk.blue (" your worng! the right answer is  ") + answer,answer2);     score=score-5  
                  } }   
                  //calling function
                   play("1. what japanese film is the game based on?\n A-player Unkown\n B-Godzilla\n C-Battle Royale\n","Battle Royale","C"); 
                   play("2.When Was The Game First Released?\nA-june 20,2016\nB-December 20 2017\nC-December 20 2016 "," December 20 2017 " ,"B") 
                   play("3.What kind of genre is pubg?\nA-Adventure\nB-Combat\nC-Battle royale ","Battle royale" , "C") 
                   play("4.how many maps are ther in a game? \nA-2\nB-3\nC-4 ","4" , "C") 
                    console.log(chalk.yellowBright("score si " + score))