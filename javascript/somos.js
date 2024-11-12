const translations = {
    es: {
        item1: "Inicio",
        item2: "Nuetra Historia",
        item3: "Catalogo",
        item4: "Contacto",
        titulo:"Nuestra Historia",
        

        redes: "Redes",
        ubi: "Ubicación",
        tel: "Teléfonos"
    },
    en: {
        item1: "Home",
        item2: "Our History",
        item3: "Catalog",
        item4: "Contact",
        titulo:"Our History",


        redes: "Social networks",
        ubi: "Location",
        tel: "Phones"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    loadContent(lang);
}

function loadContent(lang) {
    const content = translations[lang];
    document.getElementById('item1').innerText = content.item1;
    document.getElementById('item2').innerText = content.item2;
    document.getElementById('item3').innerText = content.item3;
    document.getElementById('item4').innerText = content.item4;
    document.getElementById('titulo').innerText = content.titulo;



    document.getElementById('redes').innerText = content.redes;
    document.getElementById('ubi').innerText = content.ubi;
    document.getElementById('tel').innerText = content.tel;


    // Cambia la bandera y el texto del botón principal según el idioma
    const languageButton = document.querySelector('.language-button');
    if (lang === 'es') {
        languageButton.innerHTML = '<img src="../img/es.png" alt="Español" class="flag-icon"> Español';
    } else {
        languageButton.innerHTML = '<img src="../img/en.png" alt="English" class="flag-icon"> English';
    }
}

// Cargar el idioma almacenado en la última visita o usar español por defecto
const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
loadContent(savedLanguage);
function inView() {
    const milestones = document.querySelectorAll('.milestone');
    const triggerBottom = window.innerHeight / 1.2;

    milestones.forEach(milestone => {
        const boxTop = milestone.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            milestone.classList.add('active');
        } else {
            milestone.classList.remove('active');
        }
    });
}
