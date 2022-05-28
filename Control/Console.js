"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoConsole = exports.colorConsole = void 0;
exports.colorConsole = {
    //Efectos
    reseteo: "\x1b[0m",
    brillante: "\x1b[1m",
    dim: "\x1b[2m",
    guionBajo: "\x1b[4m",
    parpadeo: "\x1b[5m",
    reverso: "\x1b[7m",
    oculto: "\x1b[8m",
    //Colores
    negro: "\x1b[30m",
    rojo: "\x1b[31m",
    verde: "\x1b[32m",
    amarillo: "\x1b[33m",
    azul: "\x1b[34m",
    magenta: "\x1b[35m",
    celeste: "\x1b[36m",
    blanco: "\x1b[37m",
    //Background
    BGnegro: "\x1b[40m",
    BGrojo: "\x1b[41m",
    BGverde: "\x1b[42m",
    BGamarillo: "\x1b[43m",
    BGazul: "\x1b[44m",
    BGmagenta: "\x1b[45m",
    BGceleste: "\x1b[46m",
    BGblanco: "\x1b[47m"
};
exports.infoConsole = {
    developer: `${exports.colorConsole.amarillo}${exports.colorConsole.brillante}[DEV]${exports.colorConsole.blanco}${exports.colorConsole.brillante}`,
    bot: `${exports.colorConsole.azul}${exports.colorConsole.brillante}[BOT]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    warn: `${exports.colorConsole.amarillo}${exports.colorConsole.brillante}[ADVERTENCIA]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    error: `${exports.colorConsole.rojo}${exports.colorConsole.brillante}[ERROR]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    comando: `${exports.colorConsole.verde}${exports.colorConsole.brillante}[COMANDO]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    evento: `${exports.colorConsole.magenta}${exports.colorConsole.brillante}[EVENTO]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    info: `${exports.colorConsole.azul}${exports.colorConsole.brillante}[INFO]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`,
    presence: `${exports.colorConsole.celeste}${exports.colorConsole.brillante}[PRESENCE]${exports.colorConsole.brillante}${exports.colorConsole.blanco}`
};
//# sourceMappingURL=Console.js.map