import { ClientEvents, Client } from "discord.js";
interface EventExec {
    (client?: Client, ...args: any[]): void;
}
interface CreateEvent {
    nombre: keyof ClientEvents;
    ejecutar: EventExec;
}
export { CreateEvent, EventExec };
