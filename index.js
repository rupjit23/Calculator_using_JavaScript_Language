let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let value=e.target.innerHTML;
        if(value == '='){
            try{
                string=eval(string);
            }catch{
                string="Error";
            }
            input.value= string;
        }else if(value === "AC")
        {
            string="";
        }else if(value === "DE")
        {
            string=string.slice(0,-1);
            input.value=string;
        }else{
            string=string+value;
            input.value=string;
        }
    });
});