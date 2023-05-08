export let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    particles: Particle[] = [],
    properties = {
        bgColor             : 'rgba(17, 17, 19, 1)',
        particleColor       : 'rgba(255, 40, 40, 1)',
        particleRadius      : 3,
        particleCount       : Math.round(0.00004509525 * window.innerWidth * window.innerHeight),
        particleMaxVelocity : 0.25,
        lineLength          : 150,
        particleLife        : 20,
    };

window.onresize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    properties.particleCount = Math.round(0.00004509525 * window.innerWidth * window.innerHeight);
};

class Particle {
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    life: number;

    constructor() {
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
        this.life = Math.random() * properties.particleLife * 60;
    };

    position() {
        const isOutOfXScope = (this.x + this.velocityX > w && this.velocityX > 0) || (this.x + this.velocityX < 0 && this.velocityX < 0);
        const isOutOfYScope = (this.y + this.velocityY > h && this.velocityY > 0) || (this.y + this.velocityY < 0 && this.velocityY < 0);
        if (isOutOfXScope)
            this.velocityX *= -1;
        if (isOutOfYScope)
            this.velocityY *= -1;
        this.x += this.velocityX;
        this.y += this.velocityY;
    };

    reDraw() {
        if (ctx) {
            ctx?.beginPath();
            ctx?.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
            ctx?.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx?.fill();
        }
    };

    reCalculateLife() {
        if(this.life < 1){
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }
        this.life--;
    };
}

const reDrawBackground = () => {
    if (ctx) {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }
};

const drawLines = () => {
    let x1, y1, x2, y2, length, opacity;
    for(let i in particles){
        for(let j in particles){
            x1 = particles[i].x;
            y1 = particles[i].y;
            x2 = particles[j].x;
            y2 = particles[j].y;
            length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            if(length < properties.lineLength && ctx){
                opacity = 1-length/properties.lineLength;
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = 'rgba(255, 40, 40, '+opacity+')';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
}

const reDrawParticles = () => {
    for(let i in particles){
        particles[i].reCalculateLife();
        particles[i].position();
        particles[i].reDraw();
    }
}

let isLoopActive = false;
let loopAnimationFrame: number;

const loop = () => {
    if (!isLoopActive && !!loopAnimationFrame)
        cancelAnimationFrame(loopAnimationFrame);
    else {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        loopAnimationFrame = requestAnimationFrame(loop);
    }
}

export const initCanvas = (active: boolean) => {
    if (active) {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle());
        }
        isLoopActive = true;
        loop();
    } else {
        isLoopActive = false;
        particles.length = 0;
    }
}