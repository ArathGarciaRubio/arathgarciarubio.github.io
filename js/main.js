/* =========================================================
   PROYECTOS
   Para agregar un proyecto: copia un objeto completo, cambia
   el "id" (sin espacios ni acentos) y llena sus datos.

   Cada proyecto tiene "bloques". Cada bloque es una pieza de
   la página del proyecto y se muestran en el orden en que los
   escribas. Tipos disponibles:

   { tipo: "texto",   titulo: "...", parrafos: ["...", "..."] }
   { tipo: "lista",   titulo: "...", items: ["...", "..."] }
   { tipo: "cita",    texto: "..." }
   { tipo: "imagen",  src: "img/archivo.jpg", pie: "...", hueco: "texto si aún no hay imagen" }
   { tipo: "galeria", columnas: 2, imagenes: [ { src: "...", hueco: "..." } ] }
   { tipo: "paleta",  colores: [ { hex: "#000000", nombre: "..." } ] }
   { tipo: "video",   youtube: "ID_DEL_VIDEO" }
   { tipo: "enlaces", enlaces: [ { texto: "...", url: "..." } ] }

   Si un bloque de imagen no tiene "src", se muestra un recuadro
   punteado con el texto de "hueco" para recordar qué va ahí.
   ========================================================= */
const proyectos = [
  {
    id: "effix",
    titulo: "Effix",
    categoria: "Identidad visual",
    resumen: "Identidad visual completa para un negocio de personalización y papelería.",
    color: "#B52E3A",
    portada: { fondo: "#1F2A44", texto: "#ffffff", marca: "effix." },
    ficha: {
      "Cliente": "Effix",
      "Rol": "Diseño de identidad",
      "Herramientas": "Illustrator, Photoshop"
    },
    bloques: [
      { tipo: "texto", titulo: "El reto", parrafos: [
        "Effix necesitaba una marca que transmitiera precisión y cuidado en cada pieza personalizada, y que funcionara igual de bien en una tarjeta que en una lona."
      ]},
      { tipo: "imagen", hueco: "Imagen principal: logotipo effix sobre fondo azul marino" },
      { tipo: "texto", titulo: "Logotipo", parrafos: [
        "Un logotipo tipográfico en minúsculas con Inter Medium, acompañado de un punto rojo como isotipo: un detalle pequeño que habla de exactitud."
      ]},
      { tipo: "galeria", columnas: 2, imagenes: [
        { hueco: "Construcción del logotipo" },
        { hueco: "Isotipo (punto rojo)" }
      ]},
      { tipo: "paleta", colores: [
        { hex: "#1F2A44", nombre: "Azul marino" },
        { hex: "#B52E3A", nombre: "Rojo acento" },
        { hex: "#F4F4F2", nombre: "Color 3" },
        { hex: "#9AA3B5", nombre: "Color 4" },
        { hex: "#161616", nombre: "Color 5" }
      ]},
      { tipo: "lista", titulo: "Alcance", items: [
        "Investigación y estrategia de marca",
        "Identidad visual y manual de marca",
        "Aplicaciones gráficas: tarjetas de presentación, lona y carteles publicitarios",
        "Presentación final al cliente"
      ]},
      { tipo: "galeria", columnas: 3, imagenes: [
        { hueco: "Tarjetas de presentación" },
        { hueco: "Lona" },
        { hueco: "Cartel publicitario" }
      ]},
      { tipo: "imagen", hueco: "Páginas del manual de marca" }
    ]
  },

  {
    id: "sillage",
    titulo: "Sillage",
    categoria: "Desarrollo web",
    resumen: "Catálogo web de perfumes con filtros avanzados, lista de deseos y panel de administración.",
    color: "#8A6A3B",
    portada: { fondo: "#15130F", texto: "#E8D9B8", marca: "Sillage" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2026",
      "Rol": "Diseño y desarrollo",
      "Tecnologías": "HTML, CSS, JS, Supabase"
    },
    bloques: [
      { tipo: "texto", titulo: "El proyecto", parrafos: [
        "Sillage es una plataforma de catálogo de perfumes pensada para explorar fragancias con filtros y conocer cada una a fondo, incluyendo su pirámide olfativa.",
        "Es mi proyecto técnico más completo hasta ahora: diseño, frontend, base de datos y despliegue."
      ]},
      { tipo: "imagen", hueco: "Captura de la página principal del catálogo" },
      { tipo: "lista", titulo: "Funciones", items: [
        "Catálogo público con filtros combinables",
        "Páginas de detalle con pirámide olfativa",
        "Lista de deseos guardada en el navegador",
        "Panel de administración con CRUD completo",
        "Dos roles: visitante y administrador"
      ]},
      { tipo: "galeria", columnas: 2, imagenes: [
        { hueco: "Detalle de perfume" },
        { hueco: "Lista de deseos" }
      ]},
      { tipo: "texto", titulo: "Tecnología", parrafos: [
        "Frontend en HTML, CSS y JavaScript sin frameworks, con Supabase (PostgreSQL) como backend y despliegue en Netlify."
      ]},
      { tipo: "imagen", hueco: "Panel de administración" },
      { tipo: "enlaces", enlaces: [
        { texto: "Ver sitio en vivo", url: "https://sillageparfum.netlify.app" }
      ]}
    ]
  },

  {
    id: "grano-norte",
    titulo: "Grano Norte",
    categoria: "Desarrollo web",
    resumen: "Sitio web para una cafetería de especialidad con estética western juarense.",
    color: "#A0582B",
    portada: { fondo: "#2B1D14", texto: "#E9D8BE", marca: "Grano Norte" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2026",
      "Rol": "Diseño y desarrollo",
      "Tecnologías": "PHP, MariaDB, JS"
    },
    bloques: [
      { tipo: "texto", titulo: "El proyecto", parrafos: [
        "Grano Norte es una marca académica basada en productos reales de café de especialidad. El sitio presenta un catálogo con origen, tueste y notas de sabor de cada café.",
        "Para la línea visual elegí un estilo western juarense clásico, en lugar de una propuesta minimalista, para salir de mi zona de confort."
      ]},
      { tipo: "imagen", hueco: "Captura de la página de inicio" },
      { tipo: "galeria", columnas: 2, imagenes: [
        { hueco: "Catálogo de cafés" },
        { hueco: "Detalle de café" }
      ]},
      { tipo: "texto", titulo: "Tecnología", parrafos: [
        "Desarrollado en local con XAMPP (PHP y MariaDB) y publicado en InfinityFree. La base de datos organiza cafés, orígenes, productores, variedades, notas sensoriales y métodos de preparación."
      ]},
      { tipo: "imagen", hueco: "Diagrama entidad-relación" },
      { tipo: "enlaces", enlaces: [
        { texto: "Ver sitio en vivo", url: "https://granonorte.infinityfreeapp.com" }
      ]}
    ]
  },

  {
    id: "avex",
    titulo: "Prácticas en Avex",
    categoria: "Redes sociales",
    resumen: "Gestión de redes sociales y desarrollo creativo para una consultoría de negocios.",
    color: "#2F5D8A",
    portada: { fondo: "#E9EEF3", texto: "#1B2A3A", marca: "Avex" },
    ficha: {
      "Empresa": "Avex",
      "Año": "2026",
      "Rol": "Redes sociales y desarrollo creativo"
    },
    bloques: [
      { tipo: "texto", titulo: "Mi papel", parrafos: [
        "Durante mis prácticas profesionales apoyo en la gestión de redes sociales y en el desarrollo creativo, incluyendo el posicionamiento en redes de un consultor de la firma."
      ]},
      { tipo: "lista", titulo: "Lo que hice", items: [
        "Análisis de referentes digitales: qué rescatar y qué evitar",
        "Guiones para una serie de reels con estructura de doble caída",
        "Propuesta de planos de cámara para una marca formal",
        "Ideas de ganchos iniciales para captar atención"
      ]},
      { tipo: "imagen", hueco: "Ejemplo de reel o publicación" },
      { tipo: "galeria", columnas: 3, imagenes: [
        { hueco: "Publicación 1" },
        { hueco: "Publicación 2" },
        { hueco: "Publicación 3" }
      ]}
    ]
  },

  {
    id: "videojuego-conceptual",
    titulo: "Videojuego conceptual",
    categoria: "Videojuegos",
    resumen: "Desarrollo conceptual de un videojuego: mundo, personajes y dirección de arte.",
    color: "#5B3FA8",
    portada: { fondo: "#120F1F", texto: "#CFC4F5", marca: "Concept" },
    ficha: {
      "Rol": "Desarrollo conceptual"
    },
    bloques: [
      { tipo: "texto", titulo: "El concepto", parrafos: [
        "Escribe aquí de qué trata el juego y cuál era la idea principal."
      ]},
      { tipo: "imagen", hueco: "Arte principal del juego" },
      { tipo: "galeria", columnas: 2, imagenes: [
        { hueco: "Personaje" },
        { hueco: "Escenario" }
      ]},
      { tipo: "enlaces", enlaces: [
        { texto: "Ver en Behance", url: "https://www.behance.net/arathgarcia1" }
      ]}
    ]
  }
];


