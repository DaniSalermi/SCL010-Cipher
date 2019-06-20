# Bienvenido a TextSecure

Hola, si es la primera vez que entras a **TextSecure**, y quieres aprender sobre nosotros y nuestra app, continúa leyendo.

# Cifrado César:

En criptografía, el cifrado **César**, también conocido como **cifrado por desplazamiento**, **código de César** o **desplazamiento de César**, es una de las técnicas de "Cifrado (criptografía)" más simples y más usadas. Es un tipo de cifrado por sustitución "Cifrado por sustitución") en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

Si deseas continuar leyendo sobre el cifrado César Haz [click aquí](https://en.wikipedia.org/wiki/Caesar_cipher).

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

# Proceso y decisiones de diseño

Text Secure se creó pensando en los colaboradores que cuya comunicación se basa principalmente en el correo electrónico, pero que necesitan encriptar sus comunicaciones por motivos de seguridad.

### Colores

Es una página seria, confiable y sobretodo segura. Su color principal es el turquesa debido a que según la [psicología del color](http://www.psicologiadelcolor.es/project/psicologia-del-color-azul-turquesa/), este representa la protección.

### Página de inicio

En primer lugar se tiene una página de inicio que da una pequeña introducción de que hace y cómo trabaja el aplicativo. Y si el usuario desea ver más información, también puede hacerlo mediante el botón ver instrucciones. A continuación se ubica un botón de continuar que al hacerle click manda al usuario a la siguiente página o como a mi me gusta llamarla (la página de encriptación).

### Página de encriptación

En la página de encriptación lo primero que el usuario debe introducir es el offset (número de desplazamientos) el mismo debe ser conocido por ambos usurios ya que será su número secreto. Pueden hablarlo previamente a la entrada del espacio laboral y cambiarlo de manera diaria para una mejor seguridad.
El Offset de Text secure funciona para números positivos enteros.

Luego se ubica un primer cuadro de texto donde se debe introducir el mesaje a codificar o a decodificar y al hacerle click al botón correspondiente el programa arroja el resultado en un nuevo cuadro de texto.

Finalmente el usuario tiene un botón de copiar con el que puede copiar el resultado obtenido para enviarlo a su coworker, y un botón de limpiar para debar vacíos ambos cuadros de texto de manera mucho más rápida.

# Nuestros usuarios

Text Secure está dirigido a los colaboradores de empresas rígidas o donde se sientan vulnerados, sirve para solucionar temas de protección y seguridad en el caso de hablar temas sensibles dentro del entorno laboral y puede ser usudo con otro fines recreativos con amigos y familiares, aunque este no es su principal fin.

Ayuda a sentirte más protegido en caso de que tu seguridad se esté viendo vulnerada o interceptada por terceros. Y para usarlo son solo 3 sencillos pasos. Por lo que lo hace amigable con el usuario.

# Proyecto: Cifrado César

## Información sobre el proyecto de Laboratoria

[Laboratoria/SCL010-Cipher](https://github.com/Laboratoria/SCL010-Cipher)

## Requerimientos

- [x] `README.md` incluye info sobre proceso y decisiones de diseño.
- [x] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
- [x] `README.md` explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
- [x] Usa VanillaJS.
- [x] No utiliza `this`.
- [x] Implementa `cipher.encode`.
- [x] Implementa `cipher.decode`.
- [ ] Pasa linter con configuración provista.
- [ ] Pasa pruebas unitarias.
- [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un mínimo del 50% de _branches_.
- [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el cifrado/descifrado.
- [x] Interfaz permite escribir un texto para ser cifrado.
- [x] Interfaz muestra el resultado del cifrado correctamente.
- [x] Interfaz permite escribir un texto para ser descifrado.
- [x] Interfaz muestra el resultado del descifrado correctamente.

## Planificación, GitHub, Trello y Figma

[Cifrado César_compressed (2).pdf](https://www.notion.so/12258bfbfee64a74a97092c1e4269325#e70c7ff0a18a4e189ab10da8bf66a943)

[DaniSalermi/SCL010-Cipher](https://github.com/DaniSalermi/SCL010-Cipher)

[Trello Caesar Cipher](https://trello.com/b/2CV9xp3K/proyecto-cifrado-c%C3%A9sar-daniela-salermi)

## Fuentes de información y estilos usados para la realización del proyecto

### CSS

[A Complete Guide to Grid | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

[A Complete Guide to Grid | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

### HTML

[window](https://developer.mozilla.org/es/docs/Web/API/Window)

[Element.setAttribute](https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute)

[- HTML | MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/textarea)

### Hero Banner:

[CSS background-image property](https://www.w3schools.com/cssref/pr_background-image.asp)

[Tryit Editor v3.6](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_hero)

### Familia de la fuente: Roboto

[Google Fonts](https://fonts.google.com/?selection.family=Roboto)

### README (Editor de .md)

[StackEdit](https://stackedit.io/app#)

### Operador ternario para evaluar existencia de espacios en el mensaje

[Operador condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator)

[Operador condicional ternario en JavaScript](https://devcode.la/tutoriales/operador-ternario-javascript/)

### Código ASCII

[El código ASCII Completo](https://elcodigoascii.com.ar/)

### Copiar al portapapeles (Botón copiar)

[Select and Copy input text](https://stackoverflow.com/questions/36210862/select-and-copy-input-text-onclick)

### Arrow Functions

[Arrow Functions en JavaScript](https://ed.team/blog/arrow-functions-en-javascript)
