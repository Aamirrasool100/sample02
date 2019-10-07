
//                     FUNCTION CONSTRUCTOR


/*          
var Person = function(name,dob,profession){
    this.name = name;
    this.dob = dob;
    this.profession = profession;
}
Person.prototype.calcAge = function(){
     console.log(2019 - this.dob);
}
var person1 = new Person('amir',1998,'engineer')
var person2 = new Person('asif',1999,'doctor')
var person3 = new Person('shaheen',1995,'driver')
person1.calcAge()
person2.calcAge()*/



//                     PASSING FUNCTIONS AS ARGUMENTS
/*
var years = [1990,1992,1997,1998,2001,2005];
function arrayCalc(arr,fn){
    let result = [];
    for(let i=0;i< arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
function calcAges(e){
    return 2019 - e;
}
function fullAge(e){
    if(e > 18){
        return 'true'
    }
    else{
        return 'false'
    }
}
function heartRate(e){
    if(e > 18 && e < 81){
        return 206.9 - (0.67 * e);
    }else{return 'sorry'}
    
}
var ages = arrayCalc(years,calcAges);
var fullage = arrayCalc(ages,fullAge);
var heartrate = arrayCalc(ages,heartRate);
console.log(ages)
console.log(fullage)
console.log(heartrate)
*/

//                       FUNCTIONS RETURNING FUNCTIONS

/*
function interview(job){
    if(job === 'teacher'){
        return function(name){
            console.log(`what do you teach ${name}??`)
        }
    }else if(job === 'designer'){
        return function(name){
            console.log(`${name} what is ux design??`)
        }
    }else{
        return function(name){
            console.log(`${name} what do you do`)
        }
    }
}
interview('teacher')('john'); */

//     IIFE(immediately invoked function expressions)

/* (function add(a,b){
    console.log(a+b);
})(2,3) */


  //                   BIND CALL AND APPLY METHODS

/*  var person = {
    name:'amir',
    age:21,
    profession:'engineer',
    presentation: function(style,daytime){
         if(style === 'formal'){
        console.log(`good ${daytime} ladies and gentleman,i'm ${this.name} and my age is ${this.age}.By profession i'm a ${this.profession}`);
    }
    else if(style ===  'informal'){
         console.log(`hii there, ladies and gentleman,i'm ${this.name} and my age is ${this.age}.By profession i'm a ${this.profession}.have a nice ${daytime}.`);
    }
    }
}
person2 = {
    name:'asif',
    age:22,
    profession:'doctor'
}
person.presentation.call(person2,'formal','evening');  */

//         challenge

/*
var Question = function(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(let i=0;i<this.answers.length;i++){
       console.log(`${i}: ${this.answers[i]}`) 
    }

}
Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
        console.log('correct answer')
    }else{
        console.log('wrongg!!!.....try again')
    }
}
var q1 = new Question('is js cool?',['yes','no'],0);
var q2 = new Question('js is?',['hard','easy','fun','tedius'],3);
var q3 = new Question('what is my name?',['asif','amir','shahid'],1);

var arrayquestion = [q1,q2,q3];
var randomQuestion = Math.floor(Math.random() * arrayquestion.length);
arrayquestion[randomQuestion].displayQuestion();
var displayAnswer = parseInt(prompt(`enter the correct answer`));

arrayquestion[randomQuestion].checkAnswer(displayAnswer) */

//       ES6(ECMASCRIPT-6)









