/* =========================================================
   REFERENCIAS A ELEMENTOS DE LA PÁGINA
   ========================================================= */
const vistaInicio = document.getElementById("vista-inicio");
const vistaProyecto = document.getElementById("vista-proyecto");
const contenedorProyecto = document.getElementById("proyecto");
const cuadricula = document.getElementById("cuadricula");
const filtros = document.getElementById("filtros");

let filtroActual = "Todos";


/* Crea el HTML de una portada.
   Si el proyecto tiene imagen de portada, la usa; si no, genera una con CSS. */
function crearPortada(proyecto) {
  if (proyecto.portada.imagen) {
    return '<img src="' + proyecto.portada.imagen + '" alt="' + proyecto.titulo + '">';
  }
  return '<div class="portada-generada" style="background:' + proyecto.portada.fondo + '; color:' + proyecto.portada.texto + '">' +
           '<span class="etiqueta">' + proyecto.categoria + '</span>' +
           '<span class="marca">' + proyecto.portada.marca + '</span>' +
         '</div>';
}


/* Dibuja los botones de filtro a partir de las categorías de los proyectos */
function mostrarFiltros() {
  const categorias = ["Todos"];
  for (const proyecto of proyectos) {
    if (!categorias.includes(proyecto.categoria)) {
      categorias.push(proyecto.categoria);
    }
  }

  filtros.innerHTML = "";
  for (const categoria of categorias) {
    const boton = document.createElement("button");
    boton.className = "filtro";
    if (categoria === filtroActual) boton.classList.add("activo");
    boton.textContent = categoria;
    boton.addEventListener("click", function () {
      filtroActual = categoria;
      mostrarFiltros();
      mostrarCuadricula();
    });
    filtros.appendChild(boton);
  }
}


