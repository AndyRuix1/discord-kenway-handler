import { Client, CommandInteraction } from "discord.js";
export interface CommandExec {
    (client: Client, interaction: CommandInteraction): void;
}
declare type typeInsideOptions = 'grupo' | 'cadena' | 'entero' | 'numerico' | 'booleano' | 'usuario' | 'usuario' | 'canal' | 'mencion' | 'rol' | 'adjunto';
export interface OptionsInsideCommandBuilder {
    tipo: typeInsideOptions;
    nombre: string;
    descripcion: string;
    requerido?: boolean;
}
export interface OptionsCommandBuilder {
    tipo: typeInsideOptions;
    nombre: string;
    descripcion: string;
    requerido?: boolean;
    opciones?: OptionsInsideCommandBuilder[];
}
export interface SubcommandCommandBuilder {
    nombre: string;
    descripcion: string;
    opciones?: OptionsInsideCommandBuilder[];
}
export interface CreateCommand {
    nombre: string;
    descripcion: string;
    opciones?: OptionsCommandBuilder[];
    sub_comandos?: SubcommandCommandBuilder[];
    ejecutar: CommandExec;
}
export {};
