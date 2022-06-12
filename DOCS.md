<div style="display: flex; justify-content: center;">
    <img style="border-radius: 23px; width: 90%" src="https://www.linkpicture.com/q/dc-kenway-docs_1.png"/>
</div>

<br>
<br>

# 📃 Documentación • discord-kenway-handler

¡Hola! Esta es la sección de documentación de discord-kenway-handler.
Aquí podrás saber los tipos de datos para llevar a cabo tu proyecto conociendo el framework en su totalidad.

# 📥 Instalación

```console
$ npm i discord-kenway-handler
```


# 🆕 Clases

## Client
Clase principal utilizada para la creación de un cliente nuevo.
* Se deben ingresar propiedades como opciones en el constructor.
> Interface: [CreateClient](#createclient)

```js
new Client(props);
```
| Propiedades | Tipo | Descripcion | Opcional
|---|---|---|---|
| props#_token_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Token de nuestro cliente obtenido en [discord developers](https://discord.com/developers/applications) | No
| props#_id_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | ID de nuestro cliente obtenido en [discord developers](https://discord.com/developers/applications) | No
| props#_intents_ | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[IntentsClient](#intentsclient)> | Intents que nuestro bot utilizará | No
| props#_partials_ | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[PartialsClient](#partialsclient)> | Partials que nuestro bot utilizará | Sí
| props#_comandos_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) o [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Dirección de carpeta donde están ubicados los comandos | No
| props#_eventos_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) o [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Dirección de carpeta donde están ubicados los comandos | No
| props#_setPresence_ | [SetPresenceOptions](#setpresenceoptions) | Propiedades adicionales para creación de presence en nuestro bot | Sí
* ❗ <mark> La propiedad 'eventos' y 'comandos' pueden establecerse como 'false' para omitir la dirección de carpetas. </mark>
* ⤵️ Propiedades de la propiedad 'setPresence'
| Propiedades | Tipo | Descripcion | Opcional
|---|---|---|---|
| tiempo | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | Tiempo en MS de la frecuencia con la que cambiarán nuestros presence | No
| presence | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[ClientPresence](#clientpresence)> | Presence's de nuestro bot | No
* ⤵️ Elemento de la propiedad 'presence'.

| Propiedades | Tipo | Descripcion | Opcional
|---|---|---|---|
| estado | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)<[ClientStatusPresence](#clientstatuspresence)> | Estado que se mostrará de nuestro bot | No
| shardId | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) o [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)[] | Shard ID para establecer, uno o varios | Sí
| afk | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Establecer estado AFK de nuestro bot | Sí
| actividad | [ActivityClientPresence](#activityclientpresence) | Propiedades adicionales para establecer la actividad de nuestro bot | No

* ⤵️ Propiedades dentro de la propiedad 'actividad':

| Propiedades | Tipo | Descripcion | Opcional
|---|---|---|---|
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Nombre de nuestra actividad | No
| tipo | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)<[ActivityTypes](#activitytypes)> | Tipo de actividad a mostrar | No
| url | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | URL de la actividad en caso de estar disponible | Sí


## Evento
Se utiliza para la creación de nuevos eventos.
* Se deben ingresar propiedades como opciones en el constructor.
> Interface: [CreateEvent](#createevent)

```js
new Evento(props);
```

| Propiedades | Tipo | Descripción | Opcional
|---|---|---|---|
|props#_nombre_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)  | Nombre del evento. | No

| Métodos | Parámetros | Descripción | Opcional | Retorno
|---|---|---|---|---|
|props#_ejecutar_ | [client](https://discord.js.org/#/docs/discord.js/stable/class/Client), ...args | Función a ejecutar cuando el evento sea invocado | No | [void](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/void) 

* ❗ <mark>Los parámetros a retornar dependerán del tipo evento, siempre se retorna el cliente en primer parámetro, los demás parámetros se devolveran dependiendo del evento establecido en la propiedad 'nombre'. </mark>

```js
new Evento({
    ejecutar: (client, ...args) => {}
});
```

## Comando
Se utiliza para la creación de nuevos comandos.
* Se deben ingresar propiedades como opciones en el constructor.
> Interface: [CreateCommand](#createcommand)

```js
new Comando(props);
```

| Propiedades | Tipo | Descripcion | Limitantes
|---|---|---|---|
|props#_nombre_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Nombre del comando. | 1 Carácter min, 32 Carácteres max.
|props#_descripcion_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Descripcion breve del comando. | 1 Carácter min, 100 Carácteres max.
|props?#_opciones_ | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[OptionsCommandBuilder](#optionscommandbuilder)> | Opciones para tu comando. | Máximo 25 opciones.
|props?#_sub\_comandos_ | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[SubcommandCommandBuilder](#subcommandcommandbuilder)> | Sub Comandos para tu comando. | 

* ❗ <mark>No se pueden usar opciones y sub comandos a la vez.</mark>
* ❗ <mark>Las opciones solo pueden contener opciones en su interior mientras la propiedad 'tipo' sea 'grupo'.</mark>
* ❗ <mark>ninguna propiedad 'nombre' puede contener espacios ni mayúsculas.</mark>
* ❗ <mark>Entre todas las propiedades, sumando sus carácteres lo máximo son 4000.</mark>

<br>

| Métodos | Parámetros | Descripción | Retorno
|---|---|---|---|
|props#_ejecutar_ | [client](https://discord.js.org/#/docs/discord.js/stable/class/Client), [interaction](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction) (CommandInteraction)| Función a ejecutar cuando el comando sea invocado | [void](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/void)

```js
new Comando({
    ejecutar: (client, interaction) => {}
});
```

## Ventana
Se utiliza para la creación de ventanas (modals) sin remplazar la clase original y simplificando su uso.
* Se deben ingresar propiedades como opciones en el constructor.
> Interface: [CreateModalInterface](#createmodalinterface)

```js
new Ventana(props);
```

| Propiedades | Tipo | Descripción | Límites
|---|---|---|---|
| props#_titulo_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Título de la vetana a generar. | 45 Carácteres max.
| props#_id_ | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | ID de la ventana a generar. | 100 Carácteres max.
| props#_componentes_ | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[ModalComponentsInterface](#modalcomponentsinterface)> | Componentes que contendrá la ventana. | 5 Elementos max.

* ⤵️ Elemento dentro del arreglo 'componentes'

| Propiedades | Tipo | Descripción | Limites | Opcional
|---|---|---|---|---|
| id | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | ID del componente a crear | 100 Carácteres max. | No
| label | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Label del componente a crear | 45 Carácteres max. | No
| requerido | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Establecer obligatoriedad del componente | | Sí
| tipo | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Tipo de componente a crear | | No

* ⤵️ Propiedades habilitadas para el tipo 'INPUT'

| Propiedades | Tipo | Descripción | Límites | Opcional
|---|---|---|---|---|
| estilo | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Estilo del componente a crear | Solo se pueden usar los estilos por defecto | No
| placeholder | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Texto de placeholder del componente | 100 Carácteres max | Sí
| valorDefecto | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Texto por defecto en el componente | 50 Carácteres min, 4000 Carácteres max | Sí
| largoMin | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | Largo mínimo del texto del componente | 1 mínimo, 4000 máximo | Sí
| largoMax | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | Largo máximo del texto del componente | 1 mínimo, 4000 máximo | Sí

<br><br>

| Métodos | Parámetros | Descripción | Retorno
|---|---|---|---|
| crear | | Crear la ventana despues de configurar | [Modal](https://discord.js.org/#/docs/discord.js/stable/class/Modal)

```js
new Ventana(props)
    .crear();
```

<br><br>

# 🔱 Tipos

## typeInsideOptions

> 'grupo' | 'cadena' | 'entero' | 'numerico' | 'booleano' | 'usuario' | 'usuario' | 'canal' | 'mencion' | 'rol' | 'adjunto'

## ModalComponentTypes

> 'INPUT'

## ModalComponentStyles
> 'PARRAFO' | 'CORTO'

## ClientStatusPresence
> 'online' | 'dnd' | 'idle' | 'invisible'

## ActivityTypes
> 'escuchando' | 'viendo' | 'compitiendo' | 'jugando' | 'emitiendo'

## PartialsClient
> 'CHANNEL'| 'GUILD_MEMBER'| 'GUILD_SCHEDULED_EVENT'| 'MESSAGE'| 'REACTION'| 'USER'

## IntentsClient
> 'GUILDS' | 'GUILD_MEMBERS' | 'GUILD_BANS' | 'GUILD_EMOJIS_AND_STICKERS' | 'GUILD_INTEGRATIONS' | 'GUILD_WEBHOOKS' | 'GUILD_INVITES' | 'GUILD_VOICE_STATES' | 'GUILD_PRESENCES' | 'GUILD_MESSAGES' | 'GUILD_MESSAGE_REACTIONS' | 'GUILD_MESSAGE_TYPING' | 'DIRECT_MESSAGES' | 'DIRECT_MESSAGE_REACTIONS' | 'DIRECT_MESSAGE_TYPING' | 'GUILD_SCHEDULED_EVENTS' | 'ALL'

# ℹ️ Interfaces

## CreateClient

| Propiedades | Tipo | Opcional
|---|---|---|
| token | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| id | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| intents | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[IntentsClient](#intentsclient)> | No
| partials | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[PartialsClient](#partialsclient)> | Sí
| comandos | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) o [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | No
| eventos | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) o [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | No
| setPresence | [SetPresenceOptions](#SetPresenceOptions) | Sí

## SetPresenceOptions 
| Propiedades | Tipo | Opcional
|---|---|---|
| tiempo | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | No
| presence | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[ClientPresence](#clientpresence)> | No


## ClientPresence

| Propiedades | Tipo | Opcional
|---|---|---|
| estado | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)<[ClientStatusPresence](#clientstatuspresence)> | No
| shardId | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) o [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)[] | Sí
| afk | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Sí
| actividad | [ActivityClientPresence](#activityclientpresence) | No

## ActivityClientPresence

| Propiedades | Tipo | Opcional
|---|---|---|
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| tipo | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)<[ActivityTypes](#activitytypes)> | No
| url | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Sí


## CreateCommand 

| Props/Metodos | Tipo | Opcional
|---|---|---|
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)  | No
| descripcion | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)  | No
| opciones | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[OptionsCommandBuilder](#optionscommandbuilder)> | Sí
| sub_comandos | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[SubcommandCommandBuilder](#subcommandcommandbuilder)>
| ejecutar | [CommandExec](#commandexec) | No


## CommandExec 
> (client: [Client](https://discord.js.org/#/docs/discord.js/stable/class/Client), interaction: [CommandInteraction](https://discord.js.org/#/docs/discord.js/stable/class/CommandInteraction)): [void](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/void)  


## CreateEvent

| Propiedades | Tipo | Opcional
|---|---|---|
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)<[ClientEvents](https://discord.js.org/#/docs/discord.js/13.7.0/class/Client?scrollTo=e-apiRequest)> | No
| ejecutar | [CommandExec](#commandexec) | No




## OptionsCommandBuilder

| Propiedades | Tipo | Opcional
|---|---|---|
| tipo | [typeInsideOptions](#typeinsideoptions) | No
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| descripcion | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| requerido | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Sí
| opciones | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[OptionsInsideCommandBuilder](#optionsinsidecommandbuilder)> | |


## OptionsInsideCommandBuilder

| Propiedades | Tipo | Opcional
|---|---|---|
| tipo | [TypeInsideOptions](#typeinsideoptions) | No
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| descripcion | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| requerido | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Sí

## SubcommandCommandBuilder

| Propiedades | Tipo | Opcional
|---|---|---|
| nombre | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| descripcion | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| opciones | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[OptionsInsideCommandBuilder](#optionsinsidecommandbuilder)>



## CreateModalInterface

| Propiedades | Tipo | Opcional
|---|---|---|
| titulo | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)| No
| id | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)| No
| Componentes | [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)<[ModalComponentsInterface](#modalcomponentsinterface)> | No

## ModalComponentsInterface

| Propiedades | Tipo | Opcional
|---|---|---|
| id | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | No
| tipo | [ModalComponentTypes](#modalcomponenttypes) | No
| estilo | [ModalComponentStyles](#modalcomponentstyles) | |
| requerido | [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) | Sí
| placeholder | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Sí
| valorDefecto | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | Sí
| largoMin | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | Sí
| largoMax | [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | Sí


<br>
<br>
<br>
<div style="display: flex; justify-content: center; ">
    <img style="border-radius: 23px; width: 50%" src="https://media.giphy.com/media/caD7wkiDRP307AY9Bb/giphy.gif"/>
</div>


