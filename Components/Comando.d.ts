import { CreateCommand } from "../interfaces/index";
import { SlashCommandBuilder } from "@discordjs/builders";
export declare function checkCommand(command: CreateCommand): Promise<Boolean>;
export declare function buildCommand(command: CreateCommand): Promise<SlashCommandBuilder>;
