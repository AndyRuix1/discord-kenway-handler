"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comando = exports.Evento = exports.Client = void 0;
const discord_js_1 = require("discord.js");
const Comando_1 = require("./Comando");
const Evento_1 = require("./Evento");
const v10_1 = require("discord-api-types/v10");
const rest_1 = require("@discordjs/rest");
const index_1 = require("../Control/index");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Client extends discord_js_1.Client {
    /**
     * * Creación de Cliente.
     * @param props * Propiedades para creación de Cliente
     * @param props.token * Token del cliente (discord developers)
     * @param props.id * ID del cliente (discord developers)
     * @param props.comados * Ruta de la carpeta donde se almacenan tus comandos. Dejar false en caso de no uso.
     * @param props.eventos * Ruta de la carpeta donde se almacenan tus eventos. Dejar false en caso de no uso.
     * @param props.intents *? intents del cliente. Dejar arreglo vacio en caso de no uso.
     * @param props.partials ? Partials del cliente.
     * @param props.setPresence ? Establecer presence's alternables con el tiempo.
     */
    constructor(props) {
        var _a;
        const allIntents = ["ALL",];
        if (!props.hasOwnProperty('token') || typeof props.token != 'string')
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_TOKEN);
        if (!props.hasOwnProperty('id') || typeof props.id != 'string')
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_ID);
        if (typeof props.comandos != 'boolean' && typeof props.comandos != 'string')
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_CMD_PATH);
        if (typeof props.eventos != 'boolean' && typeof props.eventos != 'string')
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_EVT_PATH);
        if (typeof props.comandos == 'boolean' && props.comandos)
            throw new index_1.Error('Cliete', index_1.Info.ERRORS.CLIENT.NO_CMD_BOOL);
        if (typeof props.eventos == 'boolean' && props.eventos)
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_EVT_BOOL);
        if (!props.hasOwnProperty('intents') || !Array.isArray(props.intents))
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_INTENTS);
        if (props.hasOwnProperty('partials') && !Array.isArray(props.partials))
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.NO_PARTIALS);
        if (props.hasOwnProperty('partials') && props.partials.some(partial => !['CHANNEL', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER'].includes(partial)))
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.INVALID_PARTIALS);
        if (props.intents.some(intent => !allIntents.includes(intent) || typeof intent != 'string'))
            throw new index_1.Error('Client', index_1.Info.ERRORS.CLIENT.INVALID_INTENT);
        if (typeof props.comandos == 'string' && !fs_1.default.existsSync(props.comandos))
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.CMD_PATH_INVALID);
        if (typeof props.eventos == 'string' && !fs_1.default.existsSync(props.eventos))
            throw new index_1.Error('Cliente', index_1.Info.ERRORS.CLIENT.EVT_PATH_INVALID);
        const IntentsFlags = { DIRECT_MESSAGES: discord_js_1.Intents.FLAGS.DIRECT_MESSAGES, DIRECT_MESSAGE_REACTIONS: discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, DIRECT_MESSAGE_TYPING: discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_TYPING, GUILDS: discord_js_1.Intents.FLAGS.GUILDS, GUILD_BANS: discord_js_1.Intents.FLAGS.GUILD_BANS, GUILD_EMOJIS_AND_STICKERS: discord_js_1.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, GUILD_INTEGRATIONS: discord_js_1.Intents.FLAGS.GUILD_INTEGRATIONS, GUILD_INVITES: discord_js_1.Intents.FLAGS.GUILD_INVITES, GUILD_MEMBERS: discord_js_1.Intents.FLAGS.GUILD_MEMBERS, GUILD_MESSAGES: discord_js_1.Intents.FLAGS.GUILD_MESSAGES, GUILD_MESSAGE_REACTIONS: discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, GUILD_MESSAGE_TYPING: discord_js_1.Intents.FLAGS.GUILD_MESSAGE_TYPING, GUILD_PRESENCES: discord_js_1.Intents.FLAGS.GUILD_PRESENCES, GUILD_SCHEDULED_EVENTS: discord_js_1.Intents.FLAGS.GUILD_SCHEDULED_EVENTS, GUILD_VOICE_STATES: discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES, GUILD_WEBHOOKS: discord_js_1.Intents.FLAGS.GUILD_WEBHOOKS };
        const intentsToPut = new discord_js_1.Intents();
        if (props.intents.some(intent => intent.includes('ALL')))
            intentsToPut.add(32767);
        else
            props.intents.forEach(intent => intentsToPut.add(IntentsFlags[intent]));
        super({
            intents: intentsToPut,
            partials: (_a = props.partials) !== null && _a !== void 0 ? _a : undefined
        });
        this.clientToken = props.token;
        this.clientId = props.id;
        this.path_comandos = props.comandos;
        this.path_eventos = props.eventos;
        this.intents = props.intents;
        this.setPresence = props.setPresence;
        this.commandsToPut = new Array();
        this.commandsToExec = new Array();
        this.eventsToExec = new Array();
        this.botLaunched = false;
        this.launchBot();
    }
    ;
    launchBot() {
        return __awaiter(this, void 0, void 0, function* () {
            console.info(index_1.Info.LOAD.START);
            const startDate = Date.now();
            setTimeout(() => !this.botLaunched ? console.info(index_1.Info.LOAD.DELAY_10) : null, 10000);
            setTimeout(() => !this.botLaunched ? console.info(index_1.Info.LOAD.DELAY_30) : null, 30000);
            if (typeof this.path_comandos == 'string')
                yield this._loadCommands();
            if (typeof this.path_eventos == 'string')
                yield this._loadEvents();
            yield this._loadPresence();
            this.login(this.clientToken).catch(ClientError => index_1.Info.ERRORS.CUSTOM_ERROR('Cliente', 'Ha ocurrido un problema al iniciar el cliente. ', ClientError));
            this.eventsToExec.map(evento => {
                if (evento.nombre == 'message' || evento.nombre == 'messageCreate')
                    return this.on('messageCreate', message => evento.ejecutar(this, message, message.content.slice(0).trim().split(/ +/g)));
                //@ts-ignore
                return this.on(evento.nombre, (...args) => evento.ejecutar(this, ...args));
            });
            this.commandsToExec.map(comando => {
                this.on('interactionCreate', Interaction => {
                    if (Interaction.isCommand() && Interaction.commandName == comando.nombre)
                        return comando.ejecutar(this, Interaction);
                });
            });
            this.on('ready', () => {
                this.botLaunched = true;
                const finishDate = Math.floor((Date.now() - startDate) / 1000);
                const timeLoad = finishDate < 0 ? 'menos de un segundo' : `${finishDate} segundo(s)`;
                const dataLoaded = {
                    bot: this.user.tag,
                    eventos: this.eventsToExec.length,
                    comandos: this.commandsToExec.length,
                    servers: this.guilds.cache.size,
                    users: this.users.cache.size,
                    presences: this.hasPresence ? this.setPresence.presence.length : 0
                };
                console.info(index_1.Info.LOAD.END(timeLoad, dataLoaded));
                if (this.hasPresence) {
                    if (this.setPresence.presence.length == 1)
                        return this._changePresence();
                    setInterval(this._changePresence, this.setPresence.tiempo);
                }
                ;
            });
        });
    }
    ;
    _changePresence() {
        var _a, _b;
        const presence = this.setPresence.presence[Math.floor(Math.random() * this.setPresence.presence.length)];
        let type = {
            compitiendo: 'COMPETING',
            escuchando: 'LISTENING',
            jugando: 'PLAYING',
            viendo: 'WATCHING',
            emitiendo: 'STREAMING'
        };
        this.user.setPresence({
            afk: (_a = presence.afk) !== null && _a !== void 0 ? _a : false,
            status: presence.estado,
            shardId: presence.shardId,
            activities: [{ name: presence.actividad.nombre, type: type[presence.actividad.tipo.toLowerCase().trim()], url: (_b = presence.actividad.url) !== null && _b !== void 0 ? _b : undefined }]
        });
    }
    ;
    _loadPresence() {
        const isUrl = (url) => /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/gi.test(url);
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            console.info(index_1.Info.LOAD.START_PRESENCE);
            if (!this.hasOwnProperty('setPresence') || typeof this.setPresence != 'object') {
                console.info(index_1.Info.LOAD.NO_PRESENCES);
                console.info(index_1.Info.LOAD.ALL_PRESENCE_LOADED);
                return resolve(true);
            }
            ;
            if (!this.setPresence.hasOwnProperty('tiempo') && !this.setPresence.hasOwnProperty('presence')) {
                console.info(index_1.Info.LOAD.WARN_STRUCTURE_PRESENCE);
                console.info(index_1.Info.LOAD.ALL_PRESENCE_LOADED);
                return resolve(true);
            }
            ;
            if (!this.setPresence.hasOwnProperty('tiempo'))
                throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.NO_TIME);
            if (isNaN(this.setPresence.tiempo) || this.setPresence.tiempo < 10000)
                throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.INVALID_TIME);
            if (!this.setPresence.hasOwnProperty('presence') || !Array.isArray(this.setPresence.presence) || this.setPresence.presence.length < 1)
                throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.NO_PRESENCE_LIST);
            this.setPresence.presence.map(presence => {
                if (!presence.hasOwnProperty('estado') || typeof presence.estado != 'string')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.NO_STATUS);
                if (!['dnd', 'idle', 'invisible', 'online'].includes(presence.estado.toLowerCase().trim()))
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.INVALID_STATUS);
                if (presence.hasOwnProperty('afk') && typeof presence.afk != 'boolean')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.INVALID_AFK);
                if (presence.hasOwnProperty('shardId') && (typeof presence.shardId != 'number' && !Array.isArray(presence.shardId)))
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.INVALID_SHARD_ID);
                if (presence.hasOwnProperty('shardId') && Array.isArray(presence.shardId) && presence.shardId.some(numb => typeof numb != 'number'))
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.INVALID_SHARD_ARRAY);
                if (presence.hasOwnProperty('shardId') && !Array.isArray(presence.shardId) && typeof presence.shardId != 'number')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.INVALID_SHARD_NUMBER);
                if (!presence.hasOwnProperty('actividad') || typeof presence.actividad != 'object')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.NO_ACTIVITY);
                if (!presence.actividad.hasOwnProperty('nombre') || typeof presence.actividad.nombre != 'string')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.ACTIVITY.NO_NAME);
                if (!presence.actividad.hasOwnProperty('tipo') || typeof presence.actividad.tipo != 'string')
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.ACTIVITY.NO_TYPE);
                if (!['compitiendo', 'emitiendo', 'escuchando', 'jugando', 'viendo'].includes(presence.actividad.tipo.toLowerCase().trim()))
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.ACTIVITY.INVALID_TYPE);
                if (presence.actividad.nombre.length < 1)
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.ACTIVITY.INVALID_NAME);
                if (presence.actividad.hasOwnProperty('url') && (typeof presence.actividad.url != 'string' || !isUrl(presence.actividad.url)))
                    throw new index_1.Error('Presence', index_1.Info.ERRORS.PRESENCE.LIST.ACTIVITY.NO_URL);
                console.info(index_1.Info.LOAD.PRESENCE_LOADED(presence.actividad.nombre));
            });
            console.info(index_1.Info.LOAD.ALL_PRESENCE_LOADED);
            this.hasPresence = true;
            return resolve(true);
        }));
    }
    ;
    _loadCommands() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            console.info(index_1.Info.LOAD.START_COMMAND);
            const commandsFiles = fs_1.default.readdirSync(this.path_comandos.toString()).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
            if (commandsFiles.length < 1) {
                console.info(index_1.Info.LOAD.NO_COMMANDS_FOUND);
                return resolve(true);
            }
            ;
            for (var file of commandsFiles) {
                const commandFile = require(path_1.default.join(this.path_comandos.toString(), file));
                yield (0, Comando_1.checkCommand)(commandFile);
                const commandBuilder = yield (0, Comando_1.buildCommand)(commandFile);
                this.commandsToExec.push(commandFile);
                this.commandsToPut.push(commandBuilder.toJSON());
                console.info(index_1.Info.LOAD.COMMAND_LOADED(file));
            }
            ;
            const rest = new rest_1.REST({ version: '10' }).setToken(this.clientToken);
            yield rest.put(v10_1.Routes.applicationCommands(this.clientId), { body: this.commandsToPut }).catch(error => index_1.Info.ERRORS.CUSTOM_ERROR('Comando', 'Ha ocurrido un error al cargar algún comando: ', error));
            console.info(index_1.Info.LOAD.ALL_COMMAND_LOADED);
            return resolve(true);
        }));
    }
    ;
    _loadEvents() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            console.info(index_1.Info.LOAD.START_EVENTS);
            const eventFiles = fs_1.default.readdirSync(this.path_eventos.toString()).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
            if (eventFiles.length < 1) {
                console.info(index_1.Info.LOAD.NO_EVENTS_FOUND);
                return resolve(true);
            }
            ;
            for (var eventFile of eventFiles) {
                const event = yield require(path_1.default.join(this.path_eventos.toString(), eventFile));
                yield (0, Evento_1.checkEvent)(event);
                this.eventsToExec.push(event);
                console.info(index_1.Info.LOAD.EVENT_LOADED(eventFile));
            }
            ;
            console.info(index_1.Info.LOAD.ALL_EVENT_LOADED);
            return resolve(true);
        }));
    }
    ;
}
exports.Client = Client;
;
class Evento {
    /**
     * * Creación de un Evento.
     * @param props * Propiedades para creación de evento.
     * @param props.nombre * Nombre del evento a ejecutar.
     * @param props.ejecutar * Función que se ejecutará cuando el evento sea invocado. Los argumentos que retornarán, dependerán del evento invocado.
     * @returns Ejecución de metodo 'ejecutar' cuando el evento sea invocado.
     */
    constructor(props) {
        this.nombre = props.nombre;
        //@ts-ignore
        this.ejecutar = props.ejecutar;
    }
    ;
}
exports.Evento = Evento;
;
class Comando {
    /**
     * * Creación de un Comando.
     * @param props * Propiedades para creación de un Comando
     * @param props.nombre * Nombre del comando, será el mismo usado por el usuario.
     * @param props.descripcion * Descripción breve del comando. Será visto por el usuario.
     * @param props.opciones *? Opciones del comando.
     * @param props.sub_comandos *? Sub Comandos del comando principal.
     * @param props.ejecutar * Función a ejecutar cuando el comando es invocado.
     * @returns * Ejecución del comando cuando es invocado.
     */
    constructor(props) {
        this.nombre = props.nombre;
        this.descripcion = props.descripcion;
        this.opciones = props.opciones;
        this.sub_comandos = props.sub_comandos;
        this.ejecutar = props.ejecutar;
    }
    ;
}
exports.Comando = Comando;
;
//# sourceMappingURL=Client.js.map