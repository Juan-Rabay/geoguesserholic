# Atlas de Metas de GeoGuessr

Sitio estático trilingüe (**español, inglés y portugués**) con una guía de
reconocimiento geográfico por imagen, cubriendo **111 países y territorios** con
cobertura de Street View, más **14 guías transversales** de metas globales.

En vivo: https://geoguesserholic.vercel.app

## Cómo abrirlo

Doble clic en `index.html`. No hay build, servidor ni dependencia externa — el
sitio funciona offline, directo desde el sistema de archivos. Las banderas se
cargan desde flagcdn y caen a emoji si no hay conexión.

## Qué trae cada país

- **Identificación rápida** — las 4 o 5 señales que cierran el país más rápido
- **Ficha** — manejo, idioma, escritura, dominio, cobertura y patente
- **Metas detalladas** — auto de Google, bolardos, postes, calzada, señalización,
  arquitectura, naturaleza y un detalle fino
- **Pistas vivas** — parque automotor (marcas y transporte típicos), flora
  indicadora y animales visibles
- **División regional** — cómo cambia el paisaje dentro del propio país (40 países)
- **Confusiones comunes** — el vecino parecido y qué los separa (110 países)

## Recursos

- Selector de idioma ES / EN / PT con detección automática y memoria
- Búsqueda full-text sobre todo el contenido, sin acentos y con varias palabras
  (ej.: `minarete cuadrado`, `transformador gris`, `cigüeña`, `dacia`, `llama`)
- Filtros por región, lado de manejo y nivel de dificultad
- Tema claro y oscuro, con preferencia guardada en el navegador
- Enlace directo a cada país por URL (`index.html#/brazil`)
- Atajos: `/` enfoca la búsqueda · `←` `→` navegan entre países · `Esc` cierra

## Estructura

```
index.html
assets/
  css/style.css
  js/
    data-europe.js     47 territorios  (contenido base, en portugués)
    data-asia.js       27
    data-americas.js   18
    data-africa.js     14
    data-oceania.js     5
    data-extra.js      pistas vivas (parque, flora, fauna) de los 111
    guides.js          14 guías transversales
    guides-i18n.js     guías en ES y EN
    i18n-ui.js         textos de interfaz en los 3 idiomas
    i18n-es.js         contenido de países en español
    i18n-en.js         contenido de países en inglés
    app.js             interfaz
```

## Cómo funciona el multiidioma

El portugués es la **base**: vive en los `data-*.js`. Las capas `i18n-es.js` e
`i18n-en.js` se fusionan por `id` sobre esa base en tiempo de ejecución. Si un
campo falta en una capa, cae automáticamente al portugués en vez de romperse —
por eso se pudo traducir por etapas con el sitio siempre funcionando.

Lo mismo aplica a `data-extra.js`: se mezcla sobre los países base, así que las
pistas vivas se editan sin tocar los archivos originales.

## Editando el contenido

Cada país es un objeto en los `data-*.js`. Los campos aceptan HTML simple (`<b>`
para destacar). Al modificar cualquier archivo de `assets/`, incrementá el número
de `?v=` en las etiquetas `<script>` y `<link>` de `index.html` para evitar que
el navegador sirva la versión cacheada.

Cada `git push` a `main` republica el sitio en Vercel automáticamente.

## Sobre la precisión

Las metas cambian: Google refotografía países periódicamente, y detalles como el
vehículo de captura, la calidad de imagen y la señalización pueden haber cambiado
desde la última cobertura. Las pistas de **infraestructura y escritura** son las
más estables; las de **cámara y vehículo**, las más volátiles.

Créditos de banderas: [flagcdn.com](https://flagcdn.com).
