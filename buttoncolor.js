const makeRandColor=()=>{
    let red=Math.floor(Math.random() * (255));
   let green=Math.floor(Math.random() * (255)) ;
   let blue=Math.floor(Math.random() * (255));
   return `rgb(${red},${green},${blue})`;
}

const buttons=document.querySelectorAll('button');


for(let button of buttons)
{
    button.addEventListener('click',colorize)
}
const head=document.querySelectorAll('h1')
for(let h of head)
{
    h.addEventListener('click',colorize)
}
function colorize()
{
    this.style.backgroundColor=makeRandColor();
   this.style.color=makeRandColor();
}
