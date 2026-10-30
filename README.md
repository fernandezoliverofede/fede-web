# fedefernandezolivero.com — v7

Sitio web personal. Alojado en GitHub Pages con dominio personalizado `fedefernandezolivero.com`.

---

## Estructura de archivos

```
/
├── index.html                          ← Homepage EN (raíz, copia de /en/)
├── sitemap.xml
├── robots.txt
├── CNAME                               ← ⚠️ NO BORRAR — conecta el dominio personalizado
├── assets/
│   ├── css/style.css                   ← Hoja de estilos compartida
│   ├── js/main.js                      ← JavaScript compartido
│   └── img/
│       ├── hero.jpg
│       ├── hero-sm.jpg
│       ├── about.jpg
│       ├── approach.jpg
│       ├── logo-full-blue.png
│       ├── logo-full-white.png
│       ├── logo-icon-blue.png
│       └── logo-icon-white.png
├── en/
│   ├── index.html                      ← Homepage EN (/en/)
│   └── services/
│       ├── organizational-design/index.html
│       ├── leadership-excellence/index.html
│       ├── culture-change/index.html
│       └── executive-coaching/index.html
├── es/
│   ├── index.html                      ← Homepage ES (/es/)
│   └── services/
│       ├── diseno-organizacional/index.html
│       ├── excelencia-liderazgo/index.html
│       ├── cultura-cambio/index.html
│       └── coaching-ejecutivo/index.html
└── it/
    ├── index.html                      ← Homepage IT (/it/)
    └── services/
        ├── design-organizzativo/index.html
        ├── eccellenza-leadership/index.html
        ├── cultura-cambiamento/index.html
        └── coaching-esecutivo/index.html
```

---

## Cómo subir archivos a GitHub (sin línea de comandos)

### Primera vez: subir todo el sitio

1. Abrí tu repositorio en GitHub: `github.com/TU_USUARIO/TU_REPO`
2. Hacé clic en **"Add file"** → **"Upload files"**
3. Arrastrá todos los archivos y carpetas del ZIP a la ventana
4. En el campo "Commit changes", escribí algo como: `Deploy v7`
5. Hacé clic en **"Commit changes"**

> GitHub Pages publica automáticamente en 1-2 minutos. Visitá `https://www.fedefernandezolivero.com` para verificar.

---

### Actualizar un archivo existente

1. Navegá hasta el archivo en GitHub (por ejemplo: `en/index.html`)
2. Hacé clic en el ícono de lápiz ✏️ (arriba a la derecha del contenido)
3. Pegá el nuevo contenido
4. Hacé clic en **"Commit changes"**

---

### Subir carpetas nuevas (ej: una página nueva)

GitHub no permite crear carpetas vacías. Para subir una carpeta con archivos:

1. Hacé clic en **"Add file"** → **"Upload files"**
2. Arrastrá la carpeta completa (con su contenido) desde tu computadora
3. Confirmá el commit

---

## ⚠️ Reglas importantes

- **NUNCA borres el archivo `CNAME`** — es el que conecta `fedefernandezolivero.com` al repositorio. Si se borra, el sitio deja de funcionar con el dominio personalizado.
- **GitHub Pages tarda 1-2 minutos** en publicar cambios. Si no ves los cambios inmediatamente, esperá y recargá la página.
- Si ves un error 404 en páginas de servicios, verificá que la carpeta y el archivo `index.html` dentro de ella existan en el repositorio.

---

## URLs del sitio

| Idioma  | URL                                                  |
|---------|------------------------------------------------------|
| EN (raíz) | https://www.fedefernandezolivero.com/              |
| EN       | https://www.fedefernandezolivero.com/en/            |
| ES       | https://www.fedefernandezolivero.com/es/            |
| IT       | https://www.fedefernandezolivero.com/it/            |

### Páginas de servicios

| Servicio                | EN | ES | IT |
|------------------------|----|----|-----|
| Diseño Organizacional  | /en/services/organizational-design/ | /es/services/diseno-organizacional/ | /it/services/design-organizzativo/ |
| Excelencia Liderazgo   | /en/services/leadership-excellence/ | /es/services/excelencia-liderazgo/ | /it/services/eccellenza-leadership/ |
| Cultura y Cambio       | /en/services/culture-change/ | /es/services/cultura-cambio/ | /it/services/cultura-cambiamento/ |
| Coaching Ejecutivo     | /en/services/executive-coaching/ | /es/services/coaching-ejecutivo/ | /it/services/coaching-esecutivo/ |

---

## Contacto técnico

Para consultas técnicas sobre el sitio: fede@fedefernandezolivero.com
