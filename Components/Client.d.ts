import { Client as DiscordKenwayClient } from 'discord.js';
import { ClientPresence, CommandExec, IntentsClient, CreateClient, CreateCommand, CreateEvent, EventExec, OptionsCommandBuilder, SubcommandCommandBuilder } from '../interfaces/index';
export declare class Client extends DiscordKenwayClient {
    private clientToken;
    private clientId;
    readonly intents: IntentsClient[];
    private hasPresence;
    private readonly path_comandos;
    private readonly path_eventos;
    private readonly commandsToPut;
    private readonly commandsToExec;
    private readonly eventsToExec;
    setPresence: {
        tiempo: number;
        presence: ClientPresence[];
    };
    botLaunched: boolean;
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
    constructor(props: CreateClient);
    private launchBot;
    private _changePresence;
    private _loadPresence;
    private _loadCommands;
    private _loadEvents;
}
export declare class Evento {
    nombre: string;
    protected ejecutar: EventExec<'ready'>;
    /**
     * * Creación de un Evento.
     * @param props * Propiedades para creación de evento.
     * @param props.nombre * Nombre del evento a ejecutar.
     * @param props.ejecutar * Función que se ejecutará cuando el evento sea invocado. Los argumentos que retornarán, dependerán del evento invocado.
     * @returns Ejecución de metodo 'ejecutar' cuando el evento sea invocado.
     */
    constructor(props: CreateEvent);
}
export declare class Comando {
    nombre: string;
    descripcion: string;
    opciones: OptionsCommandBuilder[];
    sub_comandos: SubcommandCommandBuilder[];
    protected ejecutar: CommandExec;
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
    constructor(props: CreateCommand);
}
