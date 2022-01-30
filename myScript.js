console.log("hello");
var num=document.querySelector('#count');

var resetCount=document.querySelector('.reset');

var decresebtn=document.querySelector('.decrement');

var increasebtn=document.querySelector('.increment');
var i=0;

function addCount(){
    i=i+1;;
    num.textContent=i;

}

function subCount(){
    i=i-1;;
    num.textContent=i;

}


function reset(){
   num.textContent='0';
}

resetCount.addEventListener('click',reset);

decresebtn.addEventListener('click',subCount);
   


increasebtn.addEventListener('click',addCount);
 




