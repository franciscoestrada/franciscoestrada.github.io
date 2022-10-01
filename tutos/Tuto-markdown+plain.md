
# Markdown
- [Markdown](#markdown)
  - [¿Qué es Markdown?](#qué-es-markdown)
  - [¿Porqué usar Markdown?](#porqué-usar-markdown)
  - [Sintaxis de Markdown](#sintaxis-de-markdown)
    - [Encabezados](#encabezados)
    - [Estilos](#estilos)
    - [Listas desordenadas](#listas-desordenadas)
    - [Listas ordenadas](#listas-ordenadas)
    - [Vínculos](#vínculos)
    - [Vínculos con título o *tooltip*](#vínculos-con-título-o-tooltip)
    - [Imágenes](#imágenes)
    - [Imagen con vínculo](#imagen-con-vínculo)
    - [Video](#video)
    - [Bloque de código](#bloque-de-código)
    - [Código en línea de texto](#código-en-línea-de-texto)
    - [Tablas](#tablas)
    - [Expresiones Matemáticas](#expresiones-matemáticas)
  - [Editores en línea](#editores-en-línea)
  - [Extensiones para VSCode](#extensiones-para-vscode)
  - [Extensiones de Chrome](#extensiones-de-chrome)

## ¿Qué es Markdown?

* Markdown es un lenguaje de marcado ligero usado 
  para dar formato a documentos de texto simple, creado por 
  John Gruber en 2004.
* La sintaxis de Markdown está diseñada para ser legible 
  aún sin usar un previsualizador para el documento, 
  sin usar etiquetas u otras instrucciones de formato.
* Es un archivo de texto simple con extensión **.md**
 
## ¿Porqué usar Markdown?

1. Puede ser usado para elaborar
	* sitios web
	* documentos de Word
	* PDF
	* libros electrónicos
	* mensajes de correo electrónico
	* presentaciones
	* documentación técnica y científica

 
2. Markdown es independiente de plataformas,  
   cualquier Sistema Operativo sirve
   para generar el documento.

3. A diferencia de documentos hechos con 
   aplicaciones que pueden quedar obsoletas, 
   Markdown es legible en cualquier editor de texto.

 &nbsp;&nbsp;

## Sintaxis de Markdown
A continuación se muestran las reglas básicas de este lenguaje de marcado y su representación al convertirlo a HTML.

 &nbsp;&nbsp;

### Encabezados
|   HTML    | Markdown    |
| :-------: | :---------- |
# H1 &nbsp;&nbsp;&nbsp; `# H1`  <!-- omit in toc -->
## H2   &nbsp; &nbsp; &nbsp;&nbsp; `## H2`  <!-- omit in toc -->
### H3  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `### H3`  <!-- omit in toc -->
#### H4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `#### H4`  <!-- omit in toc -->

 
<br>&nbsp;

### Estilos
|   HTML    | Markdown    |
| :-------: | :---------- |
| *Itálico* | `*Itálico*` |
| _Itálico_ | `_Itálico_` |
| **Bold**  | `**Bold**`  |
| __Bold__  | `__Bold__`  |

<br>&nbsp;

### Listas desordenadas
Cada ítem se inicia con un guión y espacio 
Para listas anidadas, dos espacios antes del guión 
Los dos espacios se pueden sustituir por una tabulación.

- Ítem 1  `- Ítem 1, lista desordenada`
- Ítem 2 `- Ítem 2, lista desordenada`
  - Sub ítem 1 &nbsp; `  - Subítem 1`
  
<br>&nbsp; 

### Listas ordenadas
Cada ítem se inicia con un número, punto y espacio. 
Para listas anidadas, agregar dos espacios o una tabulación antes del número o guión
Se pueden combinar ambos tipos de listas 
1. Ítem 1 `1. Ítem 1`
2. Ítem 2 `1. Ítem 2`
   - Sub ítem 1 `- Sub ítem 1`

 <br>&nbsp;

### Vínculos
Se crean usando dos elementos: corchetes seguidos por paréntesis. 
Los corchetes contienen el texto y los paréntesis el vínculo.

`[descripción](url)`

Ejemplo <br>
`[Misión Artemisa a la Luna](https://www.nasa.gov/artemis-1)`

Resultado <br>
[Misión Artemisa a la Luna](https://www.nasa.gov/artemis-1)

 <br>&nbsp;

### Vínculos con título o *tooltip*

Entre los paréntesis del vínculo se agrega un título que se muestra al colocar el cursor sobre él.

`[descripción](url "título opcional")`

Ejemplo

`[Buscar en Google](https://google.com/ "Ir al buscador Google")`

Resultado 

[Buscar en Google](https://google.com/ "Ir al buscador Google")

<br>&nbsp;
 
### Imágenes

Tiene la misma estructura que el vínculo, con la diferencia que se agrega un símbolo de admiración al inicio, y el enlace dirige a una imagen.

`![descripción](url)`

Algunas versiones de Markdown permiten indicar las dimensiones de la imagen

`![descripción w:200 h:200](url)`

 
Ejemplo

`![Github w:200 h:200](imagen/dojocat.jpg "Un gato ninja")`


![Github w:200 h:200](imagen/dojocat.jpg "Un gato")

<br>&nbsp;

### Imagen con vínculo

Se combinan los códigos de imagen y vínculo:

`[![descripción y/o tamaño de imagen](url imagen "título")](url vínculo)`

 
Ejemplo

`[![Logo](imagen/E3md.png "Blog")](http://blog.franciscoestrada.mx/inicio/)`

Resultado

[![Logo](imagen/E3md.png "Blog")](http://blog.franciscoestrada.mx/inicio/)

 <br>&nbsp;

### Video
<!-- _class: lead invert-->
En lugar de un sitio web, la imagen direcciona a un video.

`[![descripción](url de imagen "título")](url de video) `

Ejemplo

`[![Video](imagen/sddefault.jpg "Clic en la imagen para ir al video")](https://www.youtube.com/watch?v=oa37PFUWY-8) `

Resultado

[![Video](imagen/sddefault.jpg "Clic en la imagen para ir al video")](https://www.youtube.com/watch?v=oa37PFUWY-8)  


<br>&nbsp;

### Bloque de código
Colocar tres acentos graves ` ``` ` al inicio y final, e indicar el lenguaje usado en el código.

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
<br>&nbsp;

### Código en línea de texto

Agregar un acento grave al inicio y final del código a resaltar, como  &#96;`<p style="text-alig: center;">`&#96; en la línea de texto.

Ejemplo
> Se recomienda agregar el atributo *lang="es"* a la etiqueta *<html>* de la siguiente manera `<html lang="es">` para indicar que se usa el idioma español en la página.

<br>&nbsp;

### Tablas

La primera fila es el encabezado de la tabla
* Cada celda se separa con una línea vertical o *pipe* `|celda1|celda2|`
* En la segunda fila se colocan guiones para separar el encabezado
* Como opción, a los guiones se les agregan dos puntos a los extremos para indicar el alineado del contenido de las celdas:
  *  ` |-----| ` Alineado por omisión
  *  ` |:----| ` Alineado a la izquierda
  *  ` |----:| ` Alineado a la derecha
  *  ` |:---:| ` Centrado


<br>
Ejemplo de tabla

No es necesario que las líneas verticales coincidan en cada fila, al convertirse a HTML se alinearán correctamente.

```md
| Código Markdown |   HTML    |
| :-------------: | :-------: |
|   `*itálica*`   | *itálica* |
|   `_itálica_`   | _itálica_ |
|   `**bold**`    | **bold**  |
|   `__bold__`    | __bold__  |

```
 

Resultado


| Código Markdown |   HTML    |
| :-------------: | :-------: |
|   `*itálica*`   | *itálica* |
|   `_itálica_`   | _itálica_ |
|   `**bold**`    | **bold**  |
|   `__bold__`    | __bold__  |
 
<br>&nbsp;
 
### Expresiones Matemáticas

Para generar una fórmula en línea de texto, se rodea con `$...$`, y para una notación en bloque se usan signos dobles `$$...$$`

Ejemplo 1
`$ax^2+bc+c$`
En una línea de texto se mostrará así: $ax^2+bc+c$

 
Ejemplo 2


```
$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$
```
El resultado se compila de esta manera:

$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$

<br>&nbsp; 

## Editores en línea

- [Dillinger](https://dillinger.io/) exporta en HTML, PDF y Markdown
- [StackEdit](https://stackedit.io/app#) Exporta en HTML y Markdown
- [StackEditPro](https://stackeditpro.io/app#) Exporta en HTML y Markdown
- [Pandoc](https://pandoc.org/try/) Exporta a múltiples formatos
- [Markmap, editor en línea](https://markmap.js.org/repl) Exporta mapas mentales en HTML y SVG
- [Le PoireauKinorama](https://lolobobo.fr/poireau/index-en.html) Convierte enlaces de video HTML a su equivalente en Markdown.

 
## Extensiones para VSCode
- [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) 
Agrega atajos de teclado, autocompletar, generación de tablas de contenido y más
- [Marp](https://marp.app/) 
  Exporta presentaciones en HTML, PDF y PowerPoint
- [Markmap](https://markmap.js.org/) 
  Exporta mapas mentales en formato HTML y SVG

 
## Extensiones de Chrome
- [MD Reader](https://chrome.google.com/webstore/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) 
  Visualiza archivos MD en línea, y locales
- [Markdown Here](https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa?hl=es)
   Escribir correo electrónico con Markdown. También compatible con Wordpress, Blogger, Evernote

&#169; Francisco Estrada R, 2022 