/* Dibuja las tarjetas de proyecto según el filtro elegido */
function mostrarCuadricula() {
  cuadricula.innerHTML = "";
  for (const proyecto of proyectos) {
    if (filtroActual !== "Todos" && proyecto.categoria !== filtroActual) continue;

    cuadricula.innerHTML +=
      '<a class="tarjeta" href="#' + proyecto.id + '">' +
        '<div class="portada">' + crearPortada(proyecto) + '</div>' +
        '<h3>' + proyecto.titulo + '</h3>' +
        '<p>' + proyecto.categoria + '</p>' +
      '</a>';
  }
}


/* Crea una imagen, o un recuadro punteado si todavía no hay archivo */
function crearImagen(imagen) {
  if (imagen.src) {
    return '<img src="' + imagen.src + '" alt="' + (imagen.pie || "") + '" loading="lazy">';
  }
  return '<div class="hueco">' + (imagen.hueco || "Imagen pendiente") + '</div>';
}


/* Convierte un bloque (texto, imagen, paleta, etc.) en HTML */
function crearBloque(bloque) {
  if (bloque.tipo === "texto") {
    let html = '<div class="bloque-texto">';
    if (bloque.titulo) html += '<h2>' + bloque.titulo + '</h2>';
    for (const parrafo of bloque.parrafos) html += '<p>' + parrafo + '</p>';
    return html + '</div>';
  }

  if (bloque.tipo === "lista") {
    let html = '<div class="bloque-lista"><h2>' + bloque.titulo + '</h2><ul>';
    for (const item of bloque.items) html += '<li>' + item + '</li>';
    return html + '</ul></div>';
  }

  if (bloque.tipo === "cita") {
    return '<div class="bloque-cita"><blockquote>' + bloque.texto + '</blockquote></div>';
  }

  if (bloque.tipo === "imagen") {
    let html = '<figure class="bloque-imagen">' + crearImagen(bloque);
    if (bloque.pie) html += '<figcaption>' + bloque.pie + '</figcaption>';
    return html + '</figure>';
  }

  if (bloque.tipo === "galeria") {
    const columnas = bloque.columnas || 2;
    let html = '<div class="bloque-galeria" style="grid-template-columns: repeat(' + columnas + ', 1fr)">';
    for (const imagen of bloque.imagenes) html += crearImagen(imagen);
    return html + '</div>';
  }

  if (bloque.tipo === "paleta") {
    let html = '<div class="bloque-paleta">';
    for (const color of bloque.colores) {
      html += '<div class="color">' +
                '<div class="muestra" style="background:' + color.hex + '"></div>' +
                '<div class="datos"><strong>' + color.nombre + '</strong>' + color.hex + '</div>' +
              '</div>';
    }
    return html + '</div>';
  }

  if (bloque.tipo === "video") {
    return '<div class="bloque-video"><iframe src="https://www.youtube.com/embed/' + bloque.youtube + '" allowfullscreen></iframe></div>';
  }

  if (bloque.tipo === "enlaces") {
    let html = '<div class="bloque-enlaces">';
    for (const enlace of bloque.enlaces) {
      html += '<a class="boton" href="' + enlace.url + '" target="_blank" rel="noopener">' + enlace.texto + ' ↗</a>';
    }
    return html + '</div>';
  }

  return ""; // Tipo desconocido: no se muestra nada
}


