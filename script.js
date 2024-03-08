const canvas = document.getElementById('rosaCanvas');
const ctx = canvas.getContext('2d');

const totalFrames = 60;
let currentFrame = 0;

function dibujarRosa() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configurar colores y estilo
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    // Dibujar tallo gradualmente
    const progress = currentFrame / totalFrames;
    const talloLength = 200 * progress;

    ctx.beginPath();
    ctx.moveTo(195, 65);
    ctx.lineTo(195, 60 + talloLength);
    ctx.stroke();

    // Dibujar pétalos gradualmente
    const petalLength = 20 * progress;

    for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.translate(195, 65);
        ctx.rotate((Math.PI / 3) * i);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-5, -petalLength, -20, -petalLength * 2);
        ctx.quadraticCurveTo(0, -petalLength * 4, 20, -petalLength * 2);
        ctx.quadraticCurveTo(5, -petalLength, 0, 0);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    currentFrame++;

    if (currentFrame >= totalFrames) {
        // Restablecer el fotograma actual cuando alcanza el total de fotogramas
        currentFrame = 0;
    }
}

// Establecer intervalo para ejecutar la animación
const intervalId = setInterval(dibujarRosa, 100); // 100 milisegundos (ajusta según tu preferencia)

// Puedes detener el intervalo después de cierto tiempo (por ejemplo, después de 5 segundos)
setTimeout(() => {
    clearInterval(intervalId);
}, 1000000);  // 5000 milisegundos (ajusta según tu preferencia)
