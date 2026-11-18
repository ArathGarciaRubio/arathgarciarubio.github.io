/* =========================================================
   AJUSTE GENERAL
   mostrarHuecos = true  → se ven los recuadros punteados de las
                           imágenes que aún faltan (útil al editar).
   mostrarHuecos = false → esos recuadros no se muestran (versión pública).
   ========================================================= */
const mostrarHuecos = false;


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
   { tipo: "imagen",  src: "img/archivo.jpg", pie: "...", hueco: "texto si aún no hay imagen", estrecha: true }
                       (estrecha es opcional: muestra la imagen al ancho del texto)
   { tipo: "galeria", columnas: 2, imagenes: [ { src: "...", hueco: "..." } ] }
   { tipo: "paleta",  colores: [ { hex: "#000000", nombre: "..." } ] }
   { tipo: "video",   youtube: "ID_DEL_VIDEO" }
   { tipo: "enlaces", enlaces: [ { texto: "...", url: "..." } ] }

   Portada: usa { imagen: "img/..." } o una portada generada
   con { fondo: "#color", texto: "#color", marca: "Texto" }.
   ========================================================= */
const proyectos = [
  {
    id: "agr-studio",
    titulo: "AGR Studio",
    categoria: "Identidad visual",
    resumen: "Identidad visual de mi marca personal como diseñador digital: monograma, versiones, paleta, tipografía y aplicaciones.",
    portada: { imagen: "img/agr/portada.svg" },
    ficha: {
      "Tipo": "Marca personal",
      "Año": "2026",
      "Rol": "Diseño de identidad",
      "Entregables": "Manual, logotipos y aplicaciones"
    },
    bloques: [
      { tipo: "texto", titulo: "El concepto", parrafos: [
        "AGR son mis iniciales: Arath García Rubio. El monograma se construye con una sola regla: un trazo de 16 unidades, un radio exterior de 32, un radio interior de 16 y remates rectos.",
        "Las curvas aportan la parte creativa y los cortes rectos, la estructura. Es el mismo equilibrio entre técnica y creatividad que quiero que se note en mi trabajo."
      ]},
      { tipo: "imagen", src: "img/agr/construccion.png", pie: "Construcción del monograma sobre la medida base de 16 unidades." },
      { tipo: "cita", texto: "El acento cobre es el brazo de la G: un módulo de 16 × 16 con función estructural, no decorativa." },

      { tipo: "texto", titulo: "Evolución", parrafos: [
        "La identidad pasó por varias etapas. La primera versión usaba letras con esquinas en ángulo, que se veían sólidas en tamaño grande pero perdían claridad al reducirse."
      ]},
      { tipo: "imagen", src: "img/agr/proceso-v1.png", pie: "Versión 1: primera propuesta del logotipo.", estrecha: true },
      { tipo: "texto", parrafos: [
        "En la fase 5 comparé la versión 1 con tres alternativas en las mismas condiciones: A, conservación refinada; B, integración estructural, y C, simplificación distintiva.",
        "Elegí la alternativa C porque se lee mejor en tamaños pequeños: en un lienzo de 32 px sus letras miden 11 px de alto, frente a 8.9 px de la versión 1, sin que se cierren los espacios interiores. Además, comparte con Manrope la construcción circular y los remates rectos."
      ]},
      { tipo: "imagen", src: "img/agr/proceso-fase5.png", pie: "Fase 5: comparativa de la versión 1 con las alternativas A, B y C." },

      { tipo: "texto", titulo: "Sistema de versiones", parrafos: [
        "La versión 2 se convirtió en un sistema completo: firma horizontal, vertical, compacta y monograma, cada una en color, inversa, navy, negro y blanco."
      ]},
      { tipo: "imagen", src: "img/agr/versiones.png", pie: "Versiones oficiales del logotipo." },

      { tipo: "texto", titulo: "Color y tipografía", parrafos: [
        "La paleta parte del navy como color principal, con slate para textos secundarios y cobre reservado solo para el módulo del monograma.",
        "El logotipo usa Manrope 700 en «Studio» y Manrope 500 en el descriptor. Los textos complementarios, como los de este sitio, usan Inter."
      ]},
      { tipo: "paleta", colores: [
        { hex: "#202A36", nombre: "Navy" },
        { hex: "#526477", nombre: "Slate" },
        { hex: "#C58B5A", nombre: "Copper" },
        { hex: "#E9E7E1", nombre: "Warm Gray" },
        { hex: "#FFFFFF", nombre: "White" }
      ]},
      { tipo: "imagen", src: "img/agr/fondos.png", pie: "Versión del logotipo según el fondo." },

      { tipo: "texto", titulo: "Aplicaciones", parrafos: [
        "La identidad se aplicó a una tarjeta de presentación, la portada del portafolio y la pantalla inicial de este sitio, que se construyó a partir de esa propuesta."
      ]},
      { tipo: "imagen", src: "img/agr/tarjeta.png", pie: "Tarjeta de presentación, 85 × 55 mm." },
      { tipo: "imagen", src: "img/agr/portada-portafolio.png", pie: "Portada del portafolio." },
      { tipo: "imagen", src: "img/agr/pantalla-inicial.png", pie: "Pantalla inicial del sitio web." },
      { tipo: "enlaces", enlaces: [
        { texto: "Ver Instagram @byAGR.Studio", url: "https://www.instagram.com/byagr.studio/" }
      ]}
    ]
  },

  {
    id: "effix",
    titulo: "Effix",
    categoria: "Identidad visual",
    resumen: "Identidad visual completa para un negocio de personalización y papelería.",
    portada: { fondo: "#1F2A44", texto: "#FFFFFF", marca: "effix." },
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
      /* Agrega aquí los otros tres colores de la paleta de Effix */
      { tipo: "paleta", colores: [
        { hex: "#1F2A44", nombre: "Azul marino" },
        { hex: "#B52E3A", nombre: "Rojo acento" }
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
    portada: { fondo: "#15130F", texto: "#E8D9B8", marca: "Sillage" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2026",
      "Rol": "Diseño y desarrollo",
      "Tecnologías": "HTML, CSS, JS, Supabase"
    },
    bloques: [
      { tipo: "texto", titulo: "El proyecto", parrafos: [
        "Sillage es una plataforma de catálogo de perfumes pensada para explorar fragancias con filtros y conocer cada una a fondo, incluida su pirámide olfativa.",
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
    portada: { fondo: "#2B1D14", texto: "#E9D8BE", marca: "Grano Norte" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2026",
      "Rol": "Diseño y desarrollo",
      "Tecnologías": "PHP, MariaDB, JS"
    },
    bloques: [
      { tipo: "texto", titulo: "El proyecto", parrafos: [
        "Grano Norte es una marca académica basada en productos reales de café de especialidad. El sitio presenta un catálogo con el origen, el tueste y las notas de sabor de cada café.",
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
    categoria: "Prácticas profesionales",
    resumen: "Gestión de redes sociales y desarrollo creativo para una consultoría de negocios.",
    portada: { fondo: "#E9EEF3", texto: "#1B2A3A", marca: "Avex" },
    ficha: {
      "Empresa": "Avex Solutions",
      "Periodo": "2026",
      "Rol": "Redes sociales y desarrollo creativo"
    },
    bloques: [
      { tipo: "texto", titulo: "Mi papel", parrafos: [
        "Durante mis prácticas profesionales apoyo en la gestión de redes sociales y en el desarrollo creativo, incluido el posicionamiento en redes de un consultor de la firma."
      ]},
      { tipo: "lista", titulo: "Lo que hice", items: [
        "Análisis de referentes digitales: qué rescatar y qué evitar",
        "Guiones para una serie de reels con estructura de doble caída",
        "Propuesta de planos de cámara para una marca formal",
        "Ideas de ganchos iniciales para captar la atención"
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
    portada: { fondo: "#120F1F", texto: "#CFC4F5", marca: "Concept" },
    ficha: {
      "Rol": "Desarrollo conceptual"
    },
    bloques: [
      /* Pendiente: cambiar el título, el resumen y este texto por los del proyecto real */
      { tipo: "texto", titulo: "El concepto", parrafos: [
        "Propuesta conceptual de un videojuego, desde la idea general hasta el desarrollo visual de sus personajes y escenarios. El proyecto completo está publicado en Behance."
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


/* Crea el HTML de una tarjeta de proyecto */
function crearTarjeta(proyecto) {
  return '<a class="tarjeta" href="#' + proyecto.id + '">' +
           '<div class="portada">' + crearPortada(proyecto) + '</div>' +
           '<h3>' + proyecto.titulo + '</h3>' +
           '<p>' + proyecto.categoria + '</p>' +
         '</a>';
}


/* Dibuja las tarjetas de proyecto según el filtro elegido */
function mostrarCuadricula() {
  let html = "";
  for (const proyecto of proyectos) {
    if (filtroActual !== "Todos" && proyecto.categoria !== filtroActual) continue;
    html += crearTarjeta(proyecto);
  }
  cuadricula.innerHTML = html;
}


/* Crea una imagen. Si todavía no hay archivo, muestra un recuadro
   punteado (solo cuando mostrarHuecos es true). */
function crearImagen(imagen) {
  if (imagen.src) {
    return '<img src="' + imagen.src + '" alt="' + (imagen.pie || imagen.hueco || "") + '" loading="lazy">';
  }
  if (mostrarHuecos) {
    return '<div class="hueco">' + (imagen.hueco || "Imagen pendiente") + '</div>';
  }
  return "";
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
    const imagen = crearImagen(bloque);
    if (imagen === "") return ""; // Sin imagen y sin hueco: no se muestra el bloque
    // "estrecha: true" muestra la imagen al ancho del texto (720 px)
    let clase = "bloque-imagen";
    if (bloque.estrecha) clase += " estrecha";
    let html = '<figure class="' + clase + '">' + imagen;
    if (bloque.pie && bloque.src) html += '<figcaption>' + bloque.pie + '</figcaption>';
    return html + '</figure>';
  }

  if (bloque.tipo === "galeria") {
    let imagenes = "";
    for (const imagen of bloque.imagenes) imagenes += crearImagen(imagen);
    if (imagenes === "") return ""; // Galería vacía: no se muestra
    const columnas = bloque.columnas || 2;
    return '<div class="bloque-galeria" style="grid-template-columns: repeat(' + columnas + ', 1fr)">' + imagenes + '</div>';
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
    return '<div class="bloque-video"><iframe src="https://www.youtube.com/embed/' + bloque.youtube + '" title="Video del proyecto" allowfullscreen></iframe></div>';
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
      '<p class="etiqueta-seccion"><span class="marcador"></span>' + proyecto.categoria + '</p>' +
      '<h1>' + proyecto.titulo + '</h1>' +
      '<p class="resumen">' + proyecto.resumen + '</p>' +
    '</div>' +
    '<dl class="ficha">' + ficha + '</dl>' +
    '<div class="proyecto-portada">' + crearPortada(proyecto) + '</div>' +
    '<div class="bloques">' + bloques + '</div>' +
    '<div class="siguiente">' +
      '<p class="etiqueta-seccion"><span class="marcador"></span>Siguiente proyecto</p>' +
      '<div style="max-width:420px">' + crearTarjeta(siguiente) + '</div>' +
    '</div>';

  document.getElementById("volver").addEventListener("click", function () {
    irASeccion("proyectos");
  });
}


/* Decide qué vista mostrar según el #id de la dirección.
   Ejemplo: arathgarciarubio.github.io/#effix abre el proyecto Effix. */
function cambiarVista() {
  const id = location.hash.replace("#", "");
  const proyecto = proyectos.find(function (p) { return p.id === id; });

  if (proyecto) {
    mostrarProyecto(proyecto);
    vistaInicio.classList.add("oculto");
    vistaProyecto.classList.remove("oculto");
    document.title = proyecto.titulo + " — AGR Studio";
  } else {
    vistaProyecto.classList.add("oculto");
    vistaInicio.classList.remove("oculto");
    document.title = "AGR Studio — Portafolio de Arath García Rubio";
  }
  window.scrollTo(0, 0);
}


/* Regresa a la vista de inicio (si hace falta) y baja a una sección */
function irASeccion(idSeccion) {
  // El contacto está en todas las vistas, así que no hace falta cambiar de vista
  if (idSeccion !== "contacto" && location.hash !== "") {
    history.pushState("", "", location.pathname);
    cambiarVista();
  }
  if (idSeccion === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
}


/* Enlaces del menú, el logotipo y el botón "Ver proyectos" */
document.querySelectorAll("[data-ir]").forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault();
    irASeccion(enlace.dataset.ir);
  });
});


/* ===== Arranque ===== */
mostrarFiltros();
mostrarCuadricula();
cambiarVista();
window.addEventListener("hashchange", cambiarVista);
