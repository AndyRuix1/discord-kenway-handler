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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCommand = exports.checkCommand = void 0;
const builders_1 = require("@discordjs/builders");
const index_1 = require("../Control/index");
const hasCapitalLetter = (text) => text.trim().split('').some(lyric => lyric === lyric.toUpperCase() && /^[a-zA-Z]+$/gi.test(lyric.toUpperCase()));
const hasSpace = (text) => text.split('').includes(' ');
function checkCommand(command) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        if (!command.hasOwnProperty('nombre') || typeof command.nombre != 'string')
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NO_NAME);
        if (!command.hasOwnProperty('descripcion') || typeof command.descripcion != 'string')
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NO_DESC);
        if (command.opciones && !Array.isArray(command.opciones))
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NO_OPT);
        if (command.sub_comandos && !Array.isArray(command.sub_comandos))
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NO_SUBCMD);
        if (!command.hasOwnProperty('ejecutar') || typeof command.ejecutar != 'function')
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NO_EXEC);
        if (command.nombre.length <= 0 || command.nombre.length > 32)
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NAME_CHAR_LIMIT);
        if (command.descripcion.length <= 0 || command.descripcion.length > 100)
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.DESC_CHAR_LIMIT);
        if (hasCapitalLetter(command.nombre))
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NAME_HAS_C_LETTER);
        if (hasSpace(command.nombre))
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.NAME_HAS_SPACE);
        if (Array.isArray(command.opciones) && command.opciones.length > 25)
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.MAX_OPT_LENGTH);
        if (Array.isArray(command.opciones) && Array.isArray(command.sub_comandos) && command.opciones.length > 1 && command.sub_comandos.length > 1)
            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCMD_AND_OPTIONS_INVALID);
        const validOptionTypes = ['grupo', 'cadena', 'entero', 'numerico', 'booleano', 'usuario', 'canal', 'rol', 'mencion', 'adjunto'];
        if (Array.isArray(command.opciones))
            command.opciones.forEach(opcion => {
                if (!opcion.hasOwnProperty('nombre') || typeof opcion.nombre != 'string')
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NO_NAME);
                if (!opcion.hasOwnProperty('descripcion') || typeof opcion.descripcion != 'string')
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NO_DESC);
                if (!opcion.hasOwnProperty('tipo') || typeof opcion.tipo != 'string')
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NO_TYPE);
                if (!validOptionTypes.includes(opcion.tipo))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INVALID_TYPE);
                if (opcion.opciones && !Array.isArray(opcion.opciones))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NO_OPT);
                if (opcion.tipo != 'grupo' && opcion.hasOwnProperty('opciones') && Array.isArray(opcion.opciones) && opcion.opciones.length > 0)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.OPT_NOT_WORK);
                if (opcion.tipo == 'grupo' && Array.isArray(opcion.opciones) && opcion.opciones.length < 1)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NO_OPT_WITH_GROUP_TYPE);
                if (hasCapitalLetter(opcion.nombre))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NAME_HAS_C_LETTER);
                if (hasSpace(opcion.nombre))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NAME_HAS_SPACE);
                if (opcion.nombre.length > 32 || opcion.nombre.length < 1)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.NAME_CHAR_LIMIT);
                if (opcion.descripcion.length > 100 || opcion.descripcion.length < 1)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.DESC_CHAR_LIMIT);
                if (Array.isArray(opcion.opciones) && opcion.opciones.length > 25)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.MAX_OPT_LENGTH);
                if (Array.isArray(opcion.opciones))
                    opcion.opciones.forEach(subcmd => {
                        if (!subcmd.hasOwnProperty('nombre') || typeof subcmd.nombre != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NO_NAME);
                        if (!subcmd.hasOwnProperty('descripcion') || typeof subcmd.descripcion != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NO_DESC);
                        if (!subcmd.hasOwnProperty('tipo') || typeof subcmd.tipo != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NO_TYPE);
                        if (!validOptionTypes.includes(subcmd.tipo))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.INVALID_TYPE);
                        if (hasCapitalLetter(subcmd.nombre))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NAME_HAS_C_LETTER);
                        if (hasSpace(subcmd.nombre))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NAME_HAS_SPACE);
                        if (subcmd.nombre.length > 32 || subcmd.nombre.length < 1)
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.NAME_CHAR_LIMIT);
                        if (subcmd.descripcion.length > 100 || subcmd.descripcion.length < 1)
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.DESC_CHAR_LIMIT);
                        if (subcmd.hasOwnProperty('opciones'))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.OPTION.INSIDE_OPTIONS.OPT_NOT_WORK);
                    });
            });
        if (Array.isArray(command.sub_comandos))
            command.sub_comandos.forEach(subcommand => {
                if (!subcommand.hasOwnProperty('nombre') || typeof subcommand.nombre != 'string')
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NO_NAME);
                if (!subcommand.hasOwnProperty('descripcion') || typeof subcommand.descripcion != 'string')
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NO_DESC);
                if (subcommand.opciones && !Array.isArray(subcommand.opciones))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NO_OPT);
                if (hasSpace(subcommand.nombre))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NAME_HAS_SPACE);
                if (subcommand.nombre.length > 32 || subcommand.nombre.length <= 0)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NAME_CHAR_LIMIT);
                if (subcommand.descripcion.length > 100 || subcommand.descripcion.length <= 0)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.DESC_CHAR_LIMIT);
                if (hasCapitalLetter(subcommand.nombre))
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.NAME_HAS_C_LETTER);
                if (Array.isArray(subcommand.opciones) && subcommand.opciones.length > 25)
                    throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.MAX_OPT_LENGTH);
                if (Array.isArray(subcommand.opciones))
                    subcommand.opciones.map(opcion => {
                        if (!opcion.hasOwnProperty('nombre') || typeof opcion.nombre != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NO_NAME);
                        if (!opcion.hasOwnProperty('descripcion') || typeof opcion.descripcion != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NO_DESC);
                        if (!opcion.hasOwnProperty('tipo') || typeof opcion.tipo != 'string')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NO_TYPE);
                        if (!validOptionTypes.includes(opcion.tipo) || opcion.tipo == 'grupo')
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.INVALID_TYPE);
                        if (opcion.nombre.length <= 0 || opcion.nombre.length > 32)
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NAME_CHAR_LIMIT);
                        if (hasCapitalLetter(opcion.nombre))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NAME_HAS_C_LETTER);
                        if (hasSpace(opcion.nombre))
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.NAME_HAS_SPACE);
                        if (opcion.descripcion.length <= 0 || opcion.descripcion.length > 100)
                            throw new index_1.Error('Comando', index_1.Info.ERRORS.COMMAND.SUBCOMMAND.OPTION.DESC_CHAR_LIMIT);
                    });
            });
        return resolve(true);
    }));
}
exports.checkCommand = checkCommand;
;
function buildCommand(command) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        let CommandBuild = new builders_1.SlashCommandBuilder()
            .setName(command.nombre)
            .setDescription(command.descripcion);
        if (Array.isArray(command.opciones))
            command.opciones.map(opcion => {
                CommandBuild = addOptions(opcion, CommandBuild);
                if (opcion.tipo == 'grupo') {
                    const CommandGroup = new builders_1.SlashCommandSubcommandGroupBuilder()
                        .setName(opcion.nombre)
                        .setDescription(opcion.descripcion);
                    if (Array.isArray(opcion.opciones))
                        opcion.opciones.map(opt => {
                            CommandGroup.addSubcommand(newSubcommand => {
                                newSubcommand.setName(opt.nombre)
                                    .setDescription(opt.descripcion);
                                return addOptions(opt, newSubcommand);
                            });
                        });
                    CommandBuild.addSubcommandGroup(CommandGroup);
                }
                ;
            });
        if (Array.isArray(command.sub_comandos))
            command.sub_comandos.map(subcommand => {
                CommandBuild.addSubcommand(newSubcommand => {
                    newSubcommand.setName(subcommand.nombre)
                        .setDescription(subcommand.descripcion);
                    if (Array.isArray(subcommand.opciones))
                        for (var i in subcommand.opciones) {
                            newSubcommand = addOptions(subcommand.opciones[i], newSubcommand);
                        }
                    ;
                    return newSubcommand;
                });
            });
        return resolve(CommandBuild);
    }));
}
exports.buildCommand = buildCommand;
;
const addOptions = (opcion, CommandBuild) => {
    if (!opcion)
        return CommandBuild;
    const required = opcion && opcion.requerido && typeof opcion.requerido == 'boolean' ? opcion.requerido : false;
    if (opcion.tipo == 'cadena')
        CommandBuild.addStringOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'entero')
        CommandBuild.addIntegerOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'numerico')
        CommandBuild.addNumberOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'booleano')
        CommandBuild.addBooleanOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'usuario')
        CommandBuild.addUserOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'canal')
        CommandBuild.addChannelOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'rol')
        CommandBuild.addRoleOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'mencion')
        CommandBuild.addMentionableOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    if (opcion.tipo == 'adjunto')
        CommandBuild.addAttachmentOption(opt => opt.setName(opcion.nombre).setDescription(opcion.descripcion).setRequired(required));
    return CommandBuild;
};
//# sourceMappingURL=Comando.js.map