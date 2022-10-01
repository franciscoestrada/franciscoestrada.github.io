# Markdown

---
## ¿Qué es Markdown?

- Markdown es un lenguaje 
  de marcado ligero usado 
  para dar formato a documentos 
  de texto simple, creado por 
  John Gruber en 2004.

- La sintaxis de Markdown 
  está diseñada para ser 
  legible aún sin usar un 
  previsualizador para el 
  documento, sin usar etiquetas 
  u otras instrucciones de formato.

- Es un archivo de texto simple 
  con extensión **.md**
---
## ¿Porqué usar Markdown?

---
1. Puede ser usado para elaborar
	* sitios web
	* documentos de Word
	* PDF
	* libros electrónicos
	* mensajes de correo electrónico
	* presentaciones
	* documentación técnica y científica

---
2. Markdown es independiente de plataformas, 
   cualquier Sistema Operativo sirve 
   para generar el documento.

---
3. A diferencia de documentos hechos 
   con aplicaciones que pueden quedar obsoletas, 
   Markdown es legible en cualquier editor de texto.

---
## Sintaxis de Markdown
A continuación se muestran las reglas básicas de este lenguaje de marcado y su representación al convertirlo a HTML.

---
### Encabezados

-  `# H1`
 `## H2`
 `### H3`
 `#### H4`

---

### Estilos

- *Itálico* | `*Itálico*`
_Itálico_ | `_Itálico_`
**Bold**  | `**Bold**`
__Bold__  | `__Bold__`
| cita    | ` > cita`

---
### Listas desordenadas
Cada ítem se inicia con un guión y espacio 
Para listas anidadas, dos espacios antes del guión 
Los dos espacios se pueden sustituir por una tabulación.

-  `- Ítem 1`
  `- Ítem 2`
  
---
### Listas ordenadas
- `1. Ítem 1`
  `2. Ítem 2`


---
### Vínculos

- `[descripción](url)`

---

#### Vínculos con título o *tooltip*

- `[descripción](url "título opcional")`

---
### Imágenes

- `![descripción](url)`
`![descripción w:200 h:200](url)`

---
### Imagen con vínculo

- `[![descripción y/o tamaño de imagen](url imagen "título")](url vínculo)`


---
### Video
- `[![descripción](imagen)](url del video) ` 


---
### Bloque de código
- Tres acentos graves ` ``` `
 al inicio y final del código e
 indicar el lenguaje usado.
``` html
``` html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Cabeza</title>
</head>
<body>
    <h1>Cuerpo</h1>
    <p>Párrafo</p>
</body>
</html>
`` `
```
---
### Código en línea de texto

- Usar un acento grave al inicio 
y final del código  &#96; `<html lang="es">` &#96;

---
### Tablas

La primera fila es el encabezado de la tabla
* Cada celda se separa con 
  una línea vertical o *pipe* `|celda1|celda2|`
* En la segunda fila se colocan 
  guiones para separar el encabezado
* Como opción, a los guiones 
  se les agregan dos puntos 
  a los extremos para indicar 
  el alineado del contenido de las celdas:
  *  ` |-----| ` Alineado por omisión
  *  ` |:----| ` Alineado a la izquierda
  *  ` |----:| ` Alineado a la derecha
  *  ` |:---:| ` Centrado

---

```md
| Código Markdown |  HTML |
| :--------:  | :-------: |
| `*itálica*` | *itálica* |
| `_itálica_` | _itálica_ |
| `**bold**`  | **bold**  |
| `__bold__`  | __bold__  |

```
---
### Expresiones Matemáticas
- Se rodea con `$...$` en línea de texto,
  con `$$...$$` para representar en bloque 
- `$ax^2+bc+c$` 
  - La fórmula $ax^2+bc+c$  en un párrafo

- ``` md
    $$f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi$$
  ```
   - $$f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi$$ 
 

---

## Editores y Extensiones

---

## Editores y Extensiones
### Editores en línea

* [Dillinger](https://dillinger.io/) 
  Exporta en HTML, PDF y Markdown
* [StackEdit](https://stackedit.io/app#) 
  Exporta en HTML y Markdown
* [StackEditPro](https://stackeditpro.io/app#) 
  Exporta en HTML y Markdown
* [Pandoc](https://pandoc.org/try/) 
  Exporta a múltiples formatos
* [Markmap, editor en línea](https://markmap.js.org/repl) 
  Exporta mapas mentales en HTML y SVG
* [Le PoireauKinorama](https://lolobobo.fr/poireau/index-en.html)
  Enlaces de video HTML 
  a su equivalente en Markdown.

---
### Extensiones para VSCode
* [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) 
Agrega atajos de teclado, autocompletar, 
generación de tablas de contenido y más
* [Marp](https://marp.app/) 
  Exporta presentaciones en HTML, 
  PDF y PowerPoint
* [Markmap](https://markmap.js.org/) 
  Exporta mapas mentales 
  en formato HTML y SVG

---
### Extensiones de Chrome
- [MD Reader](https://chrome.google.com/webstore/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) 
  Visualiza archivos MD 
  en línea, y locales
- [Markdown Here](https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa?hl=es) 
  Para escribir correo electrónico 
  con Markdown. También compatible
   con Wordpress, Blogger, Evernote

---

## &#169; 
- &#169; Francisco Estrada R, 2022 














