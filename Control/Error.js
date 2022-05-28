"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Console_1 = require("./Console");
class Failed extends Error {
    constructor(tipo, mensaje, objectError) {
        super();
        this.name = `${Console_1.colorConsole.brillante}${Console_1.colorConsole.rojo}${tipo}`;
        this.message = `${Console_1.colorConsole.brillante}${Console_1.colorConsole.blanco}${mensaje}`;
        objectError ? this.cause = objectError : null;
    }
    ;
}
exports.default = Failed;
;
//# sourceMappingURL=Error.js.map