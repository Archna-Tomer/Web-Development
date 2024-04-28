let btns=document.querySelectorAll('.boxes');
let string="";
let input=document.querySelector('input');

Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string; 
        }
        else if(e.target.innerHTML=='Del'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string=string+e.target.innerHTML;
        input.value=string; 
        }        
    }) 
})
document.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){      //13 IS THE KEYCODE OF ENTER BUTTON
        string=eval(string);
        input.value=string;

    }
})
//RESPONSE CODE OF ANS BUTTON TO GENERATE FINAL ANSWER
let ans=document.querySelector('button');
ans.addEventListener('click',()=>{
    string=eval(string);
    input.value=string;
})

//RESPONSE CODE OF ALL CLEAR BUTTON
let clr=document.querySelector('#clr');
clr.addEventListener('click',()=>{
    string="";
    input.value=string;
});
