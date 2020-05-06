# Markdown Links

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js] que lea y analice archivos en formato `Markdown`
para verificar los links que contengan y reportar algunas estadísticas.

## Objetivo

El objetivo práctico de este proyecto es que crear mi propia _library_ en JavaScript.

## Criterios de aceptación

### Arquitectura del proyecto 

```
.
├── README.md
├── package.json
├── index.js
└── src
  └── mdLinks.js
  └── utils.js
└── tests
  └── utils.spec.js
  └── mock-data.js
  └── md-files
```

### Planificación del proyecto

Kanban board en GitHub: 

![product-backlog-board](./readme-img/product-backlog.jpg)

### DFD de algoritmo

![DFD-for-algorithm](./readme-img/md-links.jpg)

### Documentación técnica

Actualmente, el programa no contempla los siguientes _edge cases_: 
Recursión (directory con otros directories);
Timeout errors; 
Una gran cantidad de links que pudiera provocar error en el fetch.

### Guía de usuario para instalación y uso

## Objetivos de aprendizaje

### Javascript
- [x] Uso de callbacks
- [x] Consumo de Promesas
- [x] Creación de Promesas
- [x] Módulos de JS
- [ ] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] Crear modules
- [x] Instalar y usar modules
- [x] npm scripts
- [ ] CLI

### Testing
- [x] Testeo de funciones
- [x] Testeo asíncrono
- [ ] Uso de librerías de Mock
- [x] Mocks manuales
- [ ] Testeo para múltiples OS

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting
