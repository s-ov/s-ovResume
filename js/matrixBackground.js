const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('matrix').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charactersArray = characters.split("");
    
const fontSize = 12;
const columns = canvas.width / fontSize;
    
const drops = [];
    
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
}
    
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0F0"; // Matrix green color
    ctx.font = `${fontSize}px arial`;
    
    for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
    
        drops[i]++;
    }
}
    
function update() {
    draw();
    requestAnimationFrame(update);
}
    
update();