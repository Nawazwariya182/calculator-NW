let input = document.getElementById('inp');
let input1 = document.getElementById('inp1');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input1.value = string;
        } else if(e.target.innerHTML == 'C'){
            string ="";
            input.value = string;
        } else if(e.target.innerHTML =="DEL") {
            string = string.substring(0, string.lenght-1)
            input.value = string
        }else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
