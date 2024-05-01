const siButton = document.querySelector('.si');
const noButton = document.querySelector('.no');
const mensajeFinal = document.getElementById('mensaje-final');

let siCount = 0;
let siSize = 100; // Tamaño inicial del cuadrado "Sí" en porcentaje (100% = tamaño original)
let noSize = 100; // Tamaño inicial del cuadrado "No" en porcentaje (100% = tamaño original)

siButton.addEventListener('click', () => {
    siCount++;
    siButton.style.fontSize = `${siCount * 2}px`;

    if (siCount >= 3) {
        mensajeFinal.style.display = 'block';
        siButton.disabled = true;
        noButton.disabled = true;
    }
});

noButton.addEventListener('click', () => {
    siSize += 15;
    siButton.style.width = `${siSize}%`;
    siButton.style.height = `${siSize}%`;

    noSize -= 15;
    if (noSize <= 0) {
        noSize = 0;
    }
    noButton.style.width = `${noSize}%`;
    noButton.style.height = `${noSize}%`;

    if (noSize >= 100) {
        siButton.disabled = false;
        noButton.disabled = true;
    }
});
