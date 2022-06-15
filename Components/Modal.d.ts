import { Modal as DiscordModal } from "discord.js";
import { CreateModalInterface } from "../interfaces";
export declare class Ventana {
    private titulo;
    private id;
    private componentes;
    constructor(props: CreateModalInterface);
    /**
     *
     * @returns * Ventana ya creada para insertar.
     */
    crear(): DiscordModal;
    private _createComponents;
    private _checkComponents;
}
