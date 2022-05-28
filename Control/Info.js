"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Console_1 = require("./Console");
const Error_1 = __importDefault(require("./Error"));
const error = Console_1.infoConsole.error;
const dev = Console_1.infoConsole.developer;
const bot = Console_1.infoConsole.bot;
const cmd = Console_1.infoConsole.comando;
const evt = Console_1.infoConsole.evento;
const warn = Console_1.infoConsole.warn;
const prc = Console_1.infoConsole.presence;
const returnLoadInfo = (info) => `${Console_1.colorConsole.celeste} ** ${Console_1.colorConsole.amarillo} ${info} ${Console_1.colorConsole.blanco}`;
exports.default = {
    ERRORS: {
        CUSTOM_ERROR: (type, errorMessage, errorObject) => new Error_1.default(type, `${error} ${errorMessage}`, errorObject),
        CLIENT: {
            NO_TOKEN: `${error} Debes especificar el Token del cliente.`,
            NO_ID: `${error} Debes especificar el ID del cliente.`,
            NO_CMD_PATH: `${error} Debes especificar la ruta de la carpeta de tus comandos, dejar 'false' en caso de no uso.`,
            NO_EVT_PATH: `${error} Debes especificar la ruta de la carpeta de tus eventos, dejar 'false' en caso de no uso.`,
            NO_CMD_BOOL: `${error} La ruta de los comandos debe ser el Booleano 'false' o la ruta de la carpeta.`,
            NO_EVT_BOOL: `${error} La ruta de los eventos debe ser un Booleano 'false' o la ruta de la carpeta.`,
            NO_INTENTS: `${error} Debes especificar los intents, si no requieres, debes dejar un arreglo vacío.`,
            NO_PARTIALS: `${error} La propiedad 'partials' debe ser un arreglo de strings.`,
            INVALID_PARTIALS: `${error} Algún elemento de la propiedad 'partials' es inválida.`,
            INVALID_INTENT: `${error} Algún elemento de la propiedad 'intents' es inválido.`,
            CMD_PATH_INVALID: `${error} La ruta de la carpeta especificada para comandos es inválida o no existe.`,
            EVT_PATH_INVALID: `${error} La ruta de la carpeta especificada para eventos es inválida o no existe.`,
        },
        COMMAND: {
            NO_NAME: `${error} La propiedad 'nombre' de un comando, no se encuentra o es inválida.`,
            NO_DESC: `${error} La propiedad 'descripcion' de un comando, no se encuentra o es inválida.`,
            NO_OPT: `${error} La propiedad 'opciones' de un comando es inválida. Debe ser un arreglo o puedes ignorar la propiedad.`,
            NO_SUBCMD: `${error} La propiedad 'sub_comandos' de un comando es inválida, debe ser un arreglo o puedes ignorar la propiedad.`,
            NO_EXEC: `${error} El método 'ejecutar' de un comando, no se encuentra o es de tipo inválido. Recuerda que esta es la función a ejecutar cuando el comando sea invocado.`,
            NAME_CHAR_LIMIT: `${error} La propiedad 'nombre' de un comando, debe tener como mínimo 1 carácter y máximo 32`,
            DESC_CHAR_LIMIT: `${error} La propiedad 'descripcion' de un comando, debe tener como mínimo 1 carácter y máximo 100`,
            NAME_HAS_C_LETTER: `${error} La propiedad 'nombre' de un comando, no puede tener carácteres en mayúscula.`,
            NAME_HAS_SPACE: `${error} La propiedad 'nombre' de un comando, no puede contener espacios.`,
            MAX_OPT_LENGTH: `${error} La propiedad 'opciones' de un comando, supera los máximos elementos permitidos (25).`,
            SUBCMD_AND_OPTIONS_INVALID: `${error} No se pueden crear opciones y subcomandos a la vez.`,
            OPTION: {
                NO_NAME: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' no se encuentra o es inválida.`,
                NO_DESC: `${error} La propiedad 'descripcion' dentro de un elemento de 'opciones' no se encuentra o es inválida`,
                NO_TYPE: `${error} La propiedad 'tipo' dentro de un elemento de 'opciones' no se encuentra o es inválida.`,
                NO_OPT: `${error} La propiedad 'opciones' dentro de un elemento de 'opciones' es inválida, debe ser un arreglo. Puedes ignorar la propiedad en caso de no uso.`,
                NO_OPT_WITH_GROUP_TYPE: `${error} La propiedad 'opciones' de un elemento de 'opciones' debe tener almenos un elemento cuando este es de tipo 'grupo'.`,
                NAME_CHAR_LIMIT: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' debe tener como mínimo 1 carácter y máximo 32.`,
                DESC_CHAR_LIMIT: `${error} La propiedad 'descripcion' dentro de un elemento de 'opciones' debe tener como mínimo 1 carácter y máximo 100`,
                NAME_HAS_C_LETTER: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' no puede contener carácteres en mayúsculas.`,
                NAME_HAS_SPACE: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' no puede contener espacios.`,
                MAX_OPT_LENGTH: `${error} La propiedad 'opciones' dentro de un elemento de 'opciones' supera los máximos elementos permitidos (25).`,
                INVALID_TYPE: `${error} La propiedad 'tipo' dentro de un elemento de 'opciones' no es un tipo válido.`,
                OPT_NOT_WORK: `${error} La propiedad 'opciones' dentro de un elemento de 'opciones' solo puede ser usada con tipo 'grupo'. Deja un arreglo vacío o ignora la propiedad.`,
                INSIDE_OPTIONS: {
                    NO_NAME: `${error} La propiedad 'nombre' dentro de un elemento 'opciones' dentro de un elemento 'opciones' no existe o es inválida`,
                    NO_DESC: `${error} La propiedad 'descripcion' dentro de un elemento 'opciones' dentro de un elemento 'opciones' no existe o es inválida.`,
                    NO_TYPE: `${error} La propiedad 'tipo' dentro de un elemento de 'opciones' dentro de un elemento 'opciones' no se encuentra o es inválida`,
                    INVALID_TYPE: `${error} La propiedad 'tipo' dentro de un elemento de 'opciones' dentro de un elemento 'opciones' no es un tipo válido.`,
                    OPT_NOT_WORK: `${error} La propiedad 'opciones' dentro de un elemento de 'opciones' dentro de un elemento de 'opciones' no se puede usar.`,
                    NAME_CHAR_LIMIT: `${error} La propiedad 'nombre' dentro de un elemento 'opciones' dentro de un elemento 'opciones' debe tener como mínimo 1 carácter y máximo 32.`,
                    DESC_CHAR_LIMIT: `${error} La propiedad 'descripcion' dentro de un elemento de 'opciones' dentro de un elemento 'opciones' debe tener como mínimo 1 carácter y máximo 100.`,
                    NAME_HAS_C_LETTER: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' dentro de un elemento 'opciones' no puede contener carácteres en mayúsculas.`,
                    NAME_HAS_SPACE: `${error} La propiedad 'nombre' dentro de un elemento de 'opciones' dentro de un elemento de 'opciones' no puede contener espacios.`
                }
            },
            SUBCOMMAND: {
                NO_NAME: `${error} La propiedad 'nombre' de un elemento de 'sub_comandos' no existe o es inválida.`,
                NO_DESC: `${error} La propiedad 'descripcion' de un elemento de 'sub_comandos' no existe o es inválida.`,
                NO_OPT: `${error} La propiedad 'opciones' de un elemento de 'sub_comandos' debe ser un arreglo. Puedes ignorar la propiedad en caso de no requerir.`,
                NAME_HAS_C_LETTER: `${error} La propiedad 'nombre' de un elemento de 'sub_comandos' no puede contener carácteres en mayúscula.`,
                NAME_HAS_SPACE: `${error} La propiedad 'nombre' de un elemento de 'sub_comandos' no puede contener espacios.`,
                NAME_CHAR_LIMIT: `${error} La propiedad 'nombre' de un elemento de 'sub_comandos' debe tener mínimo 1 carácter y máximo 32.`,
                DESC_CHAR_LIMIT: `${error} La propiedad 'descripcion' de un elemento de 'sub_comandos' debe tener mínimo 1 carácter y máximo 100.`,
                MAX_OPT_LENGTH: `${error} La propiedad 'opciones' de un elemento de 'sub_comando' supera los máximos elementos permitidos (25).`,
                OPTION: {
                    NO_NAME: `${error} La propiedad 'nombre' de un elemento de 'opciones' de un 'sub_comando' no existe o es inválida.`,
                    NO_DESC: `${error} La propiedad 'descripcion' de un elemento de 'opciones' de un 'sub_comando' no existe o es inválida.`,
                    NO_TYPE: `${error} La propiedad 'tipo' de un elemento de 'opciones' de un 'sub_comando' no existe o es inválido.`,
                    NAME_HAS_C_LETTER: `${error} La propiedad 'nombre' de un elemento de 'opciones' de un 'sub_comando' no puede contener carácteres en mayúsculas.`,
                    NAME_HAS_SPACE: `${error} La propiedad 'nombre' de un elemento de 'opciones' de un 'sub_comando' no puede contener espacios.`,
                    INVALID_TYPE: `${error} La propiedad 'tipo' de un elemento de 'opciones' de un 'sub_comando' no es un tipo válido.`,
                    NAME_CHAR_LIMIT: `${error} La propiedad 'nombre' de un elemento de 'opciones' de un 'sub_comando' debe tener como mínimo 1 carácter y máximo 32.`,
                    DESC_CHAR_LIMIT: `${error} La propiedad 'descripcion' de un elemento de 'opciones' de un 'sub_comando' debe tener como mínimo 1 carácter y máximo 100.`,
                }
            }
        },
        EVENT: {
            NO_NAME: `${error} La propiedad 'nombre' de un Evento no se encuentra o es inválida.`,
            NO_EXEC: `${error} El método 'ejecutar' de un Evento no se encuentra o es inválido.`
        },
        PRESENCE: {
            NO_TIME: `${error} La propiedad 'tiempo' dentro de la propiedad 'setPresence' debe ser un número.`,
            INVALID_TIME: `${error} La propiedad 'tiempo' dentro de la propiedad 'setPresence' no puede ser un número inferior a '10000'`,
            NO_PRESENCE_LIST: `${error} La propiedad 'presence' dentro de la propiedad 'setPresence' debe ser un arreglo y contener almenos un (1) elemento.`,
            LIST: {
                NO_STATUS: `${error} La propiedad 'estado' de un elemento del arreglo 'presence' de la propiedad 'setPresence' debe ser una cadena.`,
                INVALID_STATUS: `${error} La propiedad 'estado' de un elemento del arreglo 'presence' de la propiedad 'setPresence' no es un estado válido.`,
                INVALID_AFK: `${error} La propiedad 'afk' de un elemento del arreglo 'presence' de la propiedad 'setPresence' debe ser de tipo booleano.`,
                INVALID_SHARD_ID: `${error} La propiedad 'shardId' de un elemento del arreglo 'presence' de la propiedad 'setPresence' debe ser un número o arreglo de números.`,
                INVALID_SHARD_ARRAY: `${error} La propiedad 'shardId' de un elemento del arreglo 'presence' tiene un elemento de tipo no numérico.`,
                INVALID_SHARD_NUMBER: `${error} La propiedad 'shardId' de un elemento del arreglo 'presence' no es numérico`,
                NO_ACTIVITY: `${error} La propiedad 'actividad' de un elemento del arreglo 'presence' de la propiedad 'setPresence' debe ser un objeto con sus propiedades correspondientes.`,
                ACTIVITY: {
                    NO_NAME: `${error} La propiedad 'nombre' dentro de la propiedad 'actividad' de un elemento del arreglo 'presence' de la propiedad 'setPresence' debe ser una cadena y contener un carácter como mínimo.`,
                    INVALID_NAME: `${error} La propiedad 'nombre' dentro de la propiedad 'actividad' de un elemento del arreglo 'presence' en la propiedad 'setPresence' debe ser una cadena y contener un carácer como mínimo.`,
                    INVALID_TYPE: `${error} La propiedad 'tipo' dentro de la propiedad 'actividad' de un elemento del arreglo 'presence' en la propiedad 'setPresence' no es un tipo válido.`,
                    NO_TYPE: `${error} La propiedad 'tipo' dentro de la propiedad 'actividad' de un elemento del arreglo 'presence' dentro de la propiedad 'setPresence' debe ser una cadena.`,
                    NO_URL: `${error} La propiedad 'url' dentro de la propiedad 'actividad' de un elemento del arreglo 'presence' dentro de la propiedad 'setPresence' debe ser una cadena de contenido URL.`,
                }
            }
        },
        MODAL: {
            NO_TITLE: `${error} La propiedad 'titulo' en la creación de una ventana no se encuentra o de tipado inválido.`,
            NO_ID: `${error} La propiedad 'id' de la creación de una ventana no se encuentra o es de tipado inválido`,
            NO_COMPONENTS: `${error} La propiedad 'componentes' en la creación de una ventana no se encuentra o es de tipado inválido`,
            COMPONENT_ITEM_INVALID: `${error} La propiedad 'componentes' en la creación de una ventana tiene un elemento inválido en su interior.`,
            INVALID_ID_LENGTH: `${error} La propiedad 'id' en la creación de una ventana debe tener mínimo 1 carácter y máximo 100.`,
            INVALID_TITLE_LENGTH: `${error} La propiedad 'titulo' en la creación de una ventana debe tener mínimo 1 carácter y máximo 45.`,
            COMPONENTS_ITEMS_LIMIT: `La propiedad 'componentes' en la creación de una ventana debe tener almenos 1 elemento y máximo 5.`,
            COMPONENTS: (propName, ErrorType) => {
                const auxiliar = { noString: 'no se reconoce como cadena' };
                const componentsError = {
                    NO_ID: auxiliar.noString,
                    NO_LABEL: auxiliar.noString,
                    NO_STYLE: `${auxiliar.noString}, debe ser usada mientras la propiedad 'tipo' se establece como 'INPUT'.`,
                    NO_TYPE: auxiliar.noString,
                    INVALID_STYLE: `no es un estilo válido.`,
                    INVALID_TYPE: `no es un tipo válido.`,
                    INVALID_ID_LENGTH: `debe tener como mínimo 1 carácter y máximo 100.`,
                    INVALID_LABEL_LENGTH: `debe tener como mínimo 1 carácter y máximo 45.`,
                    //Errores de propiedades opcionales:
                    NO_PLACEHOLDER: auxiliar.noString,
                    INVALID_PLACEHOLDER_LENGTH: `debe tener como mínimo 1 carácter y máximo 100.`,
                    NO_TYPE_DEFAULT_VAL: auxiliar.noString,
                    INVALID_DEFAULT_VAL_LENGTH: `debe tener como mínimo 50 carácteres y máximo 4000.`,
                    INVALID_MAXLENGTH_TYPE: `es de tipo inválido.`,
                    INVALID_MINLENGTH_TYPE: `es de tipo inválido.`,
                    INVALID_MINLENGTH_LENGTH: `no puede ser menor a 1 ni mayor a 4000`,
                    INVALID_MAXLENGTH_LENGTH: `no puede ser mayor a 1 ni mayor a 4000`,
                    INVALID_REQUIRED_TYPE: `debe ser de tipo booleano`,
                };
                return `${error} La propiedad '${propName}' en un elemento de la propiedad 'components' ${componentsError[ErrorType]}`;
            }
        }
    },
    LOAD: {
        //. CARGA GENERAL:
        END: (time, data) => `${Console_1.infoConsole.info} Información de Carga:\n${returnLoadInfo(data.eventos)} evento(s) cargado(s).\n${returnLoadInfo(data.comandos)} comando(s) cargado(s).\n${returnLoadInfo(data.presences)} presence(s) cargado(s).\n${returnLoadInfo(data.users)} usuario(s) encontrado(s).\n${returnLoadInfo(data.servers)} servidor(es) encontrado(s).\n${dev} Se ha finalizado la carga general en ${Console_1.colorConsole.verde}${time}${Console_1.colorConsole.blanco}\n${bot} Iniciado satisfactoriamente como ${Console_1.colorConsole.azul}${data.bot}${Console_1.colorConsole.blanco}`,
        START: `${dev} Se ha iniciado la carga general.`,
        DELAY_10: `${warn} La carga continúa pero tiene retraso (10s)`,
        DELAY_30: `${warn} La carga continúa pero tiene mucho retraso (30s), se recomienda reiniciar el servidor.`,
        //. CARGA DE COMANDOS:
        START_COMMAND: `${cmd} Se ha iniciado la carga de comandos.`,
        NO_COMMANDS_FOUND: `${cmd} Ningún comando ha sido encontrado.`,
        COMMAND_LOADED: (file) => `${cmd} Se ha cargado correctamente el comando ${Console_1.colorConsole.amarillo}${file}${Console_1.colorConsole.blanco}.`,
        ALL_COMMAND_LOADED: `${cmd} La carga de comandos ha finalizado.`,
        //. CARGA DE EVENTOS:
        START_EVENTS: `${evt} Se ha iniciado la carga de eventos.`,
        NO_EVENTS_FOUND: `${evt} Ningún evento ha sido encontrado.`,
        EVENT_LOADED: (file) => `${evt} Se ha cargado correctamente el evento ${Console_1.colorConsole.amarillo}${file}${Console_1.colorConsole.blanco}.`,
        ALL_EVENT_LOADED: `${evt} La carga de eventos ha finalizado.`,
        //. CARGA DE PRESENCE:
        START_PRESENCE: `${prc} La carga de presence ha iniciado.`,
        NO_PRESENCES: `${prc} No se encontraron propiedades para crear presences.`,
        PRESENCE_LOADED: (presenceName) => `${prc} El presence "${Console_1.colorConsole.amarillo}${presenceName}${Console_1.colorConsole.blanco}" se ha cargado correctamente.`,
        ALL_PRESENCE_LOADED: `${prc} La carga de presence ha finalizado.`,
        WARN_STRUCTURE_PRESENCE: `${prc} Se encontraron las propiedades de 'setPresence' incompletas, así que no se tomarán en cuenta.`
    }
};
//# sourceMappingURL=Info.js.map