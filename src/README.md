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
