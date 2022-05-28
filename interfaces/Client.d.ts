export interface CreateClient {
    token: string;
    id: string;
    intents: IntentsClient[];
    partials?: PartialsClient[];
    comandos: string | boolean;
    eventos: string | boolean;
    setPresence?: {
        tiempo: number;
        presence: ClientPresence[];
    };
}
export interface ClientPresence {
    estado: ClientStatusPresence;
    shardId?: number | number[];
    afk?: boolean;
    actividad: {
        nombre: string;
        tipo: ActivityTypes;
        url?: string;
    };
}
export declare type ClientStatusPresence = 'online' | 'dnd' | 'idle' | 'invisible';
export declare type ActivityTypes = 'escuchando' | 'viendo' | 'compitiendo' | 'jugando' | 'emitiendo';
export declare type PartialsClient = 'CHANNEL' | 'GUILD_MEMBER' | 'GUILD_SCHEDULED_EVENT' | 'MESSAGE' | 'REACTION' | 'USER';
export declare type IntentsClient = 'GUILDS' | 'GUILD_MEMBERS' | 'GUILD_BANS' | 'GUILD_EMOJIS_AND_STICKERS' | 'GUILD_INTEGRATIONS' | 'GUILD_WEBHOOKS' | 'GUILD_INVITES' | 'GUILD_VOICE_STATES' | 'GUILD_PRESENCES' | 'GUILD_MESSAGES' | 'GUILD_MESSAGE_REACTIONS' | 'GUILD_MESSAGE_TYPING' | 'DIRECT_MESSAGES' | 'DIRECT_MESSAGE_REACTIONS' | 'DIRECT_MESSAGE_TYPING' | 'GUILD_SCHEDULED_EVENTS' | 'ALL';
