const translations = {
    es: {
        item1: "Inicio",
        item2: "Nuestra Historia",
        item3: "Catalogo",
        item4: "Contacto",
        /*titulo1: "Bienvenido a",*/
        titulo2: "¡MPJ International!",
        descrip1: "Somos los líder en distribución mayorista en la Zona Libre de Colón, atendiendo al Caribe, Centroamérica y Latinoamérica.",
        mas: "Saber Más",
        titulo3: "Nuestra Empresa",
        descrip2: "Con más de 40 años de experiencia en el sector, MPJ International S.A. se consagra como líder en distribución mayorista en la Zona Libre de Colón, atendiendo al Caribe, Centroamérica y Latinoamérica. Como un almacén departamental de primer nivel, abarcando una amplia gama de productos para satisfacer las necesidades de nuestros clientes.",
        descrip3: "Nuestra sólida trayectoria refleja un compromiso inquebrantable con la calidad y la excelencia en el servicio, consolidando relaciones duraderas con nuestros socios comerciales en la región. En MPJ International S.A., entendemos la importancia de la adaptabilidad y la innovación en el mercado mayorista, por lo que constantemente nos esforzamos por actualizar y ampliar nuestro portafolio de productos para incluir las últimas tendencias y demandas del mercado.",
        titulo4: "Nuestras Marcas",
        descrip4: "Nos especializamos en la oferta al por mayor de una diversidad de marcas reconocidas, ofreciendo los mejores productos para nuestros clientes.",
        titulo5: "Visita Nuestro Catálogo!",
        descrip5: "Visita nuestro catálogo ahora y encuentra productos que inspirarán tu estilo. ¡Haz clic y comienza a explorar!",
        ver: "Ver Más!",
        redes: "Redes",
        ubi: "Ubicación",
        tel: "Teléfonos"
    },
    en: {
        item1: "Home",
        item2: "Our History",
        item3: "Catalog",
        item4: "Contact",
        /*titulo1: "Welcome to",*/
        titulo2: "¡MPJ International!",
        descrip1: "We are the leader in wholesale distribution in the Colon Free Zone, serving the Caribbean, Central America and Latin America.",
        mas: "More!",
        titulo3: "Our Company",
        descrip2: "With more than 40 years of experience in the sector, MPJ International S.A. is established as a leader in wholesale distribution in the Colon Free Zone, serving the Caribbean, Central America and Latin America. As a first-class department store, covering a wide range of products to meet the needs of our customers.",
        descrip3: "Our solid track record reflects an unwavering commitment to quality and service excellence, consolidating long-lasting relationships with our business partners in the region. At MPJ International S.A., we understand the importance of adaptability and innovation in the wholesale market, which is why we constantly strive to update and expand our product portfolio to include the latest market trends and demands.",
        titulo4: "Our Brands",
        descrip4: "We specialize in the wholesale supply of a variety of recognized brands, offering the best products for our customers.",
        titulo5: "Visit Our Catalog!",
        descrip5: "Visit our catalog now and find products that inspire your style. Click and start exploring!",
        ver: "More!",
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
  /* document.getElementById('titulo1').innerText = content.titulo1;*/
    document.getElementById('titulo2').innerText = content.titulo2;
    document.getElementById('descrip1').innerText = content.descrip1;
    document.getElementById('mas').innerText = content.mas;
    document.getElementById('titulo3').innerText = content.titulo3;
    document.getElementById('descrip2').innerText = content.descrip2;
    document.getElementById('descrip3').innerText = content.descrip3;
    document.getElementById('titulo4').innerText = content.titulo4;
    document.getElementById('descrip4').innerText = content.descrip4;
    document.getElementById('titulo5').innerText = content.titulo5;
    document.getElementById('descrip5').innerText = content.descrip5;
    document.getElementById('ver').innerText = content.ver;
    document.getElementById('redes').innerText = content.redes;
    document.getElementById('ubi').innerText = content.ubi;
    document.getElementById('tel').innerText = content.tel;


    // Cambia la bandera y el texto del botón principal según el idioma
    const languageButton = document.querySelector('.language-button');
    if (lang === 'es') {
        languageButton.innerHTML = '<img src="./img/es.png" alt="Español" class="flag-icon"> Español';
    } else {
        languageButton.innerHTML = '<img src="./img/en.png" alt="English" class="flag-icon"> English';
    }
}

// Cargar el idioma almacenado en la última visita o usar español por defecto
const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
loadContent(savedLanguage);

function toggleMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}
