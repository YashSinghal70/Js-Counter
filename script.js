let c1=0;
let Interval1=setInterval(counter1,4);

function counter1(){
if(c1 < 500)
{
    console.log("Run");
    document.querySelector(".count-num1").innerHTML=++c1;
}
else{
    clearInterval(Interval1);
}
}

// 2
let c2=0;
let Interval2=setInterval(counter2,13);

function counter2(){
if(c2 < 150)
{
    console.log("Run");
    document.querySelector(".count-num2").innerHTML=++c2;
}
else{
    clearInterval(Interval2);
}
}

// 3

let c3=0;
let Interval3=setInterval(counter3,80);

function counter3(){
if(c3 < 25)
{
    console.log("Run");
    document.querySelector(".count-num3").innerHTML=++c3;
}
else{
    clearInterval(Interval3);
}
}

// 3

let c4=0;
let Interval4=setInterval(counter4,5);

function counter4(){
if(c4 < 400)
{
    console.log("Run");
    document.querySelector(".count-num4").innerHTML=++c4;
}
else{
    clearInterval(Interval4);
}
}
