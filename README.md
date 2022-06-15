<div style="display: flex; justify-content: center;">
    <img style="margin: 10px auto; width: 90%; border-radius: 25px;" src="https://www.linkpicture.com/q/dc-kenway-fw.png"/>
</div>

<br>

>discord-kenway-handler es un framework de la librería [Discord.js@13.8+](https://www.npmjs.com/package/discord.js) que te ayudará a crear tu bot en Discord App utilizando sus últimas funciones y opciones disponibles para el desarrollo de tu bot de la manera más simplificada y moderna posible, completamente en español.
<br>
<br>

## 🌀 ¿Por qué usar?

* No requieres evento messageCreate para crear comandos.
* Tu código es sostenible y de sencillo mantenimiento al lograr dividir tu código por archivos.
* Usas la última versión disponible de Discord.js con todas sus clases, propiedades, métodos directamente integrados en este Framework, esto quiere decir que no tendrás que llamar la librería discord.js para traer clases, propiedades o métodos ya que este framework los exporta directamente para que tu código no se extienda más de lo requerido haciendolo más óptimo.
* Funciones autónomas, como crear estados para tu bot que cambien automáticamente cada X tiempo.
* Completamente en español.
* Uso intuitivo del framework: Es fácil de usar y de aprender.
* Constante crecimiento: El Framework recibe soporte y mantenimiento para solución de posibles fallos o implementación de nuevas funciones.
* Escrito en TypeScript.
* Compatible con TypeScript.

## ⚙️ Actualización: v1.1.2

Información de la nueva versión del paquete:

```
 • Solución de errores pequeños.
 • Optimización de funciones de creación de comandos.
```

##### [Ver Historial de Cambios](https://github.com/AndyRuix1/discord-kenway-handler/blob/main/CHANGELOG.md)
<br>

# 📇 Índice
Bienvenido/a, esta es la guía para navegación en la página.
> * [Instalación](#📥-instalación)
> * [Instanciar Nuevo Bot](#🛠-instanciar-un-nuevo-bot)
> * [Creación de Comandos](#🛠️-creación-de-comandos)
> * [Creación de Eventos](#🛠️-creación-de-un-evento)
> * [Clases Especiales](#🔅-clases-especiales)
> * * [Ventana](#ventana)
> * [Notas Adicionales](#⚠️-notas-adicionales)
> * [Reportar problema](#🐛-¿problemas--bugs)
> * [Equpo de Desarrollo](#🔩-desarrolladores)

<br>
<br>

# 📥 Instalación:
```console
$ npm i discord-kenway-handler
```
## 📦 Requerimiento del package:

### JavaScript:

```js
const kenwayDiscord = require('discord-kenway-handler');
```

### ES Import:

```js
import kenwayDiscord from 'discord-kenway-handler'; 
```

  

# 🛠 Instanciar Un Nuevo Bot.

Para inicializar un nuevo bot, es necesario insertar algunos datos necesarios para su correcto funcionamiento.
Para iniciar un bot necesitamos:
* Un Token ([Obtener](https://discord.com/developers/applications))
* Un ID ([Obtener](https://discord.com/developers/applications))
* Una dirección de carpeta para nuestros comandos (opcional)
* Una dirección de carpeta para nuestros eventos (opcional)
* Intents que dependerán de tu requerimiento para el bot.
* Partials que dependerán de tu requerimiento para el bot.
<br>
Hay algunas opciones adicionales muy útiles que puedes utilizar para sacarle el máximo provecho a tu bot. 

## 📑 Ejemplos


Para iniciar tu bot, utilizamos el constructor 'Client'.
Es necesario utilizar la siguiente estructura en tu archivo _index.js_ o _index.ts_:

```javascript
const { Client } = require('discord-kenway-handler');
const path = require('node:path');

new Client({
    token: '1234567890abcdefg', //Aquí token de tu bot.
    id: '1234567890', // Aquí ID de tu bot.
    comandos: path.join(__dirname, 'comandos'), // Dirección de la carpeta donde estarán tus comandos, puedes usar 'false' en caso de no necesitar.
    eventos: path.join(__dirname, 'eventos'), // Dirección de la carpeta donde estarán tus eventos, puedes usar 'false' en caso de no necesitar.
    intents: ['GUILDS'], //Puedes agregar los intents que necesites, si  necesitas todos, puedes usar 'ALL'. Dejar arreglo vacio en caso de no utilzar.
    partials: ['MESSAGE'], //Puedes agregar los partials que necesites, la propiedad es opcional.
});
```
Si necesitas utilizar "presence's" para tu bot, hay una propiedad opcional donde puedes agregar múltiples presence's 
junto con un tiempo determinado. Este tiempo será la frecuencia con la que tus presence's cambiarán automáticamente al azar.
<br>
**Usando presences:**

```js
const { Client } = require('discord-kenway-handler');
const path = require('node:path');

new Client({
    token: '1234567890abcdefg',
    id: '1234567890',
    comandos: path.join(__dirname, 'comandos'), 
    eventos: path.join(__dirname, 'eventos'),
    intents: ['GUILDS'],
    partials: ['MESSAGE'],
    setPresence: {
        tiempo: 15000,
        presence: [{
            estado: 'online', //idle, dnd, online, invisible.
            afk: false, //Propiedad opcional.
            shardId: 123, //Propiedad opcional, puede ser número o arreglo de numeros.
            actividad: {
                nombre: 'Moto GP', //Nombre que se mostrará en el estado de tu bot.
                tipo: 'compitiendo' //Los tipos de actividades van en español.
            }
        }]
    }
});
```
Creación de un bot con solo propiedades necesarias:

```javascript
const { Client } = require('discord-kenway-handler');

new Client({
    token: '1234567890abcdefg',
    id: '1234567890',
    comandos: false,
    eventos: false,
    intents: []
});
```

⚠️ <mark>En caso de utilizar TypeScript, solo cambiamos el modo de importación a módulo ES.</mark>

# 🛠️ Creación de Comandos

Una vez establecemos nuestra dirección de la carpeta que contiene nuestros comandos, es momento de crear algunos. ¡Vamos!
<br>
Para la creación de un comando, es necesario utilizar el constructor 'Comando', para crear un comando necesitamos:

* Un nombre.
* Una breve descripción.
* Opciones para nuestro comando. (opcional).
* Sub Comandos para nuestro comando. (opcional).
* Una función: será la ejecutada cuando nuestro comando sea invocado.
<br>

## 📑 Ejemplos

> ubicacion de ejemplo: mi_bot/comandos/comando.js

**Ejemplo sin usar opciones ni sub comandos:**

```javascript
const { Comando } = require('discord-kenway-handler');

module.exports = new Comando({
    nombre: 'hola',
    descripcion: 'Te saludaré',
    ejecutar: async (client, interaction) => {
        interaction.reply(`¡Hola ${interaction.user}!`);
    }
});
```

**Ejemplo usando opciones:**

```javascript
const { Comando } = require('discord-kenway-handler');

module.exports = new Comando({
    nombre: 'saludar',
    descripcion: 'Te saludaré',
    opciones: [{
        tipo: 'mencion',
        requerido: true,
        nombre: 'persona',
        descripcion: 'saluda una persona',
    }],
    ejecutar: async (client, interaction) => {
        const persona = interaction.options.getMentionable('persona');
        interaction.channel.send(`¡Hey ${persona}! ¡${interaction.user} te saluda!`);
    }
});
```

**Ejemplo usando opciones con la propiedad 'tipo' establecida como 'grupo':**

```javascript
const { Comando } = require('discord-kenway-handler');

module.exports = new Comando({
    nombre: 'obtener',
    descripcion: 'Obtener datos de un usuario o canal.',
    opciones: [{
        nombre: 'datos',
        tipo: 'grupo',
        requerido: true,
        descripcion: 'saluda una persona',
        opciones: [{
                nombre: 'usuario',
                tipo: 'usuario',
                descripcion: 'Obtener datos de un usuario.',
                requerido: true
            },
            {
                nombre: 'canal',
                tipo: 'canal',
                descripcion: 'Obtener datos de un canal.',
                requerido: true
            },
        ]
    }],
    ejecutar: async (client, interaction) => {
        const response = interaction.options.getUser('usuario') ?? interaction.options.getChannel('canal');
        if (response.username) return interaction.reply(`Usuario: ${response.username}#${response.discriminator}\nID: ${response.id}\nBot: ${response.bot  ?  'Sí'  :  'No'}`);
        interaction.reply(`Canal: ${response.name}\nID: ${response.id}\nNSFW: ${response.nsfw  ?  'Sí'  :  'No'}`);
    }
});
```

**Ejemplo de uso de Sub Comandos:**

```javascript
const { Comando } = require('discord-kenway-handler');
module.exports = new Comando({
    nombre: 'fotos',
    descripcion: 'obtener imagenes random por tamaño.',
    sub_comandos: [{
            nombre: '1000x1000',
            descripcion: 'obtener foto random de 1000x1000.',
        },
        {
            nombre: '500x500',
            descripcion: 'obtener foto random de 500x500',
        },
        {
            nombre: 'personalizado',
            descripcion: 'obtener foto con medida personalizada',
            opciones: [{
                tipo: 'cadena',
                nombre: 'tamaño',
                requerido: true,
                descripcion: 'tamaño de la imagen'
            }]
        }
    ],
    ejecutar: async (client, interaction) => {
        const subcmd = interaction.options.getSubcommand();
        const size = interaction.options.getString('tamaño');
        if (subcmd == '500x500') return interaction.reply(`imagen 500x500: https://picsum.photos/500/500`);
        if (subcmd == '1000x1000') return interaction.reply('imagen 1000x1000: https://picsum.photos/1000/1000');
        if (subcmd == 'personalizado') return interaction.reply(`imagen ${value}: https://picsum.photos/${size.split('x')[0]}/${size.split('x')[1]}`);
    }
});
```

* ❗ <mark>No se pueden usar opciones y sub comandos a la vez.</mark>
* ❗ <mark>Las opciones solo pueden contener opciones en su interior mientras la propiedad 'tipo' sea 'grupo'.</mark>
* ❗ <mark>ninguna propiedad 'nombre' puede contener espacios ni mayúsculas.</mark>
* ❗ <mark>Entre todas las propiedades, sumando sus carácteres lo máximo son 4000.</mark>

# 🛠️ Creación de un Evento
Una vez configurada tu carpeta donde contendrás tus eventos en tu archivo _index_, es momento
de crear algunos. ¡Vamos!
<br>
Para la creación de un evento, es necesario utilizar el constructor 'Evento', para crear un evento necesitamos:
* Un nombre.
* Una función: Será ejecutada cuando nuestro evento sea invocado.

## 📑 Ejemplos

> ubicacion de ejemplo: mi_bot/eventos/evento.js

**Ejemplo con evento 'messageCreate':**
```js
const { Evento } = require('discord-kenway-handler');

module.exports = new Evento({
    nombre: 'messageCreate',
    ejecutar: (client, message, args) => {
        if (args[0].toLowerCase() == 'hola') {
            message.channel.send(`¡Hola ${message.author}!`);
        };
    }
});
```
<br>

**Ejemplo con evento 'channelCreate':**

```js
const { Evento } = require('discord-kenway-handler');

module.exports = new Evento({
    nombre: 'channelCreate',
    ejecutar: (client, channel) => {
        if (channel.type == 'GUILD_TEXT') channel.send('¡Primer mensaje enviado aquí!');
    }
});
```
* ❗ <mark>Los parámetros devueltos dependerán del tipo de comando, no te preocupes, se autocompletarán dependiendo del evento.</mark>
* ❗ <mark>El primer parámetro **siempre** es _client_</mark>

# 🔅 Clases Especiales
Hay clases especiales para bots especiales.
<br>
Estas clases especiales facilitarán algunas funciones nativas de discord.js sin alterar las clases originales, esto quiere decir que puedes usar este tipo de clases especiales o usar las nativas de discord.js sin que tu proyecto se vea afectado.
<br>
Esto es opcional, las clases especiales no son necesarias para que tu proyecto funcione, solo son 'herramientas' que pueden facilitar o simplificar las clases nativas de discord.js.

## Ventana
¿Te gustan las nuevas ventanas (modals) ?<br>
Esta clase especial te ayuda a crear estas ventanas de manera más simple sin usar muchas lineas en tu código, almenos eso intentamos.<br>
Para crear una ventana, necesitamos:
<br>
* Un Título.
* Un ID.
* Componentes.
<br>

### 📑 Ejemplos

Para crear una ventana utilizamos la clase 'Ventana'.<br>
**Ejemplo de una ventana:**

```js
const miVentana = new Ventana({
    id: 'window.names', // Nuestro ID debe ser único de máximo 100 carácteres.
    titulo: 'Escribir Nombres', //Nuestro título no puede superar los 45 carácteres.
    componentes: [ //Nuestra lista de componentes no puede superar los 5.
        {
            tipo: 'INPUT', //Depende del tipo, se utilizarán distintas propiedades.
            estilo: 'CORTO', // CORTO o PARRAFO son los disponibles con tipo 'INPUT'
            id: 'window.names.woman', //Nuestro ID debe ser único de máximo 100 carácteres.
            label: 'Nombres de mujer', //Nuestro Label debe tener mínimo 1 carácter y no superar los 45 carácteres.
            requerido: true, //Propiedad opcional.
            placeholder: 'Escribe nombres de mujeres aquí', // Con tipo 'INPUT' es posible agregar placeholder, máximo 100 carácteres, propiedad opcional.
            valorDefecto: 'Valeria, gloria, Stefany, Valentina, Gloria, Sandra, Susana, ', //Valor por defecto con el que aparecerá nuestro tipo 'INPUT', máximo 4000 carácteres, mínimo 50, propiedad opcional.
            largoMax: 500, // Máximo texto que se podrá agregar a nuestro texto tipo 'INPUT'
            largoMin: 50 //Mínimo texto que se podrá agregar a nuestro texto tipo 'INPUT'
        },
        {
            tipo: 'INPUT',
            estilo: 'CORTO',
            id: 'window.names.men',
            label: 'Nombres de hombre',
            requerido: true,
            placeholder: 'Escribe nombres de hombres aquí',
            valorDefecto: 'John, Sam, Frank, Daniel, Sandro, Joel, Carlos, Francisco, José, Antonio, ',
            largoMax: 500,
            largoMin: 50
        }
    ]
}).crear(); // Al terminar de ajustar, es necesario usar este método para crear nuestra ventana
```
<br>

**Ejemplo de una ventana en un comando:**

```js
const { Comando, Ventana } = require('discord-kenway-handler');
module.exports = new Comando({
    nombre: 'edad',
    descripcion: 'dime tu edad',
    ejecutar: function (client, interaction) {

        const miVentana = new Ventana({
            id: 'window.age',
            titulo: 'Edad ',
            componentes: [
                {
                    tipo: 'INPUT',
                    estilo: 'CORTO',
                    id: 'window.age.value',
                    label: 'Edad',
                    requerido: true,
                    placeholder: 'Escribe tu edad aquí',
                },
            ]
        }).crear();

        interaction.showModal(miVentana);
    }
});
```

* ✅ <mark>**TIP:** Se recomienda crear las ventanas fuera del método 'ejecutar', para que cuando tu proyecto sea iniciado, las ventanas sean leídas y puedas anticipar los posibles errores. <br>
También, te ayuda a reducir el consumo de recursos ya que las ventanas son leídas cada vez que son llamadas, esto quiere decir que cada vez que se use un comando la ventana debe ser leída y esto consumirá recursos adicionales.
</mark>

# 📚 Documentación.
* Dale un vistazo a la documentación [aquí](https://github.com/AndyRuix1/discord-kenway-handler/blob/main/DOCS.md)

# ⚠️ Notas Adicionales

* El Framework exporta todas las funciones, métodos, propiedades e interfaces de Discord.js, así que puedes llamarlas directamente desde el módulo sin requerir a Discord.js directamente.
* Algunos limitantes del Framework son limitantes establecidos por Discord, así que no pueden ser removidos a menos que Discord extienda estos límites.

# 🐛 ¿Problemas / Bugs?
> Por favor, reporta en el repositorio del proyecto [aqui](https://github.com/AndyRuix1/discord-kenway-handler/issues) para una pronta solución.

# 🔩 Desarrolladores
* [AndyKenway#2531](https://discordapp.com/users/340757879915151361)

<br>
<br>

###### Basado en discord.js, se utiliza el módulo original para funcionamiento de este framework.

**Gracias por utilizar.**
<br>
<div style="display: flex; justify-content: center; ">
    <img style="border-radius: 23px; width: 50%" src="https://media.giphy.com/media/caD7wkiDRP307AY9Bb/giphy.gif"/>
</div>
