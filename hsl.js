const spanColor = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    let hue = Math.floor(Math.random()*360)
    let saturation = Math.floor(Math.random()*100)
    let lightness = Math.floor(Math.random()*100)
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    spanColor.textContent = color;
    document.body.style.backgroundColor = color;
})