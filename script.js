const snake = document.querySelector('.snake');

let x = 50; 
let y = 50; 
let speed = 0.05; 
let targetX = x; 
let targetY = y;
isControlArea = false;

function moveSnake() {
   if(isControlArea) {
        x += (targetX - x) * speed;
        y += (targetY - y) * speed;

        snake.style.left = x + '%';
        snake.style.top = y + '%';
   }
}

function handleMouseMove(e) {
    const container = document.querySelector('.snake-container');
    const containerRect = container.getBoundingClientRect();

    targetX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    targetY = ((e.clientY - containerRect.top) / containerRect.height) * 100;
}

function handleTouchMove(e) {
    const container = document.querySelector('.snake-container');
    const containerRect = container.getBoundingClientRect();

    const touch = e.touches[0];
    targetX = ((touch.clientX - containerRect.left) / containerRect.width) * 100;
    targetY = ((touch.clientY - containerRect.top) / containerRect.height) * 100;
}
snake.addEventListener('mouseenter', () => {
    isControlArea = true;
});

snake.addEventListener('mouseleave', () => {
    isControlArea = false;
})

setInterval(moveSnake, 20);

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchmove', handleTouchMove);
