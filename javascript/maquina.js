const welcomeMessages = [
    "Bienvenido a",    // Español
    "Welcome to",      // Inglés
    "में आपका स्वागत है",  //hindu 
    "Bienvenue à",     // Francés
    "Benvenuto a",     // Italiano
    "欢迎来到",         // Chino
    "ようこそ",           // Japonés
    "Bem-vindo à"     // Portugués
];

let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 100;     // Velocidad de escritura
const erasingSpeed = 50;     // Velocidad de borrado
const delayBetweenMessages = 2000; // Retraso entre mensajes completos

const titulo1 = document.getElementById('titulo1');

function typeMessage() {
    // Mostrar cada carácter del mensaje actual
    if (charIndex < welcomeMessages[messageIndex].length) {
        titulo1.textContent += welcomeMessages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
    } else {
        // Esperar un tiempo antes de borrar
        setTimeout(eraseMessage, delayBetweenMessages);
    }
}

function eraseMessage() {
    // Borrar el mensaje carácter por carácter
    if (charIndex > 0) {
        titulo1.textContent = welcomeMessages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseMessage, erasingSpeed);
    } else {
        // Pasar al siguiente mensaje y comenzar a escribirlo
        messageIndex = (messageIndex + 1) % welcomeMessages.length;
        setTimeout(typeMessage, typingSpeed);
    }
}

// Iniciar la animación de máquina de escribir
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeMessage, delayBetweenMessages);
});