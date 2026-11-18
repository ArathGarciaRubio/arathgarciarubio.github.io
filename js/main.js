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
    resumen: "Identidad visual completa para un negocio de papelería, sublimado, grabado y bordado.",
    portada: { imagen: "img/effix/portada.jpg" },
    ficha: {
      "Cliente": "Effix",
      "Año": "2025",
      "Giro": "Papelería y personalización",
      "Rol": "Diseño de identidad",
      "Herramientas": "Illustrator, Photoshop"
    },
    bloques: [
      { tipo: "texto", titulo: "El reto", parrafos: [
        "Effix es un negocio de papelería, sublimado, grabado y bordado. Necesitaba una marca que transmitiera eficiencia, precisión, creatividad y confianza, y que funcionara igual de bien en una tarjeta que en una lona.",
        "El nombre une ideas como effective, efficiency y fix, así que la identidad tenía que hablar de soluciones claras, procesos bien ejecutados y resultados confiables."
      ]},
      { tipo: "imagen", src: "img/effix/logotipo.jpg", pie: "Logotipo principal.", estrecha: true },
      { tipo: "texto", titulo: "Concepto", parrafos: [
        "El logotipo parte de una tipografía sans serif contemporánea, de trazos limpios y proporciones equilibradas, para transmitir profesionalismo, claridad, modernidad y cercanía tecnológica.",
        "La palabra «effix» en minúsculas le da una personalidad accesible y actual, lejos de la rigidez corporativa."
      ]},
      { tipo: "cita", texto: "El punto de la «i» se convierte en el elemento distintivo de la marca: un acento visual y la base para patrones y detalles." },
      { tipo: "imagen", src: "img/effix/variantes.jpg", pie: "Variantes del logotipo y propuesta inicial de isotipo." },
      { tipo: "texto", titulo: "Tipografía y color", parrafos: [
        "Inter es la tipografía principal del sistema. En color, el azul marino es la base y representa confianza, estabilidad y precisión técnica; el rojo se usa de forma estratégica en el punto de la «i» para aportar energía y sensación de resultado.",
        "El blanco y el negro sirven de soporte y permiten aplicaciones monocromáticas y una producción económica. El gris se reserva para detalles, como texto sobre fondos muy claros."
      ]},
      { tipo: "imagen", src: "img/effix/tipografia.jpg", pie: "Tipografía principal: Inter." },
      { tipo: "paleta", colores: [
        { hex: "#1F2A44", nombre: "Azul marino" },
        { hex: "#B52E3A", nombre: "Rojo" },
        { hex: "#FFFFFF", nombre: "Blanco" },
        { hex: "#000000", nombre: "Negro" },
        { hex: "#6E6E6E", nombre: "Gris" }
      ]},
      { tipo: "texto", titulo: "Aplicaciones", parrafos: [
        "El sistema se llevó a piezas reales del negocio: tarjetas de presentación, productos personalizados, bordado y lonas publicitarias."
      ]},
      { tipo: "imagen", src: "img/effix/espectacular.jpg", pie: "Espectacular con la línea «Ideas bien hechas»." },
      { tipo: "galeria", columnas: 2, imagenes: [
        { src: "img/effix/tarjetas.jpg", hueco: "Tarjetas de presentación" },
        { src: "img/effix/bordado.jpg", hueco: "Logotipo bordado" }
      ]},
      { tipo: "galeria", columnas: 2, imagenes: [
        { src: "img/effix/termos.jpg", hueco: "Termos personalizados" },
        { src: "img/effix/tarjetas-2.jpg", hueco: "Tarjetas de presentación" }
      ]},
      { tipo: "imagen", src: "img/effix/lona-local.jpg", pie: "Lona en fachada." },
      { tipo: "imagen", src: "img/effix/lona-2.jpg", pie: "Lona con servicios y llamada a la acción." }
    ]
  },

  {
    id: "sillage",
    titulo: "Sillage",
    categoria: "Desarrollo web",
    resumen: "Catálogo web de perfumes con filtros combinables, pirámide olfativa, lista de deseos y panel de administración.",
    portada: { imagen: "img/sillage/portada.jpg" },
    ficha: {
      "Tipo": "Proyecto académico individual",
      "Año": "2026",
      "Rol": "Diseño, desarrollo y base de datos",
      "Tecnologías": "HTML, CSS, JS, Supabase, Netlify"
    },
    bloques: [
      { tipo: "texto", titulo: "El reto", parrafos: [
        "Quería construir un catálogo de perfumes fácil de explorar y con un panel para administrarlo sin tocar el código.",
        "El reto principal fue organizar la información olfativa (familias, notas y ocasiones) de forma clara para quien visita el sitio."
      ]},
      { tipo: "imagen", src: "img/sillage/inicio.jpg", pie: "Página de inicio con perfumes destacados." },

      { tipo: "texto", titulo: "La solución", parrafos: [
        "Diseñé Sillage, un catálogo web con filtros combinables, una ficha con pirámide olfativa para cada perfume y un panel de administración protegido con inicio de sesión.",
        "Los datos viven en una base PostgreSQL en Supabase y el sitio está publicado en Netlify."
      ]},
      { tipo: "imagen", src: "img/sillage/identidad.jpg", pie: "Identidad: wordmark en Cormorant Garamond, paleta y tipografías." },
      { tipo: "imagen", src: "img/sillage/wireframes.jpg", pie: "Wireframes de las pantallas principales." },

      { tipo: "lista", titulo: "Funciones principales", items: [
        "Catálogo con filtros por tipo, familia olfativa, ocasión, marca, género y precio, con etiquetas de filtros activos y orden por nombre o precio",
        "Ficha de cada perfume con galería de imágenes y pirámide olfativa: notas de salida, corazón y fondo",
        "Lista de deseos guardada en el navegador, con panel lateral y contador en la barra de navegación",
        "Inicio de sesión para el administrador con Supabase Auth",
        "Panel de administración para crear, editar y eliminar perfumes con sus notas",
        "Gestión de marcas, tipos, familias olfativas, notas y ocasiones"
      ]},
      { tipo: "imagen", src: "img/sillage/catalogo.jpg", pie: "Catálogo con filtros activos." },
      { tipo: "imagen", src: "img/sillage/detalle.jpg", pie: "Ficha de perfume con pirámide olfativa." },
      { tipo: "imagen", src: "img/sillage/lista-deseos.jpg", pie: "Lista de deseos en panel lateral." },

      { tipo: "texto", titulo: "Tecnología", parrafos: [
        "Frontend en HTML, CSS y JavaScript sin frameworks, con Supabase (PostgreSQL y Auth) como base de datos y Netlify para la publicación. Cada cambio subido a GitHub se publica automáticamente."
      ]},
      { tipo: "imagen", src: "img/sillage/diagrama.jpg", pie: "Diagrama de la base de datos." },
      { tipo: "lista", titulo: "Retos técnicos resueltos", items: [
        "Filtros combinados que se aplican en el navegador sobre los datos, cargados una sola vez",
        "Verificación de sesión en el panel para redirigir al inicio de sesión cuando no hay un administrador activo",
        "Guardado de las notas por tipo (salida, corazón y fondo) en una tabla intermedia",
        "Etiquetas de filtros activos que quitan el filtro y actualizan el catálogo"
      ]},

      { tipo: "texto", titulo: "Lo que aprendí", parrafos: [
        "Aprendí a diseñar una base de datos relacional con relaciones de muchos a muchos y a protegerla con políticas de acceso por fila.",
        "También practiqué la organización de un proyecto con JavaScript puro y el trabajo en sprints semanales."
      ]},
      { tipo: "enlaces", enlaces: [
        { texto: "Ver sitio en vivo", url: "https://sillageparfum.netlify.app" }
      ]}
    ]
  },

  {
    id: "grano-norte",
    titulo: "Grano Norte",
    categoria: "Desarrollo web",
    resumen: "Sitio web para una marca académica de café de especialidad: catálogo con filtros, ficha de cada café y panel de administración.",
    portada: { imagen: "img/grano-norte/portada.jpg" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2026",
      "Rol": "Diseño y desarrollo web",
      "Tecnologías": "HTML, CSS, JS, PHP, MariaDB"
    },
    bloques: [
      { tipo: "texto", titulo: "El reto", parrafos: [
        "Quería crear un sitio de café de especialidad que ayudara a elegir sin saber términos técnicos. Tenía que mostrar los cafés con datos reales, permitir filtrarlos y actualizarse desde un panel, sin tocar el código.",
        "Grano Norte es una marca académica creada para la materia de Programación Integral de la UACJ. El sitio no vende en línea."
      ]},
      { tipo: "imagen", src: "img/grano-norte/inicio.jpg", pie: "Página de inicio." },

      { tipo: "texto", titulo: "Concepto visual", parrafos: [
        "La marca parte de una identidad juarense de estilo western: una estrella, líneas dobles y un ornamento que acompañan al nombre.",
        "En la versión final llevé ese estilo a algo más sobrio y editorial, con crema, café y cobre, para que el café y su información fueran lo principal."
      ]},
      { tipo: "imagen", src: "img/grano-norte/identidad.jpg", pie: "Identidad visual: paleta, tipografías y detalles de la línea western juarense." },

      { tipo: "texto", titulo: "Wireframes", parrafos: [
        "Antes de programar, diseñé wireframes de baja fidelidad de todas las pantallas, en escritorio y en móvil, para definir la estructura y el contenido de cada una."
      ]},
      { tipo: "imagen", src: "img/grano-norte/wireframe-inicio.jpg", pie: "Wireframe de la página de inicio en escritorio.", estrecha: true },
      { tipo: "imagen", src: "img/grano-norte/wireframe-movil.jpg", pie: "Wireframe de la página de inicio en móvil." },
      { tipo: "imagen", src: "img/grano-norte/wireframe-detalle.jpg", pie: "Wireframe de la ficha de café en escritorio y móvil." },

      { tipo: "lista", titulo: "Funciones principales", items: [
        "Catálogo de ocho cafés con búsqueda y filtros por país, tueste, presentación, gramaje y precio máximo",
        "Ficha de cada café con origen, tueste, notas de sabor, variedades, métodos de preparación y precio según la presentación",
        "«Encuentra tu café»: tres preguntas que abren el catálogo con los filtros ya aplicados",
        "Carrusel de imágenes en el inicio, con botones de anterior, siguiente y pausa",
        "Páginas de ubicación, con mapa de referencia académica, y de contacto",
        "Panel de administración con inicio de sesión para crear, editar, ocultar, destacar y borrar cafés"
      ]},
      { tipo: "galeria", columnas: 2, imagenes: [
        { src: "img/grano-norte/catalogo.jpg", hueco: "Catálogo con filtros" },
        { src: "img/grano-norte/detalle.jpg", hueco: "Ficha de café" },
        { src: "img/grano-norte/ubicacion.jpg", hueco: "Ubicación" },
        { src: "img/grano-norte/contacto.jpg", hueco: "Contacto" }
      ]},
      { tipo: "galeria", columnas: 4, imagenes: [
        { src: "img/grano-norte/movil-inicio.jpg", hueco: "Inicio en móvil" },
        { src: "img/grano-norte/movil-detalle-cafe.jpg", hueco: "Ficha de café en móvil" },
        { src: "img/grano-norte/movil-ubicacion.jpg", hueco: "Ubicación en móvil" },
        { src: "img/grano-norte/movil-contacto.jpg", hueco: "Contacto en móvil" }
      ]},

      { tipo: "texto", titulo: "Tecnología", parrafos: [
        "Hice el sitio con HTML, CSS y JavaScript propios, sin Bootstrap, y con PHP y una base de datos MariaDB. Lo desarrollé en local con XAMPP y lo publiqué en InfinityFree; el código está en GitHub.",
        "La base de datos organiza los cafés con sus orígenes, productores, variedades, notas sensoriales, métodos de preparación y presentaciones."
      ]},
      { tipo: "imagen", src: "img/grano-norte/diagrama-er.jpg", pie: "Diagrama entidad-relación de la base de datos." },
      { tipo: "imagen", src: "img/grano-norte/panel-admin.jpg", pie: "Panel de administración." },

      { tipo: "texto", titulo: "De la versión 1 a la versión final", parrafos: [
        "Mi primera versión tenía unas 3,000 líneas de código y funciones que el proyecto no necesitaba. Apliqué el principio KISS: una sola foto por café, filtros que se aplican en el navegador y un formulario sencillo para «Encuentra tu café».",
        "El resultado fue un código de unas 1,500 líneas, más fácil de explicar y de mantener."
      ]},
      { tipo: "imagen", src: "img/grano-norte/antes-despues.jpg", pie: "Comparación entre la primera versión y la versión final." },

      { tipo: "texto", titulo: "Lo que aprendí", parrafos: [
        "Aprendí a conectar una página con una base de datos mediante una API en PHP y a proteger un panel con contraseñas cifradas y sesiones.",
        "También entendí que simplificar casi siempre mejora un proyecto, y que probar por separado el sitio local y el publicado evita sorpresas."
      ]},
      { tipo: "enlaces", enlaces: [
        { texto: "Ver sitio en vivo", url: "http://granonorte.infinityfreeapp.com" },
        { texto: "Ver código en GitHub", url: "https://github.com/ArathGarciaRubio/grano-norte-web" }
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
    id: "tommys-tales",
    titulo: "Tommy's Tales",
    categoria: "Videojuegos",
    resumen: "Desarrollo conceptual de un videojuego de plataformas y acción: historia, personajes en 3D, animaciones, escenarios e interfaz.",
    portada: { imagen: "img/tommys-tales/portada.jpg" },
    ficha: {
      "Tipo": "Proyecto académico",
      "Año": "2024",
      "Género": "Plataformas y acción",
      "Clasificación": "E (para todos)",
      "Rol": "Desarrollo conceptual y diseño"
    },
    bloques: [
      { tipo: "texto", titulo: "La historia", parrafos: [
        "Tommy's Tales sigue a Tommy, un niño creativo y soñador que empieza su sexto grado de primaria. Tommy tiene TDAH, lo que a menudo lo hace distraerse en clase y perderse en su imaginación.",
        "En sus aventuras imaginarias lo acompañan Connie, su mejor amiga, y Robert, su maestro, que al principio parece el villano pero termina siendo un aliado."
      ]},

      { tipo: "texto", titulo: "Personajes", parrafos: [
        "Cada personaje tiene una personalidad definida y un papel claro en la historia. Los tres se modelaron en 3D con un estilo amable y caricaturesco, pensado para todo público."
      ]},
      { tipo: "imagen", src: "img/tommys-tales/personaje-tommy.jpg", pie: "Tommy, el protagonista." },
      { tipo: "imagen", src: "img/tommys-tales/personaje-connie.jpg", pie: "Connie, la mejor amiga de Tommy." },
      { tipo: "imagen", src: "img/tommys-tales/personaje-robert.jpg", pie: "Robert, el maestro." },
      { tipo: "galeria", columnas: 3, imagenes: [
        { src: "img/tommys-tales/vista-tommy.jpg", hueco: "Vistas de Tommy" },
        { src: "img/tommys-tales/vista-connie.jpg", hueco: "Vistas de Connie" },
        { src: "img/tommys-tales/vista-robert.jpg", hueco: "Vistas de Robert" }
      ]},

      { tipo: "texto", titulo: "Animación", parrafos: [
        "Cada personaje cuenta con su propio set de animaciones, como caminar, correr, saltar, golpear y recibir daño."
      ]},
      { tipo: "galeria", columnas: 3, imagenes: [
        { src: "img/tommys-tales/anim-tommy.webp", hueco: "Tommy corriendo" },
        { src: "img/tommys-tales/anim-connie.webp", hueco: "Connie en reposo" },
        { src: "img/tommys-tales/anim-robert.webp", hueco: "Robert caminando" }
      ]},

      { tipo: "texto", titulo: "Escenarios", parrafos: [
        "Los niveles combinan el mundo real de Tommy, como su pueblo y su escuela, con los espacios que imagina: plataformas, laberintos y retos."
      ]},
      { tipo: "galeria", columnas: 2, imagenes: [
        { src: "img/tommys-tales/escenario-pueblo.jpg", hueco: "Pueblo" },
        { src: "img/tommys-tales/escenario-patio.jpg", hueco: "Patio" },
        { src: "img/tommys-tales/escenario-plataformas.jpg", hueco: "Nivel de plataformas" },
        { src: "img/tommys-tales/escenario-laberinto.jpg", hueco: "Laberinto" }
      ]},

      { tipo: "texto", titulo: "Interfaz", parrafos: [
        "Diseñé las pantallas del juego con un estilo cálido y legible: menú principal, pausa, inventario, logros, opciones, controles y guardado de partida."
      ]},
      { tipo: "imagen", src: "img/tommys-tales/menu-principal.jpg", pie: "Menú principal." },
      { tipo: "galeria", columnas: 2, imagenes: [
        { src: "img/tommys-tales/hud-pausa.jpg", hueco: "Pausa" },
        { src: "img/tommys-tales/hud-inventario.jpg", hueco: "Inventario" },
        { src: "img/tommys-tales/hud-logros.jpg", hueco: "Logros" },
        { src: "img/tommys-tales/hud-opciones.jpg", hueco: "Opciones" },
        { src: "img/tommys-tales/hud-controles.jpg", hueco: "Controles" },
        { src: "img/tommys-tales/hud-guardarpartida.jpg", hueco: "Guardar partida" }
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
