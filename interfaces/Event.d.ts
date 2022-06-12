import { ClientEvents, Client, Message } from "discord.js";
interface EventExec<K extends keyof ClientEvents> {
    (client?: Client, ...args: ClientEvents[K]): void;
}
declare type TMessage = {
    (client?: Client, Message?: Message<boolean>, args?: string[]): void;
};
declare type TReady = {
    (client?: Client): void;
};
declare type CreateEvent = {
    nombre: 'apiResponse';
    ejecutar: EventExec<'apiRequest'>;
} | {
    nombre: 'apiRequest';
    ejecutar: EventExec<'apiRequest'>;
} | {
    nombre: 'applicationCommandCreate';
    ejecutar: EventExec<'applicationCommandCreate'>;
} | {
    nombre: 'applicationCommandDelete';
    ejecutar: EventExec<'applicationCommandDelete'>;
} | {
    nombre: 'applicationCommandUpdate';
    ejecutar: EventExec<'applicationCommandUpdate'>;
} | {
    nombre: 'cacheSweep';
    ejecutar: EventExec<'cacheSweep'>;
} | {
    nombre: 'channelCreate';
    ejecutar: EventExec<'channelCreate'>;
} | {
    nombre: 'channelDelete';
    ejecutar: EventExec<'channelDelete'>;
} | {
    nombre: 'channelPinsUpdate';
    ejecutar: EventExec<'channelPinsUpdate'>;
} | {
    nombre: 'channelUpdate';
    ejecutar: EventExec<'channelUpdate'>;
} | {
    nombre: 'warn';
    ejecutar: EventExec<'warn'>;
} | {
    nombre: 'emojiCreate';
    ejecutar: EventExec<'emojiCreate'>;
} | {
    nombre: 'emojiDelete';
    ejecutar: EventExec<'emojiDelete'>;
} | {
    nombre: 'emojiUpdate';
    ejecutar: EventExec<'emojiUpdate'>;
} | {
    nombre: 'error';
    ejecutar: EventExec<'error'>;
} | {
    nombre: 'guildBanAdd';
    ejecutar: EventExec<'guildBanAdd'>;
} | {
    nombre: 'guildBanRemove';
    ejecutar: EventExec<'guildBanRemove'>;
} | {
    nombre: 'guildCreate';
    ejecutar: EventExec<'guildCreate'>;
} | {
    nombre: 'guildDelete';
    ejecutar: EventExec<'guildDelete'>;
} | {
    nombre: 'guildUnavailable';
    ejecutar: EventExec<'guildUnavailable'>;
} | {
    nombre: 'guildIntegrationsUpdate';
    ejecutar: EventExec<'guildIntegrationsUpdate'>;
} | {
    nombre: 'guildMemberAdd';
    ejecutar: EventExec<'guildMemberAdd'>;
} | {
    nombre: 'guildMemberAvailable';
    ejecutar: EventExec<'guildMemberAvailable'>;
} | {
    nombre: 'guildMemberRemove';
    ejecutar: EventExec<'guildMemberRemove'>;
} | {
    nombre: 'guildMembersChunk';
    ejecutar: EventExec<'guildMembersChunk'>;
} | {
    nombre: 'guildMemberUpdate';
    ejecutar: EventExec<'guildMemberUpdate'>;
} | {
    nombre: 'guildUpdate';
    ejecutar: EventExec<'guildUpdate'>;
} | {
    nombre: 'inviteCreate';
    ejecutar: EventExec<'inviteCreate'>;
} | {
    nombre: 'inviteDelete';
    ejecutar: EventExec<'inviteDelete'>;
} | {
    nombre: 'message';
    ejecutar: TMessage;
} | {
    nombre: 'messageCreate';
    ejecutar: TMessage;
} | {
    nombre: 'messageDelete';
    ejecutar: EventExec<'messageDelete'>;
} | {
    nombre: 'messageReactionRemoveAll';
    ejecutar: EventExec<'messageReactionRemoveAll'>;
} | {
    nombre: 'messageReactionRemoveEmoji';
    ejecutar: EventExec<'messageReactionRemoveEmoji'>;
} | {
    nombre: 'messageDeleteBulk';
    ejecutar: EventExec<'messageDeleteBulk'>;
} | {
    nombre: 'messageReactionAdd';
    ejecutar: EventExec<'messageReactionAdd'>;
} | {
    nombre: 'messageReactionRemove';
    ejecutar: EventExec<'messageReactionRemove'>;
} | {
    nombre: 'messageUpdate';
    ejecutar: EventExec<'messageUpdate'>;
} | {
    nombre: 'presenceUpdate';
    ejecutar: EventExec<'presenceUpdate'>;
} | {
    nombre: 'ready';
    ejecutar: TReady;
} | {
    nombre: 'invalidated';
    ejecutar: EventExec<'invalidated'>;
} | {
    nombre: 'roleCreate';
    ejecutar: EventExec<'roleCreate'>;
} | {
    nombre: 'roleDelete';
    ejecutar: EventExec<'roleDelete'>;
} | {
    nombre: 'roleUpdate';
    ejecutar: EventExec<'roleUpdate'>;
} | {
    nombre: 'threadCreate';
    ejecutar: EventExec<'threadCreate'>;
} | {
    nombre: 'threadDelete';
    ejecutar: EventExec<'threadDelete'>;
} | {
    nombre: 'threadListSync';
    ejecutar: EventExec<'threadListSync'>;
} | {
    nombre: 'threadMemberUpdate';
    ejecutar: EventExec<'threadMemberUpdate'>;
} | {
    nombre: 'threadMembersUpdate';
    ejecutar: EventExec<'threadMembersUpdate'>;
} | {
    nombre: 'threadUpdate';
    ejecutar: EventExec<'threadUpdate'>;
} | {
    nombre: 'typingStart';
    ejecutar: EventExec<'typingStart'>;
} | {
    nombre: 'userUpdate';
    ejecutar: EventExec<'userUpdate'>;
} | {
    nombre: 'voiceStateUpdate';
    ejecutar: EventExec<'voiceStateUpdate'>;
} | {
    nombre: 'webhookUpdate';
    ejecutar: EventExec<'webhookUpdate'>;
} | {
    nombre: 'interaction';
    ejecutar: EventExec<'interaction'>;
} | {
    nombre: 'interactionCreate';
    ejecutar: EventExec<'interactionCreate'>;
} | {
    nombre: 'shardDisconnect';
    ejecutar: EventExec<'shardDisconnect'>;
} | {
    nombre: 'shardError';
    ejecutar: EventExec<'shardError'>;
} | {
    nombre: 'shardReady';
    ejecutar: EventExec<'shardReady'>;
} | {
    nombre: 'shardReconnecting';
    ejecutar: EventExec<'shardReconnecting'>;
} | {
    nombre: 'shardResume';
    ejecutar: EventExec<'shardResume'>;
} | {
    nombre: 'stageInstanceCreate';
    ejecutar: EventExec<'stageInstanceCreate'>;
} | {
    nombre: 'stageInstanceUpdate';
    ejecutar: EventExec<'stageInstanceUpdate'>;
} | {
    nombre: 'stageInstanceDelete';
    ejecutar: EventExec<'stageInstanceDelete'>;
} | {
    nombre: 'stickerCreate';
    ejecutar: EventExec<'stickerCreate'>;
} | {
    nombre: 'stickerDelete';
    ejecutar: EventExec<'stickerDelete'>;
} | {
    nombre: 'stickerUpdate';
    ejecutar: EventExec<'stickerUpdate'>;
} | {
    nombre: 'guildScheduledEventCreate';
    ejecutar: EventExec<'guildScheduledEventCreate'>;
} | {
    nombre: 'guildScheduledEventUpdate';
    ejecutar: EventExec<'guildScheduledEventUpdate'>;
} | {
    nombre: 'guildScheduledEventDelete';
    ejecutar: EventExec<'guildScheduledEventDelete'>;
} | {
    nombre: 'guildScheduledEventUserAdd';
    ejecutar: EventExec<'guildScheduledEventUserAdd'>;
} | {
    nombre: 'guildScheduledEventUserRemove';
    ejecutar: EventExec<'guildScheduledEventUserRemove'>;
};
export { CreateEvent, EventExec };
