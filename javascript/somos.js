const translations = {
    es: {
        item1: "Inicio",
        item2: "Nuetra Historia",
        item3: "Catalogo",
        item4: "Contacto",
        titulo: "Nuestra Historia",
        t1: "Primeros Comienzos en la Zona Franca de Curacao",
        p1: "La historia de MPJ International se remonta a 1982, cuando abrieron sus puertas en la Zona Franca de Curazao. En ese entonces, eran una modesta empresa dedicada al comercio internacional. Pero pronto, sus ambiciones se expandirían más allá de esos modestos inicios.",
        t2: "La Curacao: El Buque Insignia",
        p2: "En 1989, MPJ dio un giro audaz y se aventuró en el mundo del comercio minorista, abriendo su primera tienda departamental en el corazón de Curazao. La Curacao, como se llamó, fue recibida con los brazos abiertos por la comunidad local. Su éxito inmediato se convirtió en el trampolín que la compañía necesitaba para expandirse por toda la región.",
        t3: "Explorando Nuevos Caminos",
        p3: "Siguiendo el éxito de La Curacao, MPJ abrió tiendas en Aruba y Bonaire, convirtiéndose rápidamente en marcas insignia en cada una de esas islas. Su estrategia de expansión regional les permitió aprovechar el floreciente mercado del Caribe.",
        t4: "Incursionando en Suministros Eléctricos",
        p4: "Pero MPJ no se conformó con ser simplemente un gigante minorista. En 2006, dieron un nuevo giro a su negocio al incursionar en el campo de los suministros eléctricos y los materiales de construcción, abriendo MTech Electrical Supply.",
        t5: "El Declive de Curacao y el Ascenso de Panamá",
        p5: "Sin embargo, en 2012 las cosas comenzaron a cambiar. La Zona Franca de Curazao experimentó un declive, obligando a MPJ a tomar una decisión crucial. En 2017, decidieron expandir sus horizontes al otro lado del Caribe, abriendo operaciones en la Zona Franca de Colón, Panamá.",
        t6: "Un Futuro Brillante en Panamá",
        p6: "El salto a Panamá resultó ser un movimiento estratégico brillante. En 2018, abrieron con éxito su nueva sede en la Zona Franca de Colón, y en 2020 cerraron por completo sus operaciones en Curazao. Desde entonces, MPJ International ha experimentado un crecimiento constante, expandiendo su alcance a Centroamérica y construyendo un portafolio de más de 8,000 SKU.",
        p7: "Hoy, MPJ International mira hacia el futuro con gran entusiasmo, emocionada por las posibilidades que les depara Panamá. De modestos comienzos en Curazao a convertirse en un líder regional, la historia de MPJ International es una de persistencia, innovación y una visión audaz para el futuro.",

        redes: "Redes",
        ubi: "Ubicación",
        tel: "Teléfonos"
    },
    en: {
        item1: "Home",
        item2: "Our History",
        item3: "Catalog",
        item4: "Contact",
        titulo: "Our History",

        t1: "Early Beginnings in the Curacao Free Zone",
        p1: "The history of MPJ International dates back to 1982, when they opened their doors in the Curacao Free Zone. At that time, they were a modest company dedicated to international trade. But soon, their ambitions would expand beyond these modest beginnings.",
        t2: "Curacao: The Flagship Store",
        p2: "In 1989, MPJ made a bold move and ventured into the retail world, opening their first department store in the heart of Curacao. La Curacao, as it was called, was welcomed with open arms by the local community. Its immediate success became the springboard the company needed to expand throughout the region.",
        t3: "Exploring New Paths",
        p3: "Following the success of La Curacao, MPJ opened stores in Aruba and Bonaire, quickly becoming flagship brands in each of these islands. Their regional expansion strategy allowed them to take advantage of the flourishing Caribbean market.",
        t4: "Venturing into Electrical Supplies",
        p4: "But MPJ wasn't content with just being a retail giant. In 2006, they took a new turn in their business by venturing into the field of electrical supplies and construction materials, opening MTech Electrical Supply.",
        t5: "The Decline of Curacao and the Rise of Panama",
        p5: "However, in 2012 things began to change. The Curacao Free Zone experienced a decline, forcing MPJ to make a crucial decision. In 2017, they decided to expand their horizons across the Caribbean, opening operations in the Colon Free Zone, Panama.",
        t6: "A Bright Future in Panama",
        p6: "The leap to Panama proved to be a brilliant strategic move. In 2018, they successfully opened their new headquarters in the Colon Free Zone, and in 2020 they completely closed their operations in Curacao. Since then, MPJ International has experienced steady growth, expanding their reach to Central America and building a portfolio of over 8,000 SKUs",
        p7: "Today, MPJ International looks to the future with great enthusiasm, excited about the possibilities that Panama holds. From modest beginnings in Curacao to becoming a regional leader, MPJ International's story is one of persistence, innovation, and a bold vision for the future.",

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

    document.getElementById('t1').innerText = content.t1;
    document.getElementById('p1').innerText = content.p1;
    document.getElementById('t2').innerText = content.t2;
    document.getElementById('p2').innerText = content.p2;
    document.getElementById('t3').innerText = content.t3;
    document.getElementById('p3').innerText = content.p3;
    document.getElementById('t4').innerText = content.t4;
    document.getElementById('p4').innerText = content.p4;
    document.getElementById('t5').innerText = content.t5;
    document.getElementById('p5').innerText = content.p5;
    document.getElementById('t6').innerText = content.t6;
    document.getElementById('p6').innerText = content.p6;
    document.getElementById('p7').innerText = content.p7;

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

        if (boxTop < triggerBottom) {
            milestone.classList.add('active');
        } else {
            milestone.classList.remove('active');
        }
    });
}document.addEventListener('DOMContentLoaded', () => {
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
  
    // Configuración del observador para las animaciones de entrada
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const index = element.getAttribute('data-index');
          
          // Aplicar diferentes animaciones basadas en el índice
          if (index % 3 === 0) {
            element.classList.add('animate-fadeInLeft');
            element.querySelector('.description').classList.add('animate-fadeInRight');
          } else if (index % 3 === 1) {
            element.classList.add('animate-fadeInRight');
            element.querySelector('.description').classList.add('animate-fadeInLeft');
          } else {
            element.classList.add('animate-fadeInUp');
            element.querySelector('.description').classList.add('animate-scaleIn');
          }
          
          observer.unobserve(element); // Desconectar después de aplicar la animación
        }
      });
    }, options);
  
    // Aplicar el observador a los elementos con la clase .image-description
    document.querySelectorAll('.image-description').forEach((el, index) => {
      el.setAttribute('data-index', index);
      observer.observe(el);
    });
  
    // Observador específico para el párrafo final (#p7)
    const finalParagraph = document.getElementById('p7');
    const p7Observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        finalParagraph.classList.add('animate-scaleIn');
        p7Observer.unobserve(finalParagraph);
      }
    }, options);
    
    p7Observer.observe(finalParagraph);
  
    // Efectos hover para las imágenes
    document.querySelectorAll('.image-description img').forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.filter = 'brightness(1.1) contrast(1.1)';
      });
      img.addEventListener('mouseout', () => {
        img.style.filter = 'none';
      });
    });
});
