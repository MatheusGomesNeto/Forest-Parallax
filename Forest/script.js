let background1 = document.getElementById('background1');
let background2 = document.getElementById('background2');
let layer2 = document.getElementById('layer2');
let title = document.getElementById('title');
let btn = document.getElementById('btn');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    background1.style.top = value * 0 + 'px';
    background2.style.top = value * 0.9 + 'px';
    layer2.style.top = value * 0.3 + 'px';
    layer3.style.top = value * 0.1 + 'px';
    title.style.marginRight = value * 4 + 'px';
    btn.style.marginTop = value * 1 + 'px';
})