const spanColor = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    spanColor.textContent = color;
    document.body.style.backgroundColor = color;
})