/* Dibuja la página completa de un proyecto */
function mostrarProyecto(proyecto) {
  // Color de acento propio del proyecto
  contenedorProyecto.style.setProperty("--color-proyecto", proyecto.color);

  // Ficha técnica (solo los datos que existan)
  let ficha = "";
  for (const dato in proyecto.ficha) {
    ficha += '<div><dt>' + dato + '</dt><dd>' + proyecto.ficha[dato] + '</dd></div>';
  }

  // Bloques del proyecto
  let bloques = "";
  for (const bloque of proyecto.bloques) bloques += crearBloque(bloque);

  // Siguiente proyecto (al llegar al último, regresa al primero)
  const posicion = proyectos.indexOf(proyecto);
  const siguiente = proyectos[(posicion + 1) % proyectos.length];

  contenedorProyecto.innerHTML =
    '<button class="volver" id="volver">← Todos los proyectos</button>' +
    '<div class="proyecto-cabecera">' +
      '<span class="categoria">' + proyecto.categoria + '</span>' +
      '<h1>' + proyecto.titulo + '</h1>' +
      '<p class="resumen">' + proyecto.resumen + '</p>' +
    '</div>' +
    '<dl class="ficha">' + ficha + '</dl>' +
    '<div class="proyecto-portada">' + crearPortada(proyecto) + '</div>' +
    '<div class="bloques">' + bloques + '</div>' +
    '<div class="siguiente">' +
      '<h2>Siguiente proyecto</h2>' +
      '<a class="tarjeta" href="#' + siguiente.id + '" style="max-width:420px">' +
        '<div class="portada">' + crearPortada(siguiente) + '</div>' +
        '<h3>' + siguiente.titulo + '</h3>' +
        '<p>' + siguiente.categoria + '</p>' +
      '</a>' +
    '</div>';

  document.getElementById("volver").addEventListener("click", function () {
    location.hash = "";
  });
}


/* Decide qué vista mostrar según el #id de la dirección.
   Ejemplo: tusitio.com/#effix abre el proyecto Effix. */
function cambiarVista() {
  const id = location.hash.replace("#", "");
  const proyecto = proyectos.find(function (p) { return p.id === id; });

  if (proyecto) {
    mostrarProyecto(proyecto);
    vistaInicio.classList.add("oculto");
    vistaProyecto.classList.remove("oculto");
    document.title = proyecto.titulo + " — Arath García";
  } else {
    vistaProyecto.classList.add("oculto");
    vistaInicio.classList.remove("oculto");
    document.title = "Arath García — Portafolio";
  }
  window.scrollTo(0, 0);
}


/* Menú: regresa al inicio y baja a la sección elegida */
document.querySelectorAll("[data-ir]").forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault();
    if (location.hash) location.hash = "";
    setTimeout(function () {
      document.getElementById(enlace.dataset.ir).scrollIntoView({ behavior: "smooth" });
    }, 50);
  });
});


/* ===== Arranque ===== */
mostrarFiltros();
mostrarCuadricula();
cambiarVista();
window.addEventListener("hashchange", cambiarVista);
