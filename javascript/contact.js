const translations = {
    es: {
        item1: "Inicio",
        item2: "Nuetra Historia",
        item3: "Catalogo",
        item4: "Contacto",

        tit1:"Ponte en Contacto con Nosotros",
        tit2:"Estamos aquí para ayudarte",
        d1:"Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible para resolver tus dudas y proporcionarte toda la asistencia que necesites.",
        tit3:"Dirección:",
        d2:"Calle 14 Ave. Rooselt, Zona Libre de Colón, Rep. de Panamá",
        tit4:"Teléfonos:",
        tit5:"Correo Electrónico:",
        
        redes: "Redes",
        ubi: "Ubicación",
        tel: "Teléfonos"
    },
    en: {
        item1: "Home",
        item2: "Our History",
        item3: "Catalog",
        item4: "Contact",

        tit1:"Contact Us",
        tit2:"We are here to help you",
        d1:"If you have any questions or need more information, do not hesitate to contact us. Our team is available to answer your questions and provide you with all the assistance you need.",
        tit3:"Address:",
        d2:"14th Street, Roosevelt Ave., Colon Free Zone, Republic of Panama",
        tit4:"Phones:",
        tit5:"Email:",
       
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
  
    document.getElementById('tit1').innerText = content.tit1;
    document.getElementById('tit2').innerText = content.tit2;
    document.getElementById('d1').innerText = content.d1;
    document.getElementById('tit3').innerText = content.tit3;
    document.getElementById('d2').innerText = content.d2;
    document.getElementById('tit4').innerText = content.tit4; 
    document.getElementById('tit5').innerText = content.tit5;

    document.getElementById('redes').innerText = content.redes;
    document.getElementById('ubi').innerText = content.ubi;
    document.getElementById('tel').innerText = content.tel;

    // Cambia la bandera y el texto del botón principal según el idioma
    const languageButton = document.querySelector('.language-button');
    if (languageButton) {
        if (lang === 'es') {
            languageButton.innerHTML = '<img src="../img/es.png" alt="Español" class="flag-icon"> Español';
        } else {
            languageButton.innerHTML = '<img src="../img/en.png" alt="English" class="flag-icon"> English';
        }
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

function toggleMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}
