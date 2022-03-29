const hexColor = [0,1,2,3,4,5,6,7,8,9,'A',"B",'C',"D",'E',"F"];
const spanColor = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    hexCode='#';
    for(let i=0;i<6;i++){
        hexCode+=hexColor[getRandomNumber()];
    }
    document.body.style.background = hexCode;
    spanColor.textContent = hexCode;
})
function getRandomNumber(){
    return Math.floor(Math.random()*hexColor.length)
}
